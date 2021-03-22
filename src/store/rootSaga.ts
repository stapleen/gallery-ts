import { takeEvery } from 'redux-saga/effects';

import { REQUEST_PHOTOS } from '../components/Photo/constants';
import { REQUEST_ALBUMS_BY_ID } from '../components/Albums/constants';
import { REQUEST_PHOTOS_BY_ID } from '../components/Gallery/constants';
import { REQUEST_USERS } from '../components/Users/constants';

import { getPhotosById } from '../components/Gallery/saga';
import { getUsers } from '../components/Users/saga';
import { getPhotos, getAlbumsById } from '../components/Albums/saga';

export default function* rootSaga() {
  yield takeEvery(REQUEST_PHOTOS_BY_ID, getPhotosById);
  yield takeEvery(REQUEST_USERS, getUsers);
  yield takeEvery(REQUEST_PHOTOS, getPhotos);
  yield takeEvery(REQUEST_ALBUMS_BY_ID, getAlbumsById);
};