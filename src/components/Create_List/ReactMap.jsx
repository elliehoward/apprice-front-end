import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

class ReactMap extends Component{
    constructor(props){
        super(props);
    }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    console.log(this.props.data);
    if(this.props.data.stores === 1) {
        let {coords} = this.props.data.location;
        let store1 = this.props.data.oneStore[0];
        return (
            <Gmaps
              width={'100%'}
              height={'300px'}
              lat={coords.lat}
              lng={coords.lng}
              zoom={12}
              loadingMessage={'Be happy'}
              params={{v: '3.exp', key: 'YOUR_API_KEY'}}
              onMapCreated={this.onMapCreated}>
              <Marker
                lat={coords.lat}
                lng={coords.lng}
                draggable={true}
                onDragEnd={this.onDragEnd} />
              {/* <InfoWindow
                lat={coords.lat}
                lng={coords.lng}
                content={`You are here!`}
                onCloseClick={this.onCloseClick} /> */}
              <Marker
                lat={store1.latitude}
                lng={store1.longitude}
                draggable={true}
                onDragEnd={this.onDragEnd} />
              {/* <InfoWindow
                lat={store1.latitude}
                lng={store1.longitude}
                content={store1.name}
                onCloseClick={this.onCloseClick} /> */}
                </Gmaps>
        )
    }
    if(this.props.data.stores === 2) {
    let {coords} = this.props.data.location;
    let store1 = this.props.data.twoStore[0];
    let store2 = this.props.data.twoStore[1];

    return (
      <Gmaps
        width={'100%'}
        height={'300px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'YOUR_API_KEY'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        {/* <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={`You are here!`}
          onCloseClick={this.onCloseClick} /> */}
        <Marker
          lat={store1.latitude}
          lng={store1.longitude}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        {/* <InfoWindow
          lat={store1.latitude}
          lng={store1.longitude}
          content={store1.name}
          onCloseClick={this.onCloseClick} /> */}
          <Marker
            lat={store2.latitude}
            lng={store2.longitude}
            draggable={true}
            onDragEnd={this.onDragEnd} />
          {/* <InfoWindow
            lat={store2.latitude}
            lng={store2.longitude}
            content={store2.name}
            onCloseClick={this.onCloseClick} /> */}
        {/* <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={5000}
          onClick={this.onClick} /> */}
      </Gmaps>
    );
  }
  if(this.props.data.stores ===3) {
      let {coords} = this.props.data.location;
      let store1 = this.props.data.threeStore[0];
      let store2 = this.props.data.threeStore[1];
      let store3 = this.props.data.threeStore[2];
      return (
          <Gmaps
            width={'100%'}
            height={'300px'}
            lat={coords.lat}
            lng={coords.lng}
            zoom={13}
            loadingMessage={'Be happy'}
            params={{v: '3.exp', key: 'YOUR_API_KEY'}}
            onMapCreated={this.onMapCreated}>
            <Marker
              lat={coords.lat}
              lng={coords.lng}
              draggable={true}
              onDragEnd={this.onDragEnd} />
            {/* <InfoWindow
              lat={coords.lat}
              lng={coords.lng}
              content={`You are here!`}
              onCloseClick={this.onCloseClick} /> */}
            <Marker
              lat={store1.latitude}
              lng={store1.longitude}
              draggable={true}
              onDragEnd={this.onDragEnd} />
            {/* <InfoWindow
              lat={store1.latitude}
              lng={store1.longitude}
              content={store1.name}
              onCloseClick={this.onCloseClick} /> */}
              <Marker
                lat={store2.latitude}
                lng={store2.longitude}
                draggable={true}
                onDragEnd={this.onDragEnd} />
              {/* <InfoWindow
                lat={store2.latitude}
                lng={store2.longitude}
                content={store2.name}
                onCloseClick={this.onCloseClick} /> */}
                <Marker
                  lat={store3.latitude}
                  lng={store3.longitude}
                  draggable={true}
                  onDragEnd={this.onDragEnd} />
                {/* <InfoWindow
                  lat={store3.latitude}
                  lng={store3.longitude}
                  content={store3.name}
                  onCloseClick={this.onCloseClick} /> */}
            {/* <Circle
              lat={coords.lat}
              lng={coords.lng}
              radius={5000}
              onClick={this.onClick} /> */}
          </Gmaps>
      )
  }
  }
}
function mapStateToProps(state){
    return {data: state.data}
}
export default connect(mapStateToProps)(ReactMap)
