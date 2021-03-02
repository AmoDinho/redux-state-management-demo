import * as layoutActions from "../actions/layoutActions";
import React, { useEffect } from "react";
import HeadingOne from "../components/HeadingOne";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
const SecondPage = (props) => {
  useEffect(() => {
    props.setPageMetadata({
      pageTitle: "SecondPage",
    });
  }, []);
  return (
    <div>
      <HeadingOne className="text-center text-blue-500">
        SecondPage page{" "}
      </HeadingOne>

      <div>
        <input />
        <button>Add mountain</button>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);
