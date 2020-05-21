import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const API_KEY = "AIzaSyDN84FuA5oEJP6gRqB5PthEdE9pAOuE_Cg"



class MapContainer extends Component {
  render() {
    return (
      <Map style={{width: 200, height: 200}} google={this.props.google} zoom={14}>

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