import React, {Suspense, useContext} from 'react'
import { Link } from 'react-router-dom';
import Loading from 'components/Loading';

import { ReactComponent as User } from 'assets/icons/icon-user.svg'
import { ReactComponent as SignIn } from 'assets/icons/icon-sign-in.svg'

import style from './UserMenu.module.scss'
import {UserContext} from "../../context/userContext";

const AdminInfoHeader = React.lazy(()=> import('components/AdminInfo/AdminInfoHeader'));

const UserMenu = () => {
  const user = useContext(UserContext);
  const isLogin = false;

  return (
    <div className={style.menu}>
      { isLogin
        ? (<>
            <Link to={'/profile'} className={style.link}>
              <User /> Username
            </Link>
            <div className={style.dropdown}>
              <Suspense fallback={<Loading />}>
                <AdminInfoHeader user={user} />
              </Suspense>
              <ul>
                <li>
                  <Link to={'/dashboard'} className={style.sublink}>Dashboard</Link>
                </li>
                <li>
                  <Link to={'/profile'} className={style.sublink}>Profile</Link>
                </li>
                <li>
                  <Link to={'/settings'} className={style.sublink}>Settings</Link>
                </li>
                <li>
                  <button className={style.sublink}>Logout</button>
                </li>
              </ul>
            </div>
          </>)
        : (<>
          <Link to={'/login'} className={style.link}>
            <SignIn /> Sign in
          </Link>
          <div className={style.dropdown}>
            <ul>
              <li>
                <Link to={'/registration'} className={style.sublink}>Registration</Link>
              </li>
            </ul>
          </div>
        </>)
      }
    </div>
  )
}

export default UserMenu;