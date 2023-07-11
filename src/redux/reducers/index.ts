// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux';

// Reducers
import theme from './theme';

export default combineReducers({
  theme,
});
