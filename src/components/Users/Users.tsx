import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './Users.module.scss';

import { getUsers } from './action';
import { AppState } from '../../store/rootReducer';

import Typography from '@material-ui/core/Typography';

import User from '../User/User';
import CircularProgress from '../CircularProgress/CircularProgress';
import { TitleContext } from "../../context";

const Users: React.FC = () => {
  const dispatch = useDispatch();

  const title = useContext(TitleContext).users;

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const state = useSelector((state: AppState) => state.Users);
  const { users, error, isLoading } = state;

  if (!isLoading && !users) {
    return <Typography className={style.title} component="p">{error}</Typography>;
  }

  return (
    <div>
      <Typography className={style.title} component="p">{title}</Typography>
      { isLoading && <CircularProgress /> }
      { !isLoading && users && <User users={users} /> }
    </div>
  );
}

export default Users;