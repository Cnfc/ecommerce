import { FetchIndex } from "./constants";

export const SearchRepo = () => ({
  type: FetchIndex.SEARCH_INDEX,
});

export const SearchRepoSuccess = (data) => ({
  type: FetchIndex.SEARCH_INDEX_SUCCESS,
  payload: data,
});

export const SearchRepoError = (err) => ({
  type: FetchIndex.SEARCH_INDEX_ERROR,
  payload: err,
});
