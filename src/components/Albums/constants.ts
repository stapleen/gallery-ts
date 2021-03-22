import IAlbum from '../Album/interface';

export const REQUEST_ALBUMS_BY_ID = 'REQUEST_ALBUMS_BY_ID';
export const SUCCESS_REQUEST_ALBUMS_BY_ID = 'SUCCESS_REQUEST_ALBUMS_BY_ID';
export const FAILED_REQUEST_ALBUMS_BY_ID = 'FAILED_REQUEST_ALBUMS_BY_ID';

export interface AlbumsState {
  isLoading: boolean,
  albums: null | IAlbum[],
  error: null | string,
}

interface RequestAlbumsByIdAction {
  type: typeof REQUEST_ALBUMS_BY_ID,
  id: string | null,
}

interface SuccessAlbumsByIdAction {
  type: typeof SUCCESS_REQUEST_ALBUMS_BY_ID,
  albums: IAlbum[],
}

interface FailedAlbumsByIdAction {
  type: typeof FAILED_REQUEST_ALBUMS_BY_ID,
  error: string,
}

export type AlbumsByIdTypes = RequestAlbumsByIdAction | SuccessAlbumsByIdAction | FailedAlbumsByIdAction;