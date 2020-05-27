import {
  CLEAN_REPOS_MATCH,
  GET_REPOS_MATCH,
  GET_REPOS_MATCH_SUCCESS,
  GET_REPOS_MATCH_FAIL,
  SET_REPOS_PAGINATION,
} from '../../utils/constants/ActionTypes';

const INITIAL_STATE = {
  searching: false,
  reposMatch: '',
  reposTotalResults: '',
  pagination: { currentPage: '', lastPage: '' },
  error: '',
};

const reposReducer = (state = INITIAL_STATE, { type, payload = {} }) => {
  switch (type) {
    case CLEAN_REPOS_MATCH:
      return INITIAL_STATE;

    case SET_REPOS_PAGINATION: {
      return {
        ...state,
        reposTotalResults: payload.total_count,
        pagination: payload.pagination,
      };
    }

    case GET_REPOS_MATCH:
      return { ...state, searching: true };

    case GET_REPOS_MATCH_FAIL:
      return { ...state, error: payload, searching: false };

    case GET_REPOS_MATCH_SUCCESS:
      return {
        ...state,
        reposMatch: payload,
        searching: false,
        error: '',
      };

    default:
      return state;
  }
};

export default reposReducer;
