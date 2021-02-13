/* eslint-disable no-param-reassign */
/*
 *
 * Apollo  main page reducer
 *
 */

import { produce } from "immer";
import { CHANGE_USER_NAME, graphQLFetch } from "./constants";

export const initialUserState = {
  userName: "Stanislav",
};

export const initialGraphState = {
  // uri:
  //   "https://api-eu-central-1.graphcms.com/v2/ckl22zsj2hab701xs7qp1a69g/master",
  data: {},
  isLoading: false,
  networkStatus: null,
  stale: null,
  isError: null,
};

// WITHOUT immer

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case CHANGE_USER_NAME: {
      return {
        ...state,
        userName: action.payload,
      };
    }
    default:
      return state;
  }
};
const graphQlReducer = (state = initialGraphState, action) => {
  switch (action.type) {
    case graphQLFetch.FETCH_DATA:
      return {
        ...state,
        data: [],
        isLoading: true,
        isError: null,
      };

    case graphQLFetch.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data.post,
        // values: action.payload.values,
        // isLoading: false,
        // isError: null,
      };

    case graphQLFetch.FETCH_DATA_ERROR:
      return {
        ...state,
        // data: [],
        // isLoading: false,
        // isError: action.payload,
      };
    default:
      return state;
  }
};

// Error with initial state;

// export const userReducer = (state = initialUserState, action) => {
//   console.log(initialUserState);
//   produce(state, (draft) => {
//     switch (action.type) {
//       case CHANGE_USER_NAME: {
//         draft.userName = action.payload;
//         break;
//       }

//       default: return state;
//     }
//   });
// };

// export const graphQlReducer = (state = initialGraphState, action) => {
//   produce(state, (draft) => {
//     switch (action.type) {
//       case GRAPHQL_URI: {
//         draft.uri = action.payload;
//         break;
//       }
//         default: return state;
//     }
//   });
// };

export { userReducer, graphQlReducer };
