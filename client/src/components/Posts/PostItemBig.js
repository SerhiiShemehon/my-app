import { Link } from 'react-router-dom';
import style from './Post.module.scss';

function PostItemBig({ title, slug, _id, thumbnail }) {
    return (
        <div className={style.boxBig}>
            <div className={style.image}>
                <img src={thumbnail} alt={title} />
            </div>
            <div className={style.content}>
                <h2 className={style.title}>
                    <Link to={`/post/${_id}`}>{title}</Link>
                </h2>
                <div className={style.description}>
                    <p>{slug}</p>
                </div>
                <div className={style.footer}>
                    <Link to={`/post/${_id}`} className={`btn ${style.btn}`}>
                        Read more
                        <svg
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.670536 5.30357L9.52153 5.30357L7.57699 7.63393C7.30878 7.95536 7.30878 8.4375 7.57699 8.75893C7.8452 9.08036 8.24752 9.08036 8.51573 8.75893L11.6002 5.0625C11.8684 4.74107 11.8684 4.25893 11.6002 3.9375L8.51574 0.241071C8.24752 -0.0803579 7.84521 -0.080358 7.57699 0.241071C7.30878 0.5625 7.30878 1.04464 7.57699 1.36607L9.52153 3.69643L0.670536 3.69643C0.335271 3.69643 6.08549e-06 4.01786 6.05032e-06 4.5C6.01514e-06 4.98214 0.335271 5.30357 0.670536 5.30357Z"
                                fill="white"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PostItemBig;
