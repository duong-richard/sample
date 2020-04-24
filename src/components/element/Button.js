import React, { Component } from 'react';

class Button extends Component {
    state = {}

    handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (typeof (this.props.onClick) === "function") {
            this.props.onClick(event);
        }
    }

    handleKeyPress = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (event.charCode === 13 && typeof (this.props.onClick) === "function") {
            this.props.onClick(event);
        }
    }

    render() {
        const { nofocus, children, ...rest } = this.props;

        return (
            <a role="button"
                tabIndex={!nofocus && "0"}
                {...rest}
                onClick={this.handleClick}
                onKeyPress={this.handleKeyPress}
            >
                {children}
            </a>
        );
    }
}

export default Button;