import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
// import { bindActionCreators } from "redux";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div>
      <h1>{counter}</h1>
      <div className="btns">
        <div className="btn btn-inc" onClick={inc}>
          <span>+</span>
        </div>
        <div className="btn btn-dec" onClick={dec}>
          <span>-</span>
        </div>
        <div className="btn btn-rnd" onClick={rnd}>
          <span>↻</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state
  };
};

export default connect(
  mapStateToProps,
  actions
)(Counter);
