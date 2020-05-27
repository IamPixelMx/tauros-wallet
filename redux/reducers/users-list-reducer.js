import {
  UPDATE_USERS_LIST,
  UPDATE_USERS_LIST_SUCCESS,
  UPDATE_USERS_LIST_FAIL,
} from '../../utils/constants/ActionTypes';

const INITIAL_STATE = {
  loadingList: false,
  usersList: [],
  error: '',
};

const usersListReducer = (state = INITIAL_STATE, { type, payload = {} }) => {
  switch (type) {
    case UPDATE_USERS_LIST:
      return { ...state, loadingList: true };

    case UPDATE_USERS_LIST_SUCCESS:
      return {
        ...state,
        usersList: payload,
        loadingList: false,
        error: '',
      };

    case UPDATE_USERS_LIST_FAIL:
      return { ...state, error: payload, loadingList: false };

    default:
      return state;
  }
};

export default usersListReducer;
