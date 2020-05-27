import {
  UPDATE_REPOS_LIST,
  UPDATE_REPOS_LIST_SUCCESS,
  UPDATE_REPOS_LIST_FAIL,
} from '../../utils/constants/ActionTypes';

const INITIAL_STATE = {
  loadingList: false,
  reposList: [],
  error: '',
};

const reposListReducer = (state = INITIAL_STATE, { type, payload = {} }) => {
  switch (type) {
    case UPDATE_REPOS_LIST:
      return { ...state, loadingList: true };

    case UPDATE_REPOS_LIST_SUCCESS:
      return {
        ...state,
        reposList: payload,
        loadingList: false,
        error: '',
      };

    case UPDATE_REPOS_LIST_FAIL:
      return { ...state, error: payload, loadingList: false };

    default:
      return state;
  }
};

export default reposListReducer;
