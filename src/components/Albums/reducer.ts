import { 
  REQUEST_ALBUMS_BY_ID,
  SUCCESS_REQUEST_ALBUMS_BY_ID,
  FAILED_REQUEST_ALBUMS_BY_ID,
  AlbumsState,
  AlbumsByIdTypes
} from './constants';
    
const initialState: AlbumsState = {
  isLoading: false,
  albums: null,
  error: null
};

export default (state = initialState, action: AlbumsByIdTypes): AlbumsState => {
  switch (action.type) {
    case REQUEST_ALBUMS_BY_ID:
      return  { ...state, isLoading: true };
    case SUCCESS_REQUEST_ALBUMS_BY_ID:
      return  { ...state, isLoading: false, albums: action.albums };
    case FAILED_REQUEST_ALBUMS_BY_ID:
      return  { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};