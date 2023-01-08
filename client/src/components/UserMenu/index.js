import React, {Suspense, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';

import Loading from 'components/Loading';
import { AuthContext } from 'context/auth';

import { ReactComponent as User } from 'assets/icons/icon-user.svg'
import { ReactComponent as SignIn } from 'assets/icons/icon-sign-in.svg'

import style from './UserMenu.module.scss'

const AdminInfoHeader = React.lazy(()=> import('components/AdminInfo/AdminInfoHeader'));

const UserMenu = () => {
  const {user, logout} = useContext(AuthContext);
  const navigate = useNavigate();

  const logOut = () => {
    logout();
    navigate('/');
  }

  return (
    <div className={style.menu}>
      { user
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
                  <button className={style.sublink} onClick={logOut}>Logout</button>
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