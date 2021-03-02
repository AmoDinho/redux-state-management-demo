import * as layoutActions from "./actions/layoutActions";
import React from "react";
import Routes from "./routes";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
const App = (props) => {
  return (
    <div>
      <h1 className="text-center text-3xl text-blue-600">{props.layout}</h1>
      <Routes />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  return {
    layout: state.layoutsReducer.pageTitle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPageMetadata: bindActionCreators(layoutActions.setPageHeader, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
