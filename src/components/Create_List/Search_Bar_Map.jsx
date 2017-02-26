import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {storeLocation, getMapData} from '../../actions/index';

class SearchBarMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value})
    }

    async onFormSubmit(event) {
        event.preventDefault();
        if (this.state.term.length === 0) {
            return;
        }
        this.props.selectCity(this.state.term);
        let location = await getMapData(this.state.term)
        this.props.storeLocation(location.results[0].geometry);
        this.setState({term: ''});
    }

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.onFormSubmit} className="grocery-search">
                    <input id="map-searchbar" placeholder="Search for address" className="form-control" value={this.state.term} onChange={this.onInputChange}/>
                    <button id="search-button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        storeLocation: storeLocation,
        getMapData: getMapData
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBarMap)
