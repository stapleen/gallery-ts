import IUser from '../User/interface';

export const REQUEST_USERS = 'REQUEST_USERS';
export const SUCCESS_REQUEST_USERS = 'SUCCESS_REQUEST_USERS';
export const FAILED_REQUEST_USERS = 'FAILED_REQUEST_USERS';

export interface UsersState {
  isLoading: boolean,
  users: null | IUser[],
  error: null | string,
}

interface RequestUsersAction {
  type: typeof REQUEST_USERS,
}

interface SuccessUsersAction {
  type: typeof SUCCESS_REQUEST_USERS,
  users: IUser[],
}

interface FailedUsersAction {
  type: typeof FAILED_REQUEST_USERS,
  error: string,
}

export type UsersActionTypes = RequestUsersAction | SuccessUsersAction | FailedUsersAction;