import React, {Component} from 'react';
import {Link} from 'react-router';
import Grocery_List from '../Create_List/Grocery_List';
import {connect} from 'react-redux';
import ReactMap from '../Create_List/ReactMap';
import {bindActionCreators} from 'redux';
import {numOfStores} from '../../actions/index';
class OneStore extends Component {
    constructor(props) {
        super(props);

        this.subPrice = this.subPrice.bind(this);
        this.simplify = this.simplify.bind(this);
    }
    simplify(price) {
        let total = (Math.round(price * Math.pow(10, 2)) / Math.pow(10, 2))
        return total.toFixed(2);
    }
    subPrice(list) {
        let total = 0;
        console.log(`i'm the list in the subPrice func`, list);
        list.products.forEach((item) => {
            total += item.price;
        })
        total = (Math.round(total * Math.pow(10, 2)) / Math.pow(10, 2))
        return total;
    }
    render() {
        let {lat, lng} = this.props.data.location.coords;
        let url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBqGn70hACTBdMyntztMhqiTbH0w5Uzw38&q=${lat},${lng}`
        if (this.props.data.twoStore.length === 0) {
            return (
                <div className="container">
                    <div className="loading">Loading...</div>
                </div>
            )
        }
        let store1 = this.props.data.oneStore[0];
        let twoStop = this.props.data.twoStore;
        let store1Price = this.subPrice(store1)
        console.log(`i'm the twoStop[0]`, twoStop[0]);
        let store2FirstStop = this.subPrice(twoStop[0]);
        let store2SecondStop = this.subPrice(twoStop[1]);
        let store2Total = store2FirstStop + store2SecondStop;
        console.log(`i'm the twoStop`, twoStop);
        console.log(`i'm the store2Price`, store2Total);
        return (
            <div className="container">
                <div className="row">
                    <div className="column column-12">
                        <div className="column column-4" id="OneStore-Picture"></div>
                        <div className="column column-4">
                            <div className="store-container">
                                <div className="row">
                                    <div className="store">
                                        <div className="store-info">
                                            <h2>{store1.name}</h2>
                                            <ul className="store-contact">
                                                <li>
                                                    <strong>Address:
                                                    </strong>{store1.address}</li><br/>
                                                <li>
                                                    <strong>Contact:
                                                    </strong>{store1.phone_number}</li>
                                            </ul>
                                        </div>
                                        <img className="store-image" src={store1.store_image_url} alt=""/>
                                    </div>
                                </div>
                                <hr className="list-hr"/>
                                <h4 className="subPrice">Subtotal: ${this.subPrice(store1)}</h4>
                                <br/>
                                <Grocery_List groceries={store1.products}/>
                            </div>
                        </div>
                        <div className="column column-4">
                            <div className="row">
                                {/* <iframe id="google-map" width="100%" height="300" frameBorder="0" src={url} allowFullScreen></iframe> */}
                                <ReactMap/>
                            </div>
                            <div className="row">
                                <div className="total">
                                    <h3>Apprice Total: ${this.simplify(this.subPrice(store1))}
                                    </h3><br/>
                        <h4>You spent: ${this.simplify(store1Price - store2Total)} more</h4>
                                    <h5 className="compare-text">Compared to:</h5>
                                    <Link className="store-link-btn" to="/TwoStore">Two Store Option</Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="One-Stop-Option">
                                    <div className="store twoStore-compare">
                                        <div className="store-info">
                                            <h2>{twoStop[0].name}</h2>
                                        </div>
                                        {/* <img className="store-image" src={twoStop[0].store_image_url} alt=""/> */}
                                        <h3>
                                            <strong>Subtotal: </strong> ${this.simplify(this.subPrice(twoStop[0]))}</h3>
                                    </div>
                                    <div className="row">
                                        <div className="store twoStore-compare">
                                            <div className="store-info">
                                                <h2>{twoStop[1].name}</h2>
                                            </div>
                                            {/* <img className="store-image" src={twoStop[0].store_image_url} alt=""/> */}
                                            <h3>
                                                <strong>Subtotal: </strong>
                                                ${this.simplify(this.subPrice(twoStop[1]))}</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="store twoStore-compare">
                                            <div className="store-info">
                                                {/* <h2>Total:</h2> */}
                                            </div>
                                            {/* <img className="store-image" src={twoStop[0].store_image_url} alt=""/> */}
                                            <h3>
                                                <strong>Total: </strong>
                                                ${this.simplify((this.subPrice(twoStop[0]) + this.subPrice(twoStop[1])))}
                                            </h3>
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
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        numOfStores: numOfStores
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(OneStore);
