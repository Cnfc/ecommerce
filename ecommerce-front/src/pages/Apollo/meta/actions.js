/*
 *
 * LoginPage actions
 *
 */
import { Dispatch } from "redux";

import { CHANGE_USER_NAME, graphQLFetch } from "./constants";

// export function defaultAction() {
//   return {
//     type: DEFAULT_ACTION,
//   };
// }

export function changeUser(userName) {
  return {
    type: CHANGE_USER_NAME,
    payload: userName,
  };
}

export function changeGraphQLUri() {
  return async (dispatch) => {
    dispatch({
      type: graphQLFetch.FETCH_DATA,
    });

    try {
      console.log("success");
    } catch (error) {
      console.log("error");
    }
  };
}
