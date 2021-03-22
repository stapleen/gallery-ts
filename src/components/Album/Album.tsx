import React from 'react';
import { RouteComponentProps, withRouter } from "react-router";

import style from './Album.module.scss';

import Card from '../Card/Card';

import IAlbum from './interface';
import { IPhotoData } from '../Photo/interface';

import { History } from "history";

interface AlbumProps extends RouteComponentProps {
  albums: IAlbum[],
  photoData: IPhotoData,
  history: History,
}

const Album: React.FC<AlbumProps> = ({ albums, photoData, history }) => {
  return (
    <div className={style.albums}>
      {albums.map((album) => (
        <Card 
          key={album.id} 
          src={photoData[album.id][0].thumbnailUrl} 
          title={album.title}
          count={photoData[album.id].length}
          onClick={() => history.push(`/gallery?album_id=${album.id}`)}
        />
      ))}
    </div>
  );
}

export default withRouter(Album);