import * as layoutActions from "../actions/layoutActions";
import React, { useEffect } from "react";
import HeadingOne from "../components/HeadingOne";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
const Index = (props) => {
  useEffect(() => {
    props.setPageMetadata({
      pageTitle: "Index Page",
    });
  }, []);
  return (
    <>
      {props.layout}

      <HeadingOne className="text-center text-blue-500">
        This is the home page of the app!
      </HeadingOne>
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(Index);
