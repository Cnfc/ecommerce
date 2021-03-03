import Fib from "./Fib";
import Count from "./Count";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { onFibChange } from "./meta/actions";
// import makeSelectLoginPage from './meta/selectors';
// import selectFib from "./meta/selectors.js";
// import { loginFieldChange } from './meta/actions';
// import LoginPage from "./components/LoginPage";

// const mapStateToProps = createStructuredSelector({
// fibpage: selectFib(),
// });

const mapStateToProps = (state) => ({
  user: state.fib.username,
  number: state.fib.number,
});

const mapDispatchToProps = (dispatch) => ({
  // onFibChange: (name, number) => dispatch(onFibChange(name, number)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Fib);
