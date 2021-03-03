// import { produce } from 'immer';
import { FetchIndex, ON_FIB_CHANGE } from "./constants";
// onFibChange
export const initialState = {
  username: "Stanislav",
  number: "36",
};

export const INITIAL_FETCH_INDEX_STATE = {
  data: [],
  values: {},
  isLoading: false,
  isError: null,
};

const fibReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_FIB_CHANGE:
      console.log(action);
      return {
        ...state,
        username: action.payload.name,
        number: action.payload.number,
      };

    default:
      return state;
  }
};

const fetchIndexReducer = (state = INITIAL_FETCH_INDEX_STATE, action) => {
  switch (action.type) {
    case FetchIndex.SEARCH_INDEX:
      return {
        ...state,
        data: [],
        isLoading: true,
        isError: null,
      };

    case FetchIndex.SEARCH_INDEX_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        values: action.payload.values,
        isLoading: false,
        isError: null,
      };

    case FetchIndex.SEARCH_INDEX_ERROR:
      return {
        ...state,
        data: [],
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export { fibReducer, fetchIndexReducer };
