import React from "react";
import { connect } from "react-redux";
import { setFilter, visibilityFilter } from "../store/actions";

const Filter = ({ setFilter }) => {
  return (
    <>
      <button
        className="btn btn-primary mr-2"
        onClick={() => setFilter(visibilityFilter.SHOW_ALL)}
      >
        Tout
      </button>
      <button
        className="btn btn-primary mr-2"
        onClick={() => setFilter(visibilityFilter.SHOW_DONE)}
      >
        Fini
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setFilter(visibilityFilter.SHOW_ACTIVE)}
      >
        En cours
      </button>
    </>
  );
};

export default connect(null, (dispatch) => {
  return {
    setFilter: (filter) => {
      dispatch(setFilter(filter));
    },
  };
})(Filter);
