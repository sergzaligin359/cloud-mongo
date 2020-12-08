import { SET_TEST } from '@actionTypes';

const initialState = {};

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