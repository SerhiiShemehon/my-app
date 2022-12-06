import React from "react";
import style from './ImageBanner.module.scss'

function ImageBanner({image}) {
  return (
    <div style={{backgroundImage: `url("${image}")`}} className={style.banner} />
  )
}

export default ImageBanner;