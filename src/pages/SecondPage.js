import * as layoutActions from "../actions/layoutActions";
import * as mountainActions from "../actions/moutainActions";
import React, { useEffect, useState } from "react";
import HeadingOne from "../components/HeadingOne";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
const SecondPage = (props) => {
  const [mountainName, setMountainName] = useState("");
  useEffect(() => {
    props.setPageMetadata({
      pageTitle: "SecondPage",
    });
  }, []);

  return (
    <div className="flex justify-center">
      <input
        className="border border-pink-500 "
        onChange={(e) => setMountainName(e.currentTarget.value)}
      />
      <button onClick={() => props.addNewMountain(mountainName)}>
        Add mountain
      </button>
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
    addNewMountain: bindActionCreators(
      mountainActions.addNewMountain,
      dispatch
    ),
    setPageMetadata: bindActionCreators(layoutActions.setPageHeader, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);
