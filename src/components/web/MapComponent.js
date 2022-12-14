import React from 'react';
import { TileLayer, Marker, MapContainer} from 'react-leaflet';
import L from 'leaflet';
import util from 'util';

import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import './app.css';

import Routing from './Routing';
import RasterLayer from './RasterLayer';

const MESSAGE_PREFIX = 'react-native-webview-leaflet';
const SHOW_DEBUG_INFORMATION = WEBPACK_ENV === 'developement';
const ENABLE_BROWSER_TESTING = WEBPACK_ENV === 'developement';

class MapComponent extends React.Component {
  constructor(props) {
    super(props);

    this.mapRef = null;
    this.state = {
      loaded: false,
      zoom: 13,
      mapLayer: null,
      ownPositionMarker: null,
      urlRouter: null,
      routingMarkers: null,
      centerPosition: null,
      markers: [],
      debugMessages: []
    };
  }

  componentDidMount = () => {
    // add event listeners
    if (document) {
      document.addEventListener('message', this.handleMessage);

      this.printElement('using document');
    } else if (window) {
      window.addEventListener('message', this.handleMessage);

      this.printElement('using window');
    } else {
      return console.log('unable to add event listener');
    }

    // debug mode for web browser
    if (ENABLE_BROWSER_TESTING) {
      const centerPosition = [48.88658, 2.28741];

      this.setState({
        mapLayer: {
          name: 'OpenStreetMap',
          type: 'TileLayer',
          url: `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
          attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        },
        centerPosition: centerPosition,
        ownPositionMarker: {
          id: 'position',
          coords: centerPosition
        },
        markers: [
          {
            id: 'marker1',
            coords: [45.752432918044825, 4.841709136962891]
          }, {
            id: 'marker2',
            coords: [45.741891419102785, 4.870891571044922]
          }
        ]
      });
    }
  };

  componentWillUnmount = () => {
    if (document) {
      document.removeEventListener('message', this.handleMessage);
    } else if (window) {
      window.removeEventListener('message', this.handleMessage);
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.mapLayer !== prevState.mapLayer) {
      this.printElement(`updating mapLayer to ${JSON.stringify(this.state.mapLayer)}`);
    }

    if (this.state.centerPosition !== prevState.centerPosition) {
      this.printElement(`updating centerPosition to ${this.state.centerPosition}`);
    }

    if (this.state.urlRouter !== prevState.urlRouter) {
      this.printElement(`updating urlRouter to ${JSON.stringify(this.state.urlRouter)}`);
    }

    if (this.state.routingMarkers !== prevState.routingMarkers) {
      this.printElement(`updating routingMarkers to ${JSON.stringify(this.state.routingMarkers)}`);
    }

    if (this.state.ownPositionMarker !== prevState.ownPositionMarker) {
      this.printElement(`updating ownPositionMarker to ${JSON.stringify(this.state.ownPositionMarker)}`);
    }

    if (this.state.markers !== prevState.markers) {
      this.printElement(`updating markers to ${JSON.stringify(this.state.markers)}`);
    }
  };

  // update the map ref
  updateMapRef = (ref) => {
    if (ref) {
      this.mapRef = ref;
    }
  };

  // print passed information in an html element; useful for debugging since console.log and debug statements won't work in a conventional way
  printElement = (data) => {
    if (!SHOW_DEBUG_INFORMATION) {
      return;
    }

    let message = '';

    if (typeof data === 'object') {
      message = util.inspect(data, {
        showHidden: false,
        depth: null
      });
    } else if (typeof data === 'string') {
      message = data;
    }

    this.setState({
      debugMessages: [
        ...this.state.debugMessages,
        message
      ]
    }, () => {
      if (ENABLE_BROWSER_TESTING) {
        console.log(message);
      }
    });
  };

  // create a leaflet icon
  createDivIcon = (location) => {
    return L.divIcon({
      className: 'clearMarkerContainer',
      html: `<div style='font-size: ${Math.max(location.size[0], location.size[1])}px'>
          ${location.icon}
          </div>`,
      iconAnchor: location.iconAnchor || null
    });
  };

  // data to send is an object containing key value pairs that will be spread into the destination's state
  sendMessage = (payload) => {
    const message = JSON.stringify({prefix: MESSAGE_PREFIX, payload: payload});

    try {
      if (document.hasOwnProperty('postMessage')) {
        document.postMessage(message, '*');
      } else if (window.hasOwnProperty('postMessage')) {
        window.postMessage(message, '*');
      } else {
        throw new Error(`unable to find postMessage`);
      }

      this.printElement(`message sent: ${message}`);
    } catch (error) {
      this.printElement(`error sending message: ${JSON.stringify(error)}`);
    }
  };

  // handle the received messages from the WebView
  handleMessage = (event) => {
    try {
      let msgData = JSON.parse(event.data);

      if (msgData.hasOwnProperty('prefix') && msgData.prefix === MESSAGE_PREFIX) {
        this.printElement(`Received message: ${JSON.stringify(msgData)}`);

        this.setState({
          ...this.state,
          ...msgData.payload
        });
      }
    } catch (err) {
      this.printElement(`leafletReactHTML error: ${err}`);
    }
  };

  // handle the map events
  onMapEvent = (event, payload) => {
    if (!this.mapRef) {
      return;
    }

    const mapCenterPosition = [this.mapRef.leafletElement.getCenter().lat, this.mapRef.leafletElement.getCenter().lng];
    const mapBounds = this.mapRef.leafletElement.getBounds();
    const mapZoom = this.mapRef.leafletElement.getZoom();

    if (!payload) {
      payload = {
        center: mapCenterPosition,
        bounds: mapBounds,
        zoom: mapZoom
      };
    }

    this.printElement(`onMapEvent: event = ${event}, payload = ${JSON.stringify(payload)}`);

    this.sendMessage({event, payload});

    // update the map's center in state if it has moved
    // The map's center in state (centerPosition) is used by react.leaflet
    // to center the map.  Centering the map component on the actual
    // map center will allow us to recenter the map by updating the centerPosition
    // item in state ourself

    switch (event) {
      case 'onMoveEnd':
        this.setState({centerPosition: mapCenterPosition});
        break;

      case 'onZoomEnd':
        this.setState({zoom: mapZoom});
        break;

      case 'onMapLoaded':
        if (ENABLE_BROWSER_TESTING) {
          this.setState({
            urlRouter: 'http://127.0.0.1:5000/route/v1',
            routingMarkers: {
              from: [
                48.87541, 2.32555
              ],
              to: [48.85513, 2.38713]
            }
          });
        }
        break;

      default:
    }
  };

  // display the own position marker
  renderMarkerOwnPosition = () => {
    const {ownPositionMarker, loaded} = this.state;

    if (!ownPositionMarker || !loaded) {
      return null;
    }

    if (ownPositionMarker.icon) {
      const divIcon = this.createDivIcon(ownPositionMarker);

      return (<Marker position={ownPositionMarker.coords} icon={divIcon} onClick={(event) => {
          this.onMapEvent('onCurrentPositionClicked', {ownPositionMarker});
        }}/>);
    } else {
      return (<Marker position={ownPositionMarker.coords} onClick={(event) => {
          this.onMapEvent('onCurrentPositionClicked', {ownPositionMarker});
        }}/>);
    }
  };

  // display the routing
  renderRouting = () => {
    const {routingMarkers, loaded, urlRouter} = this.state;

    if (!routingMarkers || !loaded) {
      return null;
    }

    return (<Routing coords={routingMarkers} mapComponent={this} urlRouter={urlRouter}/>);
  };

  // display the markers
  renderMarkers = () => {
    return this.state.markers.map((marker, index) => {
      if (marker.icon) {
        const divIcon = this.createDivIcon(marker);

        return (<Marker key={index} position={marker.coords} icon={divIcon} onClick={(event) => {
            this.onMapEvent('onMapMarkerClicked', {marker});
          }}/>);
      } else {
        return (<Marker key={index} position={marker.coords} onClick={(event) => {
            this.onMapEvent('onMapMarkerClicked', {marker});
          }}/>);
      }
    });
  };

  // display error messages
  renderDebugInfos = () => {
    return SHOW_DEBUG_INFORMATION
      ? (<div style={{
          backgroundColor: 'orange',
          maxHeight: '150px',
          width: '100%',
          overflow: 'auto',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2000
        }} id='messages'>
        <ul style={{
            margin: 0,
            padding: '5px 20px'
          }}>
          {
            this.state.debugMessages.map((message, index) => {
              return <li key={index}>{message}</li>;
            })
          }
        </ul>
      </div>)
      : null
  };

  renderLayer = () => {
    return (<RasterLayer layer={this.state.mapLayer}/>);
  }

  // display the map
  renderMap = () => {
    return (<MapContainer
        // ref
        ref={ref => this.updateMapRef(ref)}
        // position of the map
        center={this.state.centerPosition}
        // zoom
        zoom={this.state.zoom} maxZoom={18}
        // EVENTS
        whenReady={() => {
          this.setState({
            loaded: true
          }, () => {
            this.printElement(`******* map loaded *******`);
            this.onMapEvent('onMapLoaded', null);
          });
        }} onClick={(event) => {
          this.onMapEvent('onMapClicked', {
            coords: [event.latlng.lat, event.latlng.lng]
          });
        }} onZoomLevelsChange={() => {
          this.onMapEvent('onZoomLevelsChange', null);
        }} onResize={() => {
          this.onMapEvent('onResize', null);
        }} onZoomStart={() => {
          this.onMapEvent('onZoomStart', null);
        }} onMoveStart={() => {
          this.onMapEvent('onMoveStart', null);
        }} onZoom={() => {
          this.onMapEvent('onZoom', null);
        }} onMove={() => {
          this.onMapEvent('onMove', null);
        }} onZoomEnd={() => {
          this.onMapEvent('onZoomEnd', null);
        }} onMoveEnd={() => {
          this.onMapEvent('onMoveEnd', null);
        }} onUnload={() => {
          this.onMapEvent('onUnload', null);
        }} onViewReset={() => {
          this.onMapEvent('onViewReset', null);
        }}>
        {this.renderLayer()}
        {this.renderMarkerOwnPosition()}
        {this.renderMarkers()}
        {this.renderRouting()}
      </MapContainer>);
  }

  render() {
    return (<div style={{
        width: '100%',
        height: '100%'
      }}>
      {this.renderMap()}
      {this.renderDebugInfos()}
    </div>)
  }
}

export default MapComponent;
