import React from "react";
import style from './Post.module.scss'


function PostItem({
  title,
  description,
  link,
  views,
  comments,
  image
}) {
  return (
    <div className={style.box}>
      <div className={style.image}>
        <img src={image} alt={title}/>
      </div>
      <div className={style.content}>
        <h2 className={style.title}><a href={link}>{title}</a></h2>
        <div className={style.description}>{description}</div>
        <div className={style.footer}>
          <a href={link} className="btn">
            Read more
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.670536 5.30357L9.52153 5.30357L7.57699 7.63393C7.30878 7.95536 7.30878 8.4375 7.57699 8.75893C7.8452 9.08036 8.24752 9.08036 8.51573 8.75893L11.6002 5.0625C11.8684 4.74107 11.8684 4.25893 11.6002 3.9375L8.51574 0.241071C8.24752 -0.0803579 7.84521 -0.080358 7.57699 0.241071C7.30878 0.5625 7.30878 1.04464 7.57699 1.36607L9.52153 3.69643L0.670536 3.69643C0.335271 3.69643 6.08549e-06 4.01786 6.05032e-06 4.5C6.01514e-06 4.98214 0.335271 5.30357 0.670536 5.30357Z" fill="white"/></svg>
          </a>
          <div className={style.info}>
            <button className={style.infoItem}>
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.666656 7C0.666656 7 3.33332 1.66666 7.99999 1.66666C12.6667 1.66666 15.3333 7 15.3333 7C15.3333 7 12.6667 12.3333 7.99999 12.3333C3.33332 12.3333 0.666656 7 0.666656 7Z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 8.99999C9.10457 8.99999 10 8.10456 10 6.99999C10 5.89542 9.10457 4.99999 8 4.99999C6.89543 4.99999 6 5.89542 6 6.99999C6 8.10456 6.89543 8.99999 8 8.99999Z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {views}
            </button>
            <button className={style.infoItem}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 9C13 9.35363 12.8595 9.69276 12.6094 9.94281C12.3594 10.1929 12.0203 10.3333 11.6666 10.3333H3.66664L0.999969 13V2.33334C0.999969 1.97972 1.14045 1.64058 1.39049 1.39053C1.64054 1.14048 1.97968 1 2.3333 1H11.6666C12.0203 1 12.3594 1.14048 12.6094 1.39053C12.8595 1.64058 13 1.97972 13 2.33334V9Z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {comments}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem