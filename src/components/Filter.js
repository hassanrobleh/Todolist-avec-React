import React from "react";
import { connect } from "react-redux";
import { setFilter, visibilityFilter } from "../store/actions";

const Filter = ({ dispatch }) => {
  return (
    <>
      <button
        className="btn btn-primary mr-2"
        onClick={() => dispatch(setFilter(visibilityFilter.SHOW_ALL))}
      >
        Tout
      </button>
      <button
        className="btn btn-primary mr-2"
        onClick={() => dispatch(setFilter(visibilityFilter.SHOW_DONE))}
      >
        Fini
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(setFilter(visibilityFilter.SHOW_ACTIVE))}
      >
        En cours
      </button>
    </>
  );
};

export default connect()(Filter);
