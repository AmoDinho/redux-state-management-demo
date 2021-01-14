import * as layoutActions from "../actions/layoutActions";
import React from "react";
import HeadingOne from "../components/HeadingOne";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
const Index = () => {
  return (
    <>
      <HeadingOne className="text-center text-blue-500">
        This is the home page of the app!
      </HeadingOne>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    layout: state.pageHeader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPageMetadata: bindActionCreators(layoutActions.setPageHeader, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
