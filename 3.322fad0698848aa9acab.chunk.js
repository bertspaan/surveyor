webpackJsonp([3,4],{613:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return{changeRoute:function(t){return e(o.i(d.push)(t))}}}var l=o(6),s=l&&l.__esModule?function(){return l["default"]}:function(){return l};o.d(s,"a",s);var c=o(83),u=c&&c.__esModule?function(){return c["default"]}:function(){return c};o.d(u,"a",u);var d=o(75),p=d&&d.__esModule?function(){return d["default"]}:function(){return d};o.d(p,"a",p);var f=o(618);o.d(t,"AboutPage",function(){return m});var h=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var l in i)void 0===o[l]&&(o[l]=i[l]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var s=Array(a),c=0;a>c;c++)s[c]=arguments[c+3];o.children=s}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),g=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),y=o(709),m=function(e){function t(){var e,o,i,a;n(this,t);for(var l=arguments.length,s=Array(l),c=0;l>c;c++)s[c]=arguments[c];return o=i=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.openRoute=function(e){i.props.changeRoute(e)},i.toSurveyor=function(){i.openRoute("/")},a=o,r(i,a)}return i(t,e),g(t,[{key:"render",value:function(){return h(f.a,{buttonAction:this.toSurveyor},void 0,h("div",{dangerouslySetInnerHTML:{__html:y}}))}}]),t}(s.a.Component);t["default"]=o.i(c.connect)(null,a)(m)},615:function(e,t,o){"use strict";function n(e){var t,o=[l.a.button,e.type&&l.a[e.type]?l.a[e.type]:"",e.disabled?l.a.disabled:""];return e.disabled||(t=e.onClick),s("button",{tabindex:"0",className:o.join(" "),onClick:t},void 0,e.children)}var r=o(6),i=r&&r.__esModule?function(){return r["default"]}:function(){return r};o.d(i,"a",i);var a=o(623),l=a&&a.__esModule?function(){return a["default"]}:function(){return a};o.d(l,"a",l);var s=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var l in i)void 0===o[l]&&(o[l]=i[l]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var s=Array(a),c=0;a>c;c++)s[c]=arguments[c+3];o.children=s}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}();t.a=n},616:function(e,t,o){"use strict";function n(e){return s("div",{className:l.a.buttons},void 0,e.children)}var r=o(6),i=r&&r.__esModule?function(){return r["default"]}:function(){return r};o.d(i,"a",i);var a=o(624),l=a&&a.__esModule?function(){return a["default"]}:function(){return a};o.d(l,"a",l);var s=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var l in i)void 0===o[l]&&(o[l]=i[l]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var s=Array(a),c=0;a>c;c++)s[c]=arguments[c+3];o.children=s}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}();t.a=n},617:function(e,t,o){"use strict";function n(e){return u("footer",{className:c.a.footer+" "+e.className},void 0,u("nav",{},void 0,u("div",{className:c.a.container+" "+c.a["nav-container"]},void 0,d,p,f,h)),u("div",{className:c.a.container},void 0,g,y,m))}var r=o(6),i=r&&r.__esModule?function(){return r["default"]}:function(){return r};o.d(i,"a",i);var a=o(265),l=a&&a.__esModule?function(){return a["default"]}:function(){return a};o.d(l,"a",l);var s=o(625),c=s&&s.__esModule?function(){return s["default"]}:function(){return s};o.d(c,"a",c);var u=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var l in i)void 0===o[l]&&(o[l]=i[l]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var s=Array(a),c=0;a>c;c++)s[c]=arguments[c+3];o.children=s}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),d=u("a",{href:"http://www.nypl.org/help/about-nypl/legal-notices/privacy-policy",target:"_blank"},void 0,"Privacy Policy"),p=u("a",{href:"http://www.nypl.org/help/about-nypl/legal-notices/rules-and-regulations",target:"_blank"},void 0,"Rules and Regulations"),f=u("a",{href:"http://www.nypl.org/policy-patron-generated-web-content",target:"_blank"},void 0,"Policy on Patron-Generated Web Content"),h=u("a",{href:"http://www.nypl.org/help/about-nypl/legal-notices/website-terms-and-conditions",target:"_blank"},void 0,"Terms and Conditions"),g=u("p",{},void 0,"A ",u("a",{href:"http://spacetime.nypl.org/"},void 0,"NYC Space/Time Directory")," project"),y=u("p",{},void 0,"© The New York Public Library, Astor, Lenox, and Tilden Foundation 2013-2016"),m=u("p",{},void 0,u("a",{href:"http://www.nypl.org"},void 0,u("img",{alt:"The New York Public Library",src:l.a})));t.a=n},618:function(e,t,o){"use strict";function n(e){return d("div",{className:u.a.container},void 0,d("article",{className:u.a.article},void 0,e.children),d(s.a,{},void 0,d(l.a,{onClick:e.buttonAction,type:"primary"},void 0,"Start Surveying!")),d(a.a,{className:u.a.footer}))}var r=o(6),i=r&&r.__esModule?function(){return r["default"]}:function(){return r};o.d(i,"a",i);var a=o(617),l=o(615),s=o(616),c=o(626),u=c&&c.__esModule?function(){return c["default"]}:function(){return c};o.d(u,"a",u);var d=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var l in i)void 0===o[l]&&(o[l]=i[l]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var s=Array(a),c=0;a>c;c++)s[c]=arguments[c+3];o.children=s}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}();t.a=n},619:function(e,t,o){t=e.exports=o(263)(),t.push([e.i,"._3tez2OnhHZXdCwD81hRXzS{cursor:pointer;box-sizing:border-box;display:inline;background-color:#dededf;border-radius:2rem;color:#fff;display:inline-block;margin:.6rem;padding:.5rem 1.3rem .3rem;text-transform:uppercase;border:1px solid hsla(0,0%,100%,0)}._3tez2OnhHZXdCwD81hRXzS:not(._3ISOLl3xbvzjUffCWl1oT3):active{border-color:#fff}._371bnJ8txOs2SLokYSFtMm{background-color:#d0343a}._1rR3F0EgPd16FrJDWzWJ60{color:#d0343a;background:none}._3ISOLl3xbvzjUffCWl1oT3{background-color:#dededf;cursor:inherit}",""]),t.locals={button:"_3tez2OnhHZXdCwD81hRXzS",disabled:"_3ISOLl3xbvzjUffCWl1oT3",primary:"_371bnJ8txOs2SLokYSFtMm",secondary:"_1rR3F0EgPd16FrJDWzWJ60"}},620:function(e,t,o){t=e.exports=o(263)(),t.push([e.i,"._3F7V9M2-PAppGaYPXANKxW{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around;width:100%;max-width:300px;margin:0 auto;-ms-flex-negative:0;flex-shrink:0}",""]),t.locals={buttons:"_3F7V9M2-PAppGaYPXANKxW"}},621:function(e,t,o){t=e.exports=o(263)(),t.push([e.i,"._12LGeWyqxzQ-d7QrWjWm94{width:100%;font-size:.8em;margin-top:2em;margin-bottom:2em}._12LGeWyqxzQ-d7QrWjWm94 ._1KP6vkZpft0IGd0usTiAbi{max-width:90%;margin:0 auto}._12LGeWyqxzQ-d7QrWjWm94 nav{padding-top:12px;padding-bottom:10px;width:100%;margin-bottom:1em}._2sLDfzkM1hCQd9MGqsQb19{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}._12LGeWyqxzQ-d7QrWjWm94 nav a{text-align:center;padding:0 .5em}._12LGeWyqxzQ-d7QrWjWm94 nav a,._12LGeWyqxzQ-d7QrWjWm94 nav a:visited{color:#fff}._12LGeWyqxzQ-d7QrWjWm94 nav a:focus,._12LGeWyqxzQ-d7QrWjWm94 nav a:hover{text-decoration:underline}._12LGeWyqxzQ-d7QrWjWm94 img{margin:0 auto;width:55px}._12LGeWyqxzQ-d7QrWjWm94 p{text-align:center}",""]),t.locals={footer:"_12LGeWyqxzQ-d7QrWjWm94",container:"_1KP6vkZpft0IGd0usTiAbi","nav-container":"_2sLDfzkM1hCQd9MGqsQb19"}},622:function(e,t,o){t=e.exports=o(263)(),t.push([e.i,".Bx84jMCskO46cj_SYztq{overflow-y:auto;width:100%;-ms-flex:1;flex:1}._35S30RSzYCndMCfSKaf_j8{width:760px;max-width:90%;margin:0 auto;padding-top:1em;box-sizing:border-box}._35S30RSzYCndMCfSKaf_j8 h1{text-align:center}._35S30RSzYCndMCfSKaf_j8 ol,._35S30RSzYCndMCfSKaf_j8 ul{margin:1em}._35S30RSzYCndMCfSKaf_j8 img{margin:1em 0;max-width:100%}._13H9hJkRQquROl0HbN4Fwz nav{background-color:#080808}",""]),t.locals={container:"Bx84jMCskO46cj_SYztq",article:"_35S30RSzYCndMCfSKaf_j8",footer:"_13H9hJkRQquROl0HbN4Fwz"}},623:[728,619],624:[728,620],625:[728,621],626:[728,622],709:function(e,t){e.exports='<h1>About Surveyor</h1> <p>Welcome! Through mobile apps, online maps, and serendipity, we discover new things in our geography everyday. At NYPL, we’re inviting you to discover our collections through the lens of geography and, in the process, allow others to discover geographically as well! How? NYPL Surveyor is an experiment in geotagging NYPL’s Digital Collections. We’ve built an interactive interface for viewing and locating items from our rich collections. With each contribution, you’re creating new knowledge around the Library’s collections. We’ve selected a handful of collections to start:</p> <ul> <li><a href="http://digitalcollections.nypl.org/collections/the-eno-collection-of-new-york-city-views#/?tab=about">The Eno collection of New York City views</a></li> <li><a href="http://digitalcollections.nypl.org/collections/changing-new-york#/?tab=about">Changing New York</a></li> <li><a href="http://digitalcollections.nypl.org/collections/album-of-photographs-depicting-the-construction-of-the-broadway-line-new-york#/?tab=about">Album of photographs depicting the construction of the Broadway line, New York City Subway.</a></li> <li><a href="http://digitalcollections.nypl.org/collections/album-of-photographs-showing-construction-of-the-cable-road-on-broadway-new-york#/?tab=about">Album of photographs showing construction of the cable road on Broadway, New York City, in 1891.</a></li> <li><a href="http://digitalcollections.nypl.org/collections/pictorial-description-of-broadway#/?tab=about">Pictorial Description of Broadway</a></li> <li><a href="http://digitalcollections.nypl.org/collections/morris-rosenfeld-photographs#/?tab=about">Morris Rosenfeld Photographs</a></li> <li><a href="http://digitalcollections.nypl.org/collections/collection-of-photographs-of-east-river-and-hudson-river-piers-manhattan#/?tab=about">Collection of photographs of East River and Hudson River piers, Manhattan</a></li> <li><a href="http://digitalcollections.nypl.org/collections/fifth-avenue-new-york-from-start-to-finish#/?tab=about">Fifth Avenue, New York, from start to finish</a></li> <li><a href="http://digitalcollections.nypl.org/collections/outer-boroughs-new-york-beyond-manhattan#/?tab=about">Outer Boroughs: New York beyond Manhattan</a></li> <li><a href="http://digitalcollections.nypl.org/collections/collection-of-photographs-of-new-york-city#/?tab=about">Collection of photographs of New York City</a></li> <li><a href="http://digitalcollections.nypl.org/collections/collection-of-photographs-of-new-york-city-1931-1942#/?tab=about">Collection of photographs of New York City, 1931-1942</a></li> </ul> <p>After we analyze the initial wave of submissions, we will build out quality control mechanisms and a map interface for discovering the geotagged collections.</p> <p>NYPL Surveyor is project in the <a href=http://spacetime.nypl.org/ >NYC Space/Time Directory</a>, a major civic initiative aimed at turning historical maps and other geographic sources into a digital time-travel service for New York City. <a href=http://pages.email.nypl.org/spacetimeupdates/ >Sign up for our mailing list</a> to receive updates about the NYC Space/Time Directory.</p> <h2>Rules &amp; Guidance</h2> <p>There are two guiding principles of geotagging in NYPL Surveyor: <strong>take your best guess</strong> and remember <strong>it’s okay to skip</strong>! With Surveyor, we’re starting from scratch so even getting an item in the right time zone is helpful! This project is a shared effort and if you don’t recognize a location, others might. Feel free to skip items if you can’t locate them on the map.</p> <p>With those two tenets in mind, you’re all set to start surveying. You’ll find that some items require a little research to pin correctly. For each item, we’ve included links to useful resources like our <a href=http://digitalcollections.nypl.org/ >Digital Collections</a> and <a href=http://maps.nypl.org/warper/ >Map Warper</a>.</p> <h2>Contact Information</h2> <p>Questions? Comments? Contact us at <a href="mailto:oralhistory@nypl.org?Subject=Surveyor">spacetime@nypl.org</a>.</p> <h2>Frequently Asked Questions</h2> <h3>How should you deal with “View From” shots?</h3> <p>Sometimes prints and photographs will be of the “A View From” type shots. Meaning, they depict a very wide view from one particular point in the city. How for instance, should you tag the following?</p> <p><a href=http://digitalcollections.nypl.org/items/510d47d9-7aba-a3d9-e040-e00a18064a99><img src="http://images.nypl.org/index.php?id=53913&amp;t=w" alt="The south prospect of the city of New York, in North America"></a></p> <p>For these images place the marker in the approximate middle of the view. In Surveyor, a second, optional step allows you to mark the full width of the image and note place where the images point of view. You can use this second step to more accurately tag these wide images.</p> <h3>How do I geotag an item with multiple locations?</h3> <p>Some items contain multiple locations. For instance, this item from <a href=http://digitalcollections.nypl.org/items/510d47dc-a06f-a3d9-e040-e00a18064a99>Views of NYC</a> contains three unique photos.</p> <p><a href=http://digitalcollections.nypl.org/items/510d47dc-a06f-a3d9-e040-e00a18064a99><img src="http://images.nypl.org/index.php?id=700001F&amp;t=w" alt="Bronx: 3rd Avenue - 135th Street"></a></p> <p>For items with multiple locations, simple select one location to geotag. Remember, we’re asking multiple people to tag each item and we’ll be able to programmatically recognize which items have multiple locations.</p> <h3>How to handle low res images?</h3> <p>If an image is low resolution and difficult to view, try viewing the item in our Digital Collections, where higher resolution versions of the image are available. Each item will have an easy link to their Digital Collections page.</p> <h3>Historic addresses! How do I handle them?</h3> <p>As history buffs and others know, New York City’s addresses aren’t static through time. Since street names change and numerical addresses have been reassigned throughout the years. How to accurately map historic materials is one of the big challenges we’re tackling with the NYC Space/Time Directory project. For Surveyor, pin the item based on the physical location rather than the street address.</p> <h3>How do I tag an item when the buildings don’t exist anymore?</h3> <p>Tag the items where they would have stood when they existed. For instance, this lantern slide of the Crystal Palace should be pinned to the area which is now Bryant Park.</p> <p><a href=http://digitalcollections.nypl.org/items/510d47da-ea3d-a3d9-e040-e00a18064a99><img src="http://images.nypl.org/index.php?id=465509&amp;t=w" alt="Crystal Palace, ca. 1853, from an engraving"></a></p>'},728:function(e,t,o,n){var r=o(n);"string"==typeof r&&(r=[[e.i,r,""]]),o(264)(r,{}),r.locals&&(e.exports=r.locals)}});