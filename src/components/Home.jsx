import React, {Component} from 'react';
import {Link} from 'react-router';


class Home extends Component{
    constructor(props){
        super(props)

    }
    handleClick() {

    }
    render() {
    return (
        <div className="home-container">
            <div className="welcome">
                <p id="intro"><span id="Welcome_Apprice">Welcome to Apprice </span><br/> Save money. Save time. <br/>Make grocery shopping easier.</p>
                <hr/>
                <br/>
                <Link id="home-btn" className="btn btn-center" to="/List_Page">Get Started</Link>
            </div>
        </div>
    )
}
}

export default Home;
