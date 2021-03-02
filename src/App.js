import * as layoutActions from "./actions/layoutActions";
import React .{useEffect}from "react";
import Routes from "./routes";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
const App = (props) => {

  return (
    <div>
        <p>{props.layout}</p>
      <Routes />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  return {
    layout: state.layoutsReducer.pageHeader
      ? state.layoutsReducer.pageHeader.pageTitle.pageTitle
      : "",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPageMetadata: bindActionCreators(layoutActions.setPageHeader, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
