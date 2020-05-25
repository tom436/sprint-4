import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const API_KEY = "AIzaSyDN84FuA5oEJP6gRqB5PthEdE9pAOuE_Cg"



const containerStyle = {
  position: 'relative',  
  width: '100%',
  height: '100%'
}
class MapContainer extends Component {
  render() {
    return (
      <Map containerStyle={containerStyle} google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
                {/* <h1>{this.state.selectedPlace.name}</h1> */}
              </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer)