import { REQUEST_USERS, UsersActionTypes } from './constants';

export const getUsers = (): UsersActionTypes => ({ type: REQUEST_USERS });