import { put, call } from 'redux-saga/effects';

import { SUCCESS_REQUEST_PHOTOS_BY_ID, FAILED_REQUEST_PHOTOS_BY_ID } from './constants';
import config from '../../config';
import { get } from '../../api/Api';

import { IPhoto } from '../Photo/interface';

interface PhotoResponse {
  data: IPhoto[],
}

interface GalleryAction {
  type: string,
  id: string,
}

export function* getPhotosById(action: GalleryAction) {
  try {
    const { id } = action;
    const response: PhotoResponse = yield call(get, `${config.url}/photos?albumId=${id}`);
    yield put({ type: SUCCESS_REQUEST_PHOTOS_BY_ID, photos: response.data });
  } catch (e) {
    yield put({type: FAILED_REQUEST_PHOTOS_BY_ID, error: "Ошибка"});
  }
}