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
      <div>
        <input
          className="border border-pink-500 "
          onChange={(e) => setMountainName(e.currentTarget.value)}
        />
        <button
          className="rounded-lg bg-red-600 px-2 py-2 ml-3 text-red-200 "
          onClick={() => props.addNewMountain(mountainName)}
        >
          Add mountain
        </button>
      </div>

      <div className="flex flex-col">
        {props.mountains.map((mountain, idx) => (
          <p key={idx}>{mountain}</p>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  return {
    mountains: state.mountainReducer,
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
