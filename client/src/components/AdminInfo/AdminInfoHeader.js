import React from 'react'
import style from './AdminInfo.module.scss'

function AdminInfoHeader({user}) {
  return (
    <div className={style.adminInfoHeader}>
      <div className={style.imageHolder}>
        <img src={user.image} alt={user.name} className={style.image}  />
      </div>
      <div className={style.text}>
        <h3 className={style.title}>{user.name}</h3>
        <h4 className={style.position}>{user.position}</h4>
      </div>
    </div>
  )
}

export default AdminInfoHeader;