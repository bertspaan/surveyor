import React from 'react';

import Map from 'containers/Map';

import StepContainer from 'components/StepContainer';
import Button from 'components/Button';
import Buttons from 'components/Buttons';

import stepStyles from './steps.css';
import styles from './location.css';

export class Step extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        hasMoved: false
      };
    }

  render() {
    var mapEvents = {
      movestart: this.onMoveStart.bind(this)
    };

    return (
      <StepContainer>
        <div className={styles['map-container']}>
          <Map ref='map' defaults={this.props.defaults} mapEvents={mapEvents} geocoder={true} />
          <div className={styles['crosshair-container']}>
            <div className={styles.crosshair}>
              <div className={styles.box}>
                <span className={styles.here}>Here!</span>
                <span>(I think)</span>
              </div>
              <div className={styles.shadow} />
            </div>
          </div>
        </div>
        <Buttons>
          <Button onClick={this.props.skip} type='secondary'>Skip</Button>
          <Button onClick={this.submit.bind(this)} type='primary' disabled={!this.state.hasMoved}>Submit</Button>
        </Buttons>
      </StepContainer>
    );
  }

  submit () {
    if (this.state.hasMoved) {
      var view = this.refs.map.getWrappedInstance().getView();
      this.props.submit({
        zoom: view.zoom
      }, {
        type: 'Point',
        coordinates: view.center
      });
    }
  }

  onMoveStart () {
    if (!this.state.hasMoved) {
      this.setState({
        hasMoved: true
      })
    }
  }
}

export default Step;

//
// const Step = React.createClass({
//   getInitialState: function() {
//     return {
//       hasMoved: false
//     };
//   },
//
//   render: function() {
//
//     var mapEvents = {
//       movestart: this.onMoveStart
//       // click: this.onClick
//     };
//
//     return (
//       <div className='geotagger-step opaque all-margin-top'>
//         <h1>Where is this?</h1>
//         <div>
//           Help us build
//           a <a href='http://spacetime.nypl.org/' target='_blank'>Space/Time Directory</a> by <a href='https://en.wikipedia.org/wiki/Geotagging' target='_blank'>geotagging</a> our
//           collection.
//         </div>
//         <div>
//           Can you center the map as precisely as you can on the location of the image? <a href='javascript:void(0)' onClick={this.props.help}>Help!</a>
//         </div>
//         <div>
//           <Map ref='map' defaults={this.props.defaults} mapEvents={mapEvents} geocoder={true} />
//         </div>
//         <div className='buttons'>
//           <button className='button-red' onClick={this.props.skip}>Skip this image</button>
//           <button className='button-green' disabled={!this.state.hasMoved} onClick={this.done}>Yes, here</button>
//         </div>
//       </div>
//     );
//   },
//
//   onMoveStart: function() {
//     if (!this.state.hasMoved) {
//       this.setState({
//         hasMoved: true
//       });
//     }
//   },
//
//   // onClick: function(e) {
//   //   this.refs.map.setView(e.latlng);
//   // },
//
//   done: function() {
//     if (this.state.hasMoved) {
//       var view = this.refs.map.getView();
//       this.props.done({zoom: view.zoom}, {
//         type: 'Point',
//         coordinates: view.center
//       });
//     }
//   }
//
// });
//