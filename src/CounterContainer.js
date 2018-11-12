import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  onAddTen: () => dispatch({ type: "ADDTEN" }),
  onAdd: () => dispatch({ type: "ADD" }),
  onReset: () => dispatch({ type: "RESET" }),
  onRemove: () => dispatch({ type: "REMOVE" }),
  onRemoveTen: () => dispatch({ type: "REMOVETEN" })
});

const CounterComponent = ({
  state,
  onAddTen,
  onAdd,
  onReset,
  onRemove,
  onRemoveTen
}) => (
  <div>
    <p>{state}</p>
    <button onClick={onRemoveTen} id="removeTen">
      -10
    </button>
    <button onClick={onRemove} id="remove">
      -
    </button>
    <button onClick={onReset} id="reset">
      Reset
    </button>
    <button onClick={onAdd} id="add">
      +
    </button>
    <button onClick={onAddTen} id="addTen">
      +10
    </button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
