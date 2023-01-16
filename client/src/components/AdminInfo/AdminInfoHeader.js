import style from './AdminInfo.module.scss';

import image from '../../assets/icons/user.png';

function AdminInfoHeader({ user }) {
    const { fullName, email } = user;
    return (
        <div className={style.adminInfoHeader}>
            <div className={style.imageHolder}>
                <img src={image} alt={fullName} className={style.image} />
            </div>
            <div className={style.text}>
                <h3 className={style.title}>{fullName}</h3>
                <h4 className={style.position}>{email}</h4>
            </div>
        </div>
    );
}

export default AdminInfoHeader;
