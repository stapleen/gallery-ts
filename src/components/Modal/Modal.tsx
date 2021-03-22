import React, { useState } from 'react';

import style from './Modal.module.scss';

import { Modal as ModalMaterial } from '@material-ui/core';

import IconButton from '../IconButton/IconButton';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import _ from 'lodash';

import { IPhoto } from '../Photo/interface';

interface ModalProps {
  id: number,
  photos: IPhoto[],
  open: boolean,
  close: () => void,
}

interface INewPhoto {
  url: string,
  id: number,
}

const Modal: React.FC<ModalProps> = ({ id, photos, close, open }) => {
  const photo: undefined | IPhoto = photos &&  _.find(photos, { id });
  const photoUrl: undefined | string = photo && photo.url;

  const [idPhoto, setIdPhoto] = useState<number>(id);
  const [url, setUrl] = useState<undefined | string>(photoUrl);
  const [lastIndex] = useState<number>(photos.length - 1);

  const handleNext = (): void => {
      const index: number = _.findIndex(photos, { id: idPhoto });
      const newIndex: number = (index + 1) > lastIndex ? 0 : index + 1;
      const { url, id }: INewPhoto = photos[newIndex];

      setUrl(url);
      setIdPhoto(id);
  };

  const handlePrev = (): void => {
    const index: number = _.findIndex(photos, { id: idPhoto });
    const newIndex: number = (index - 1) < 0 ? lastIndex : index - 1;
    const { url, id }: INewPhoto = photos[newIndex];

    setUrl(url);
    setIdPhoto(id);
  };

  return (
    <ModalMaterial
      className={style.modal}
      open={open}
      onClose={close}
    >
      <>
        <div className={style.modal__content}>
          <IconButton 
            fontSize="large"
            className={style.modal__content__icon}
            icon={ArrowBackIosIcon}
            onClick={handlePrev}
          />
          <img src={url} alt="modal image" className={style.modal__content__image} />
          <IconButton 
            fontSize="large"
            className={style.modal__content__icon}
            icon={ArrowForwardIosIcon}
            onClick={handleNext}
          />
        </div>
      </>
    </ModalMaterial>
  );
}

export default Modal;