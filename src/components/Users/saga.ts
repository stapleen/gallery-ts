import { call, put } from 'redux-saga/effects';

import { SUCCESS_REQUEST_USERS, FAILED_REQUEST_USERS } from './constants';
import config from '../../config';
import { get } from '../../api/Api';

import IUser from '../User/interface';

interface UsersResponse {
  data: IUser[],
}

export function* getUsers() {
  try {
    const response: UsersResponse = yield call(get, `${config.url}/users`);
    yield put({ type: SUCCESS_REQUEST_USERS, users: response.data });
  } catch (e) {
    yield put({type: FAILED_REQUEST_USERS, error: "Ошибка"});
  }
}