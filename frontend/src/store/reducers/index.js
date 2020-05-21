import { combineReducers } from 'redux';

import systemReducer from './systemReducer';
import itemReducer from './itemReducer';

const rootReducer = combineReducers({
  system: systemReducer,
  item: itemReducer
})

export default rootReducer;