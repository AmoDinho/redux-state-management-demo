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
    <div>
      <HeadingOne className="text-center text-blue-500">
        SecondPage page{" "}
      </HeadingOne>

      <div>
        <input />
        <button onClick={() => props.addNewMountain(mountainName)}>
          Add mountain
        </button>
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
    addNewMountain: bindActionCreators(
      mountainActions.addNewMountain,
      dispatch
    ),
    setPageMetadata: bindActionCreators(layoutActions.setPageHeader, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);
