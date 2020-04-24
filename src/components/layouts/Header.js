import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <header id="header" className="header sub">
                <div className="contentWrapper">
                    <h1 className="logo"><NavLink to={`/demo`}>SAMPLE</NavLink></h1>
                        <div className="tmn">
                                <NavLink to={`/demo`} className="menuLink" activeClassName="on">Demo</NavLink>
                                <NavLink to={`/service`} className="menuLink" activeClassName="on">Service</NavLink>
                                <NavLink to={`/notice`} className="menuLink" activeClassName="on">Notice</NavLink>
                        </div>
                </div>
            </header>
        );
    }
}

export default Header;
