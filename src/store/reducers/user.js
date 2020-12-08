import { SET_TEST } from '@actionTypes';

const initialState = {
  currentUser: {},
  isAuth: false
};

export default (state=initialState, {type, payload}) => {
  switch (type) {
    case SET_TEST:

      return {
        ...state,
        text: payload
      }

    default:
      return state
  }
}