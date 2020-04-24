import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = (props) => (
    <section>
        <div>
            <div className="pageNotFoundWrap">
                <p>Page Not Found</p>
                <span>The requested URL {props.location.pathname} was not found on this server.</span>
                <div className="btnWrap">
                    <NavLink to={`/cloud`}>Home</NavLink>
                </div>
            </div>
        </div>
    </section>
);

export default PageNotFound;