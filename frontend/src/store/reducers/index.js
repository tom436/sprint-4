import { combineReducers } from 'redux';

import systemReducer from './systemReducer';
import itemReducer from './itemReducer';
import shopReducer from './shopReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  system: systemReducer,
  item: itemReducer,
  shop: shopReducer,
  user:userReducer
})

export default rootReducer;