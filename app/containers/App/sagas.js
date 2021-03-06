/* global __CONFIG__ */

import { take, call, put, select } from 'redux-saga/effects'
import { replace } from 'react-router-redux'

import {
  LOAD_OAUTH,
  LOAD_OAUTH_SUCCESS,
  LOAD_ITEM,
  LOAD_ITEM_SUCCESS,

  LOG_OUT,
  LOG_OUT_SUCCESS,

  NEXT_STEP,

  SUBMIT_STEP,
  SUBMIT_STEP_SUCCESS,
  SKIP_STEP,
  SKIP_STEP_SUCCESS
} from 'containers/App/constants'

import {
  loadItem,
  itemLoaded, itemLoadingError,
  stepSubmitted, stepSubmitError,
  stepSkipped, stepSkipError,
  loadOAuth, oauthLoaded, oauthLoadingError,
  submissionsLoaded, submissionsLoadingError,
  logOutSuccess, logOutError
} from 'containers/App/actions'

import request from 'utils/request'

import {
  selectItem,
  selectCurrentStepIndex,
  selectCollections
} from 'containers/App/selectors'

const API_URL = __CONFIG__.api.url
const TASK_ID = __CONFIG__.tasks.taskId

function isFunction (functionToCheck) {
  const getType = {}
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
}

function* requestData (constant, getUrl, options) {
  while (true) {
    const action = yield take(constant)

    let url
    if (isFunction(getUrl)) {
      url = getUrl(action)
    } else {
      url = getUrl
    }

    if (url) {
      const defaultFetchOptions = {
        credentials: 'include'
      }

      let fetchOptions = options.fetchOptions

      // If options.fetchOptions is a function, call this function
      if (fetchOptions && isFunction(fetchOptions)) {
        fetchOptions = fetchOptions(action)
      } else if (!fetchOptions) {
        fetchOptions = {}
      }

      // Merge default fetchOptions
      fetchOptions = Object.assign(
        {},
        defaultFetchOptions,
        fetchOptions
      )

      // Use call from redux-saga for easier testing
      let result
      try {
        result = yield call(request, url, fetchOptions)
      } catch (err) {
        // TODO: add actionErrorParams?
        if (options.actionError) {
          yield put(options.actionError({
            message: err.message,
            status: err.response ? err.response.status : -1,
            url: url
          }))
        }
        return
      }

      // If actionSuccess is present in options, call this function when
      //   request call is successful
      if (options.actionSuccess) {
        let actionSuccessParams = (action, resultData) => [resultData]

        if (options.actionSuccessParams) {
          actionSuccessParams = options.actionSuccessParams
        }

        yield put(options.actionSuccess.apply(null, actionSuccessParams(action, result)))
      }
    }
  }
}

export function* setRoute () {
  while (true) {
    // yield take([SUBMIT_STEP_SUCCESS, SKIP_STEP_SUCCESS, NEXT_STEP, LOAD_ITEM_SUCCESS]);
    yield take(LOAD_ITEM_SUCCESS)

    // const stepIndex = yield select(selectCurrentStepIndex());
    const item = yield select(selectItem())

    if (item) {
      const path = `/${item.id}`

      // if (stepIndex > 0) {
      //   const step = yield select(selectCurrentStep());
      //   path += `/${step}`
      // }

      yield (put(replace(path)))
    }
  }
}

export function* resetItem () {
  while (true) {
    yield take([SUBMIT_STEP_SUCCESS, SKIP_STEP_SUCCESS, NEXT_STEP])

    const stepIndex = yield select(selectCurrentStepIndex())

    if (stepIndex === 0) {
      // last step is reached after this event, state.steps.length === 0
      yield (put(loadItem()))
    }
  }
}

export function* getItem () {
  const collections = yield select(selectCollections())
  const collectionUuids = collections.map((collection) => collection.uuid)

  const getUrl = (action) => {
    const id = action.id

    if (!id) {
      return `${API_URL}tasks/${TASK_ID}/items/random?collection=${collectionUuids.join(',')}`
    }

    return `${API_URL}organizations/${action.organizationId}/items/${id}`
  }

  yield * requestData(LOAD_ITEM, getUrl, {
    actionSuccess: itemLoaded,
    actionError: itemLoadingError
  })
}

export function* submitStep () {
  const getUrl = (action) => `${API_URL}submissions`

  const fetchOptions = (action) => ({
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      step: action.step,
      stepIndex: action.stepIndex,
      data: action.data,
      item: {
        id: action.id
      },
      organization: {
        id: action.organizationId
      },
      task: {
        id: TASK_ID
      }
    })
  })

  yield * requestData(SUBMIT_STEP, getUrl, {
    fetchOptions,
    actionSuccess: stepSubmitted,
    actionSuccessParams: (action, resultData) => [
      action.organizationId,
      action.id,
      action.step,
      action.stepIndex,
      action.data,
      action.geometry
    ],
    actionError: stepSubmitError
  })
}

export function* skipStep () {
  const getUrl = (action) => `${API_URL}submissions`

  const fetchOptions = (action) => ({
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      step: action.step,
      stepIndex: action.stepIndex,
      skipped: true,
      item: {
        id: action.id
      },
      organization: {
        id: action.organizationId
      },
      task: {
        id: TASK_ID
      }
    })
  })

  yield * requestData(SKIP_STEP, getUrl, {
    fetchOptions,
    actionSuccess: stepSkipped,
    actionSuccessParams: (action, resultData) => [
      action.organizationId,
      action.id,
      action.step,
      action.stepIndex
    ],
    actionError: stepSkipError
  })
}

export function* getLogOut () {
  yield * requestData(LOG_OUT, `${API_URL}oauth/disconnect`, {
    actionSuccess: logOutSuccess,
    actionError: logOutError
  })
}

export function* getSubmissions () {
  yield * requestData(LOAD_OAUTH_SUCCESS, `${API_URL}tasks/${TASK_ID}/submissions/count`, {
    actionSuccess: submissionsLoaded,
    actionError: submissionsLoadingError
  })
}

export function* getLogOutSuccess () {
  while (true) {
    yield take(LOG_OUT_SUCCESS)
    yield put(loadOAuth())
  }
}

export function* getOAuth () {
  yield * requestData(LOAD_OAUTH, `${API_URL}oauth`, {
    actionSuccess: oauthLoaded,
    actionError: oauthLoadingError
  })
}

export default [
  resetItem,
  setRoute,
  getSubmissions,
  getItem,
  getOAuth,
  submitStep,
  skipStep,
  getLogOut,
  getLogOutSuccess // TODO: this is not the right way!?
]
