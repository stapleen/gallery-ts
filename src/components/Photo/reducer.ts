import {
  REQUEST_PHOTOS,
  SUCCESS_REQUEST_PHOTOS,
  FAILED_REQUEST_PHOTOS,
  PhotosState,
  PhotosActionTypes
} from './constants';

import { IPhoto, IPhotoData}  from './interface';

const initialState: PhotosState = {
  isLoading: false,
  photoData: null,
  error: null
};

export default (state = initialState, action: PhotosActionTypes): PhotosState => {
  switch (action.type) {
    case REQUEST_PHOTOS:
      return  { ...state, isLoading: true };
    case SUCCESS_REQUEST_PHOTOS:
      const { photos } = action;
      const photoData = photos.reduce((accumulator: IPhotoData, currentValue: IPhoto): IPhotoData => {
        if (!accumulator[currentValue.albumId]) {
          accumulator[currentValue.albumId] = [currentValue];
        } else {
          accumulator[currentValue.albumId].push(currentValue);
        }
        return accumulator;
      }, {});
      return  { ...state, isLoading: false, photoData };
    case FAILED_REQUEST_PHOTOS:
      return  { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};