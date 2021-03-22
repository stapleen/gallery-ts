import { IPhoto } from '../Photo/interface';

export const REQUEST_PHOTOS_BY_ID = 'REQUEST_PHOTOS_BY_ID';
export const SUCCESS_REQUEST_PHOTOS_BY_ID = 'SUCCESS_REQUEST_PHOTOS_BY_ID';
export const FAILED_REQUEST_PHOTOS_BY_ID = 'FAILED_REQUEST_PHOTOS_BY_ID';

export interface PhotosByIdState {
  isLoading: boolean,
  photos: null | IPhoto[],
  error: null | string,
}

interface RequestPhotosByIdAction {
  type: typeof REQUEST_PHOTOS_BY_ID,
  id: string | null,
}

interface SuccessPhotosByIdAction {
  type: typeof SUCCESS_REQUEST_PHOTOS_BY_ID,
  photos: IPhoto[],
}

interface FailedPhotosByIdAction {
  type: typeof FAILED_REQUEST_PHOTOS_BY_ID,
  error: string,
}

export type PhotosByIdActionTypes = RequestPhotosByIdAction | SuccessPhotosByIdAction | FailedPhotosByIdAction;