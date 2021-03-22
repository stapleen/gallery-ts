import { 
  REQUEST_PHOTOS_BY_ID,
  SUCCESS_REQUEST_PHOTOS_BY_ID,
  FAILED_REQUEST_PHOTOS_BY_ID,
  PhotosByIdState,
  PhotosByIdActionTypes
} from './constants';
    
const initialState: PhotosByIdState = {
  isLoading: false,
  photos: null,
  error: null
};

export default (state = initialState, action: PhotosByIdActionTypes): PhotosByIdState => {
  switch (action.type) {
    case REQUEST_PHOTOS_BY_ID:
      return  { ...state, isLoading: true };
    case SUCCESS_REQUEST_PHOTOS_BY_ID:
      return  { ...state, isLoading: false, photos: action.photos };
    case FAILED_REQUEST_PHOTOS_BY_ID:
      return  { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};