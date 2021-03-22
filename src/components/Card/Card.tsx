import React from 'react';

import style from './Card.module.scss';

import { Card as CardMaterial } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface CardProps {
  src: string,
  onClick: () => void,
  title: string,
  count?: number,
}

const Card: React.FC<CardProps> = ({ src, onClick, title, count }) => {
  return (
    <CardMaterial className={style.card} onClick={onClick}>
      <CardMedia
        className={style.card__image}
        image={src}
        title={title}
      />
      <CardContent>
        {
          count ? <Typography color="textSecondary" component="p">{title}, {count} шт.</Typography> :
          <Typography color="textSecondary" component="p">{title}</Typography>
        }
      </CardContent>
    </CardMaterial>
  );
}

export default Card;