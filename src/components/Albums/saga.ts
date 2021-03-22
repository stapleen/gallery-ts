import { put, call } from 'redux-saga/effects';

import { SUCCESS_REQUEST_ALBUMS_BY_ID, FAILED_REQUEST_ALBUMS_BY_ID} from './constants';
import { SUCCESS_REQUEST_PHOTOS, FAILED_REQUEST_PHOTOS } from '../Photo/constants';
import config from '../../config';
import { get } from '../../api/Api';

import { IPhoto } from '../Photo/interface';
import IAlbum from '../Album/interface';

interface PhotosResponse {
  data: IPhoto[],
}

interface AlbumsResponse {
  data: IAlbum[],
}

interface AlbumsAction {
  type: string,
  id: string,
}

export function* getPhotos() {
  try {
    const response: PhotosResponse = yield call(get, `${config.url}/photos`);
    yield put({ type: SUCCESS_REQUEST_PHOTOS, photos: response.data });
  } catch (e) {
    yield put({type: FAILED_REQUEST_PHOTOS, error: "Ошибка"});
  }
}

export function* getAlbumsById(action: AlbumsAction) {
  try {
    const { id } = action;
    const response: AlbumsResponse = yield call(get, `${config.url}/albums?userId=${id}`);
    yield put({ type: SUCCESS_REQUEST_ALBUMS_BY_ID, albums: response.data });
  } catch (e) {
    yield put({type: FAILED_REQUEST_ALBUMS_BY_ID, error: "Ошибка"});
  }
}