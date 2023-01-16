import style from './AdminInfo.module.scss';

import image from '../../assets/icons/user.png';

function AdminInfoProfile({ user }) {
    const { fullName, email } = user;
    return (
        <div className={style.adminInfoProfile}>
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

export default AdminInfoProfile;
