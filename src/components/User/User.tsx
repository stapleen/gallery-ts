import React from 'react';
import { RouteComponentProps, withRouter } from "react-router";

import style from './User.module.scss';

import Button from '../Button/Button';

import { History } from "history";

import IUser from './interface';

interface UserProps extends RouteComponentProps {
  users: IUser[],
  history: History,
}

const User: React.FC<UserProps> = ({ users, history }) => {
  return (
    <div className={style.users}>
      {users.map((user) =>
        <Button
          key={user.id}
          className={style.users__user}
          size="small"
          value={user.name}
          onClick={() => history.push(`/albums?user_id=${user.id}`)} 
        />
      )}
    </div>
  )
}

export default withRouter(User);