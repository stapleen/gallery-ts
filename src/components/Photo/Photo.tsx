import React from 'react';

import style from './Photo.module.scss';

import Card from '../Card/Card';

import { IPhoto } from './interface';

interface PhotoProps {
  photos: IPhoto[],
  openModal: (id: number) => void,
}

const Photo: React.FC<PhotoProps> = ({ photos, openModal }) => {
  return (
    <div className={style.photos}>
      {photos.map((photo) => (
        <Card 
          key={photo.id} 
          src={photo.thumbnailUrl} 
          title={photo.title}
          onClick={() => openModal(photo.id)}
        />
      ))}
    </div>
  );
}

export default Photo;