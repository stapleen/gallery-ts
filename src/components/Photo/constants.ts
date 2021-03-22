import { IPhoto, IPhotoData } from './interface';

export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
export const SUCCESS_REQUEST_PHOTOS = 'SUCCESS_REQUEST_PHOTOS';
export const FAILED_REQUEST_PHOTOS = 'FAILED_REQUEST_PHOTOS';

export interface PhotosState {
  isLoading: boolean,
  photoData: null | IPhotoData,
  error: null | string,
}

interface RequestPhotosAction {
  type: typeof REQUEST_PHOTOS,
}

interface SuccessPhotosAction {
  type: typeof SUCCESS_REQUEST_PHOTOS,
  photos: IPhoto[],
  photoData: IPhotoData
}

interface FailedPhotosAction {
  type: typeof FAILED_REQUEST_PHOTOS,
  error: string
}

export type PhotosActionTypes = RequestPhotosAction | SuccessPhotosAction | FailedPhotosAction;