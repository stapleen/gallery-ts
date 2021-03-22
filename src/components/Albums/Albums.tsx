import React, { useEffect, useContext } from 'react';
import { RouteComponentProps, withRouter } from "react-router";
import { useDispatch, useSelector } from 'react-redux';

import style from './Albums.module.scss';

import { getAlbumsById } from './action';
import { getPhotos } from '../Photo/action';
import { AppState } from '../../store/rootReducer';

import Typography from '@material-ui/core/Typography';

import Album from '../Album/Album';
import CircularProgress from '../CircularProgress/CircularProgress';
import Button from '../Button/Button';
import { TitleContext } from "../../context";

import { History } from "history";

interface AlbumsProps extends RouteComponentProps {
  history: History,
}

const Albums: React.FC<AlbumsProps> = ({ history }) => {
  const dispatch = useDispatch();

  const title = useContext(TitleContext).albums;

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    const id: string | null = urlParam.get('user_id');

    dispatch(getPhotos());
    dispatch(getAlbumsById(id));
  }, []);

  const albumsState = useSelector((state: AppState) => state.Albums);
  const { albums } = albumsState;
  const errorAlbums = albumsState.error;
  const isLoadingAlbums = albumsState.isLoading;

  const photosState = useSelector((state: AppState) => state.Photos);
  const { photoData } = photosState;
  const errorPhotos = photosState.error;
  const isLoadingPhotos = photosState.isLoading;

  const isLoading: boolean = isLoadingPhotos || isLoadingAlbums;

  const back = (): void => {
    history.push('/');
  }

  if (!isLoading && (!albums || !photoData)) {
    return <p className={style.title}>{errorPhotos || errorAlbums}</p>;
  }

  return (
    <div>
        <Button className={style.button} value="К списку авторов" onClick={back} />
        <Typography className={style.title} component="p">{title}</Typography>
        { isLoading && <CircularProgress /> }
        { !isLoading && albums && photoData && <Album albums={albums} photoData={photoData} /> }
    </div>
  );
}

export default withRouter(Albums);