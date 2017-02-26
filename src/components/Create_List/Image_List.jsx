import React, {Component} from 'react';
import Image from './Image';
import {fetchFood} from '../../actions/index'

// 📟
export default class ImageList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let {groceries} = this.props
        let food = groceries.map((ele) => {
            let {name, product_image_url, id} = ele;
            return (<Image key={id} handleClick={this.props.handleClick} image={product_image_url} name={name} product={ele}/>)
        })

        return (
            <div id="imageContainer">
                {food}
            </div>
        )
    }
}
