import React, {Component} from 'react';
import SearchBarMap from './Search_Bar_Map'
import Range from 'react-range';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {storeLocation} from '../../actions/index';
import ReactMap from './ReactMap';
const GOOGLE_MAPS_EMBED_API = `AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38`
// 🗺
class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            lat: '',
            lon: '',
            term: '',
            numOfStores: 3,
            button1: 'store-button-inactive',
            button2: 'store-button-active',
            button3: 'store-button-inactive'

        }
        this.getLocation = this.getLocation.bind(this);
        this.buttonOne = this.buttonOne.bind(this);
        this.buttonTwo = this.buttonTwo.bind(this);
        this.buttonThree = this.buttonThree.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getLocation();
    }
    async getLocation() {
        await navigator.geolocation.getCurrentPosition((position) => {

            this.props.storeLocation(position)
        })
    }
    buttonOne() {
        this.props.numOfStores(1);
        this.setState({button1: 'store-button-active', button2: 'store-button-inactive', button3: 'store-button-inactive'})
    }
    buttonTwo() {
        this.props.numOfStores(2);
        this.setState({button1: 'store-button-inactive', button2: 'store-button-active', button3: 'store-button-inactive'})
    }
    buttonThree() {
        this.props.numOfStores(3);
        this.setState({button1: 'store-button-inactive', button2: 'store-button-inactive', button3: 'store-button-active'})
    }
    handleChange(event) {
        let {value} = event.target;
        let {getRadius} = this.props;
        getRadius(value)
    }
    render() {
        let {button1, button2, button3} = this.state;
        let {radius} = this.props;
        let {lat, lng} = this.props.data.location.coords
        let yourLocation = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38&q=${lat},${lng}`
        return (
            <div>
                <h3>Choose your search preferences</h3><br/>
                <h4>What's your location?</h4>
                <SearchBarMap selectCity={this.props.selectCity} getLocation={this.getLocation}/><br/>
                <h4>How many stores will you visit?</h4>
                <button className={button1} onClick={this.buttonOne}>One</button>
                <button className={button2} onClick={this.buttonTwo}>Two</button>
                <button className={button3} onClick={this.buttonThree}>Three</button><br/>
                <h4>What's your search radius?</h4>
                <Range id="store-radius" onChange={this.handleChange} type='range' value={radius} min={1} max={10}/>
                <span id="display-radius">{radius}
                    mi</span><br/>
                <div className="google-maps">
                <iframe id="google-map" width="100%" height="300" frameBorder="0" src={yourLocation} allowFullScreen></iframe>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {data: state.data}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        storeLocation: storeLocation
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Map)
