import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grocery_List from '../Create_List/Grocery_List';
import OneStore from './OneStore';
import ReactMap from '../Create_List/ReactMap';
import {Link} from 'react-router';

class TwoStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
        this.subPrice = this.subPrice.bind(this);
        this.simplify = this.simplify.bind(this);
        // this.initMap = this.initMap.bind(this);
    }
    simplify(price) {
        console.log(price);
        let total = (Math.round(price * Math.pow(10, 2)) / Math.pow(10, 2))
        return total.toFixed(2);
    }
    subPrice(list) {
        console.log(`i'm the list`, list);
        let total = 0;
        list.products.forEach((item) => {
            total += item.price;
        })
        // let simplified = this.simplify(total)
        return total;
    }
    render() {
        console.log(`i'm the two store props!`, this.props);
        if (this.props.data.twoStore.length === 0 && this.props.data.oneStore.length === 0) {
            return (
                <div className="container">
                    <div className="loading">Loading...</div>
                </div>
            )
        }
        if (this.props.data.oneStore.length === 1 && this.props.data.twoStore.length === 0) {
            return (<OneStore/>)
        }

        let {lat, lng} = this.props.data.location.coords;
        let store1 = this.props.data.twoStore[0];
        let store2 = this.props.data.twoStore[1];
        let oneStop = this.props.data.oneStore[0];
        console.log(`i'm the onestop option yo`, oneStop);
        let url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38&q=${lat},${lng},location={}`

        console.log(store1);
        return (
            <div className="container">
                <div className="row">
                    <div className="column column-12">
                        <div className="column column-4">
                            <div className="style-container style-container-margin">
                            <div className="store-container">
                                <div className="row">
                                    <div className="store">
                                        <div className="store-info">
                                            <h2>{store1.name}</h2>
                                            <ul className="store-contact">
                                                <li>
                                                    <strong>Address:
                                                    </strong>
                                                    {store1.address}</li>
                                                <li>
                                                    <strong>Contact:
                                                    </strong>
                                                    {store1.phone_number}</li>
                                            </ul>
                                        </div>
                                        <img className="store-image" src={store1.store_image_url} alt=""/>
                                    </div>
                                </div>
                                <hr className="list-hr"/>
                                <h4 className="subPrice">Subtotal: ${this.simplify(this.subPrice(store1))}</h4>
                                <br/>
                                <Grocery_List groceries={store1.products}/>
                            </div>
                        </div>
                    </div>
                        <div className="column column-4">
                            <div className="style-container style-container-margin">
                            <div className="store-container">
                                <div className="row">
                                    <div className="store">
                                        <div className="store-info">
                                            <h2>{store2.name}</h2>
                                            <ul className="store-contact">
                                                <li>
                                                    <strong>Address:
                                                    </strong>
                                                    {store2.address}</li>
                                                <li>
                                                    <strong>Contact:
                                                    </strong>
                                                    {store2.phone_number}</li>
                                            </ul>
                                        </div>
                                        <img className="store-image" src={store2.store_image_url} alt=""/>
                                    </div>
                                </div>
                                <hr className="list-hr"/>
                                <h4 className="subPrice">Subtotal: ${this.simplify(this.subPrice(store2))}</h4>
                                <br/>
                                <Grocery_List groceries={store2.products}/>
                            </div>
                        </div>
                    </div>

                        <div className="column column-4">
                            <div className="style-container style-container-margin">
                            <div className="row">
                                <ReactMap/>
                            </div>
                            <div className="row">
                                <div className="total">
                                    <h3>Apprice Total: ${this.simplify((this.subPrice(store1) + this.subPrice(store2)))}
                                    </h3><br/>
                                    <h4>You Save: ${this.simplify((this.subPrice(oneStop) - (this.subPrice(store1) + this.subPrice(store2))))}</h4>
                                    <h5 className="compare-text">Compared to:   </h5>
                                    <Link className="store-link-btn" to="/OneStore">One Store Option</Link>
                                </div>
                                <div className="row">
                                    <div className="One-Stop-Option">
                                        <div className="store comparison">
                                            <div className="store-info">
                                                <h2>{oneStop.name}</h2>
                                            </div>
                                            <h3 className="subPrice">
                                                <strong>Total: </strong>
                                                ${this.simplify(this.subPrice(oneStop))}</h3>
                                            <ul className="store-contact">
                                                <li>
                                                    <strong>Address:
                                                    </strong>
                                                    {oneStop.address}</li>
                                                <li>
                                                    <strong>Contact:
                                                    </strong>
                                                    {oneStop.phone_number}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {data: state.data};
}

export default connect(mapStateToProps)(TwoStore);
