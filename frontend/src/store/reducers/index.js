import { combineReducers } from 'redux';

import systemReducer from './systemReducer';
import itemReducer from './itemReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  system: systemReducer,
  item: itemReducer,
  user:userReducer
})

export default rootReducer;