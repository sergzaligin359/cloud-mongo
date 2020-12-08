import { combineReducers } from 'redux';
import test from '@reducers/test';
import user from '@reducers/user';
import file from '@reducers/file';

export default combineReducers({
  test,
  user,
  file
});