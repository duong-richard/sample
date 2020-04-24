import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import Footer from "./Footer";

class MainRoute extends Component {
    state = {}

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.component !== this.props.component) {
            const rootElement = document.getElementById("root");
            rootElement.scrollTop = 0;
            rootElement.scrollLeft = 0;
        }
    }

    render() {
        const {footer, component: Component, auth, noAuth} = this.props;
        return (
            <Route render={props => (
                <div>
                    <Component {...props} />
                    {footer &&
                    <Footer/>
                    }
                </div>
            )}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
}


export default MainRoute = connect(
    mapStateToProps,
    null
)(MainRoute);
