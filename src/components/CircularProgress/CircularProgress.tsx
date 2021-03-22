import React from 'react';

import style from './CircularProgress.module.scss';

import { CircularProgress as CircularProgressMaterial } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const CircularProgress: React.FC = () => {
  return (
    <div className={style.progress}>
      <CircularProgressMaterial color="secondary" />
      <Typography className={style.progress__title} component="p">Загрузка...</Typography>
    </div>
  );
}

export default CircularProgress;