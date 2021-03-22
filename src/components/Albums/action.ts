import { REQUEST_ALBUMS_BY_ID, AlbumsByIdTypes } from './constants';

export const getAlbumsById = (id: string | null): AlbumsByIdTypes => ({ type: REQUEST_ALBUMS_BY_ID, id });