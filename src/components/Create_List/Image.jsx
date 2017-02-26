import React, {Component} from 'react';

// 🌁🌅
export default class Image extends Component {
    constructor(props) {
        super(props);
        this.clickedImage = this.clickedImage.bind(this);
    }
    clickedImage() {
        let {handleClick, name, product} = this.props;
        handleClick(product, name);
    }
    render() {
        let {image, name} = this.props;
        return (
            <div className="card" onClick={this.clickedImage}>
                <img className="card-image" src={image}/>
                <div className="card-title">
                    {name}
                </div>
            </div>

        )
    }
}
