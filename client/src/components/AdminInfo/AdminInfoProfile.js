import React from 'react'
import style from './AdminInfo.module.scss'

import image from 'assets/icons/user.png'

function AdminInfoProfile({user}) {
  return (
    <div className={style.adminInfoProfile}>
      <div className={style.imageHolder}>
        <img src={image} alt={user.fullName} className={style.image}  />
      </div>
      <div className={style.text}>
        <h3 className={style.title}>{user.fullName}</h3>
        <h4 className={style.position}>{user.email}</h4>
      </div>
    </div>
  )
}

export default AdminInfoProfile;