import { REQUEST_PHOTOS, PhotosActionTypes } from './constants';

export const getPhotos = (): PhotosActionTypes => ({ type: REQUEST_PHOTOS });
