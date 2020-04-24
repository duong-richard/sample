import React, { Component } from 'react';


class ConfirmPopup extends Component {

    handleOk = () => {
        this.props.handleClose()
        this.props.handleOk && this.props.handleOk()
    }

    render() {
        return (
            <div className="popWid" style={{ width: "630px", marginLeft: "-315px", marginTop: "-135px" }}>
                <div className="innerWrap">
                    <p>{this.props.text}</p>
                    <div className="btnWrap">
                        <button className="btn" onClick={this.props.handleClose}>{this.props.getText("CANCEL")}</button>
                        <button className="btn blue" onClick={this.handleOk}>{this.props.getText("OK")}</button>
                    </div>
                </div>
                <button className="popClose" onClick={this.props.handleClose}>닫기</button>
            </div>
        )
    }
}

export default ConfirmPopup;