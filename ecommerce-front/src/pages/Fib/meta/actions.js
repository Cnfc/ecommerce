import { ON_FIB_CHANGE } from "./constants";
import { FetchIndex } from "./constants";

import { Dispatch } from "redux";
import axios from "axios";

export function onFibChange() {
  return {
    type: ON_FIB_CHANGE,
    payload: {},
  };
}

// export const sendIndex = (index) => {
//   return async (dispach) => {
//     dispatch({
//       type: SEND_INDEX,
//     });

//     try {
//       await axios.post("/api/values", {
//         index: index,
//       });
//     } catch (err) {}
//   };
// };

export const fetchIndex = () => {
  return async (dispatch) => {
    dispatch({
      type: FetchIndex.SEARCH_INDEX,
    });

    try {
      const { data } = await axios.get("/api/values/all");
      const values = await axios.get("/api/values/current");

      dispatch({
        type: FetchIndex.SEARCH_INDEX_SUCCESS,
        payload: {
          data,
          values: values.data,
        },
      });
    } catch (err) {
      if (err) {
        dispatch({
          type: FetchIndex.SEARCH_INDEX_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
