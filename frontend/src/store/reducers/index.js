import { combineReducers } from 'redux';

import systemReducer from './systemReducer';
import itemReducer from './itemReducer';
import shopReducer from './shopReducer';
import userReducer from './userReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  system: systemReducer,
  item: itemReducer,
  shop: shopReducer,
  user: userReducer,
  order: orderReducer
})

export default rootReducer;