import React, { Component } from "react";
import { connect } from "react-redux";

class Index extends Component {
  takeEvery = () => {
    this.props.dispatch({
      type: "takeEvery",
      user: {
        name: "zs",
        psd: "123",
      },
    });
  };
  takeLatest = () => {
    this.props.dispatch({
      type: "takeLatest",
      user: {
        name: "zs",
        psd: "123",
      },
    });
  };
  throttle = () => {
    this.props.dispatch({
      type: "throttle",
      user: {
        name: "zs",
        psd: "123",
      },
    });
  };
  take = () => {
    this.props.dispatch({
      type: "take"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.takeEvery}>takeEvery</button>
        <button onClick={this.takeLatest}>takeLatest</button>
        <button onClick={this.throttle}>throttle</button><br/>
        <button onClick={this.take}>take</button>
      </div>
    );
  }
}

export default connect()(Index);
