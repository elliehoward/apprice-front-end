import React, {Component} from 'react';
import {Link} from 'react-router';
import {signUp} from '../actions/index';


// 🔒
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(event);
        signUp(this.state)
    }
    render() {
        console.log(this.state);
        return (
            <div id="signup-background">
                <div className="signup-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="user-info">
                            <h4 className="sign-title">First Name</h4>
                            <input className="sign" type="text" value={this.state.first_name} onChange={event => this.setState({first_name: event.target.value})}/>
                            <br/>
                            <h4 className="sign-title">Last Name</h4>
                            <input className="sign" type="text" value={this.state.last_name} onChange={event => this.setState({last_name: event.target.value})}/>
                            <br/>
                            <h4 className="sign-title">Email</h4>
                            <input className="sign" type="email" value={this.state.email} onChange={event => this.setState({email: event.target.value})}/>
                            <br/>
                            <h4 className="sign-title">Password</h4>
                            <input className="sign" type="password" value={this.state.password} onChange={event => this.setState({password: event.target.value})}/><br/>
                            <Link className="sign-link" to="/List_Page">Log In</Link><br/>
                            <br/>
                            <Link to="/login">Already have an account?</Link>
                        </div>
                        <br/>
                        <fieldset className="title">
                            <legend>or Sign Up with</legend>
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
