import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import OneStore from './OneStore';
import TwoStore from './TwoStore';
import ThreeStore from './ThreeStore';
import {getData} from '../../actions/index';

class ResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            storeOne: null,
            storeTwo: null,
            storeThree: null
        }
    }
    render() {
        const {data} = this.props;
        console.log(`i'm the main data on the result page`, data);
        if (!data) {
            return <div>Loading...</div>
        }
        if (data.stores === 1) {
            return (
                    <OneStore/>
            )
        }
        if (data.stores === 2) {
            console.log(`i'm hit!`);
            return (
                    <TwoStore/>
            )
        }
        if (data.stores === 3) {
            return (
                    <ThreeStore/>
            )
        }
    }
}

function mapStateToProps(state) {
    return {data: state.data};

}

export default connect(mapStateToProps)(ResultsPage);
