import { Link } from 'react-router-dom';

import style from './ImageBanner.module.scss';

function ImageBanner({ image, title, link }) {
    return (
        <div
            style={{ backgroundImage: `url("${image}")` }}
            className={style.banner}
        >
            <div className={`container ${style.container}`}>
                {title ? <h1 className={style.title}>{title}</h1> : null}
                {link ? (
                    <Link className={`btn btn-big ${style.btn}`} to={link.url}>
                        {link.title}
                    </Link>
                ) : null}
            </div>
        </div>
    );
}

export default ImageBanner;
