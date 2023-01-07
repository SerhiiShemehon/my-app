import React from 'react';
import ReactDOM from 'react-dom';

import style from './Modal.module.scss'

const Modal = ({closeModal, children}) => {
  const root = document.getElementById('root');

  const handleClick = (e) => {
    if (e.target.classList.contains('modal-holder')) {
      closeModal();
    }
  }

  return ReactDOM.createPortal(
    <div className={`modal-holder ${style.holder}`} onClick={handleClick}>
      <div className={style.content}>
        {children}
      </div>
    </div>,
    root
  )
}

export default Modal;