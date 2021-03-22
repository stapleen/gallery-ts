import React, {useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './Gallery.module.scss';

import { getPhotosById } from './action';
import { AppState } from '../../store/rootReducer';

import Typography from '@material-ui/core/Typography';

import CircularProgress from '../CircularProgress/CircularProgress';
import Modal from '../Modal/Modal';
import Photo from '../Photo/Photo';
import Button from '../Button/Button';
import { TitleContext } from "../../context";

const Gallery: React.FC = () => {
  const dispatch = useDispatch();

  const title = useContext(TitleContext).gallery;

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    const id: string | null = urlParam.get('album_id');

    dispatch(getPhotosById(id));
  }, []);

  const state = useSelector((state: AppState) => state.Gallery);
  const { photos, error, isLoading } = state;

  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [idPhoto, setIdPhoto] = useState<number>(0);

  const openModal = (id: number): void => {
    setModalVisible(true);
    setIdPhoto(id);
  };

  const closeModal = (): void => {
    setModalVisible(false);
  };

  const back = (): void => window.history.back();

  if (!isLoading && !photos) {
    return <Typography className={style.title} component="p">{error}</Typography>
  }

  return (
    <div>
      <Button className={style.button} value="К списку альбомов" onClick={back} />
      <Typography className={style.title} component="p">{title}</Typography>
      { isLoading && <CircularProgress /> }
      { !isLoading && photos
        && <>
            <Photo photos={photos} openModal={openModal} />
            { isModalVisible && 
              <Modal id={idPhoto} photos={photos} open={isModalVisible} close={closeModal} />
            }
        </>
      }
    </div>
  );
}

export default Gallery;