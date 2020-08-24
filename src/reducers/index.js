import { combineReducers } from 'redux';
import markdownReducer from './markdownReducer';

export default combineReducers({
  data: markdownReducer
});
