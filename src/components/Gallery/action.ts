import { REQUEST_PHOTOS_BY_ID, PhotosByIdActionTypes } from './constants';

export const getPhotosById = (id: string | null): PhotosByIdActionTypes => ({ type: REQUEST_PHOTOS_BY_ID, id });