import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the loginPage state domain
 */

// const selectFib = (state) => state.fib || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Fib
 */

// const makeSelectLoginPage = () =>
//   createSelector(
//     selectLoginPageDomain,
//     substate => substate,
//   );

// const makeSelectLoginPagePassword = () =>
//   createSelector(
//     selectLoginPageDomain,
//     substate => substate.password,
//   );

// const makeSelectLoginPageUsername = () =>
//   createSelector(
//     selectLoginPageDomain,
//     substate => substate.username,
//   );

export default selectFib;
export {
  selectFib,
  //   selectLoginPageDomain,
  //   makeSelectLoginPagePassword,
  //   makeSelectLoginPageUsername,
};
