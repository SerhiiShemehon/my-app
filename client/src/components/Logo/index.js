import React from 'react';
import { Link } from 'react-router-dom';
import style from './Logo.module.scss'

function Logo() {
  return (
      <Link to={'/'} className={style.logo}>My App</Link>
  )
}

export default Logo