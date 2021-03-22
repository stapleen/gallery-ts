import { combineReducers } from 'redux';

import Gallery from '../components/Gallery/reducer';
import Users from '../components/Users/reducer';
import Albums from '../components/Albums/reducer';
import Photos from '../components/Photo/reducer';

const rootReducer = combineReducers({
  Gallery,
  Users,
  Albums,
  Photos
})
export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;