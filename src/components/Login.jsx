import React, {Component} from 'react';
import {login} from '../actions/index';
import {Link} from 'react-router';
// import cookie from 'react-cookie';
// 🔐
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(event);
        login(this.state)
    }
    render() {
        console.log(this.state);
        return (
            <div id="login-background">
                <div className="login-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="user-info">
                            <h4 className="sign-title">Username</h4>
                            <input className="sign" type="email" value={this.state.email} onChange={event => this.setState({email: event.target.value})}/>
                            <br/>
                            <h4 className="sign-title">Password</h4>
                            <input className="sign" type="password" value={this.state.password} onChange={event => this.setState({password: event.target.value})}/><br/>
                            <Link className="sign-link" to="/List_Page">Log In</Link><br/>
                            <br/>
                            <Link to="/signup">Forgot Password?</Link>
                        </div>
                        <br/>
                        <fieldset className="title">
                            <legend>or Log In with</legend>
                        </fieldset>
                        <div className="auth-container">
                            <button className="auth">
                                <i className="fa fa-facebook-square"
                                    aria-hidden="true"></i>  Facebook</button>
                            <button className="auth" id="google">
                                <i className="fa fa-google"
                                    aria-hidden="true"></i> Google</button><br/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
