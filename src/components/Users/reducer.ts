import { 
  REQUEST_USERS,
  SUCCESS_REQUEST_USERS,
  FAILED_REQUEST_USERS,
  UsersState,
  UsersActionTypes
} from './constants';
    
const initialState: UsersState = {
  isLoading: false,
  users: null,
  error: null
};

export default (state = initialState, action: UsersActionTypes): UsersState => {
  switch (action.type) {
    case REQUEST_USERS:
      return  { ...state, isLoading: true };
    case SUCCESS_REQUEST_USERS:
      return  { ...state, isLoading: false, users: action.users };
    case FAILED_REQUEST_USERS:
      return  { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};