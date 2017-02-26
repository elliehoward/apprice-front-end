import React from 'react';
import {Link} from 'react-router';

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link id="logo" to={"/"}>
                        {/* <div id="logo"></div> */}
                    </Link>
                </li>
                <div id="links">
                    <li>
                        <Link to={"/signup"}>Sign Up</Link>
                    </li>
                    <li>
                        <Link to={"/login"}>Log In</Link>
                    </li>
                    <li>
                        <Link to={"/help"}>Help</Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Nav;
