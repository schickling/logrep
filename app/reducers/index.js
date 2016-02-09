import { combineReducers } from 'redux';
import messages from './messages';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  messages,
  visibilityFilter
});

export default rootReducer;
