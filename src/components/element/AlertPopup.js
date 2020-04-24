import React, { Component } from 'react';


class AlertPopup extends Component {

    handleClose = () => {
        this.props.handleClose()
        this.props.handleOk && this.props.handleOk()
    }

    render() {
        return (
            <div className="popWid" style={{ width: "630px", marginLeft: "-315px", marginTop: "-135px" }}>
                <div className="innerWrap">
                    <p className="whiteSpacePre">{this.props.text}</p>
                    <div className="btnWrap">
                        <button className="btn blue" onClick={this.handleClose}>{this.props.getText("OK")}</button>
                    </div>
                </div>
                <button className="popClose" onClick={this.handleClose}>닫기</button>
            </div>
        )
    }
}

export default AlertPopup;