import React, { useRef, useState } from 'react';
import './Input.scss';
import { ReactComponent as Close } from '../../../assets/icons/eye_password_see.svg';
import { ReactComponent as See } from '../../../assets/icons/eye_key_look_password.svg';

function Input({ className, ...props }) {
    const inputRef = useRef(null);
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordClick = () => {
        if (showPassword) {
            inputRef.current.setAttribute('type', 'password');
        } else {
            inputRef.current.setAttribute('type', 'text');
        }
        setShowPassword(!showPassword);
    };

    return (
        <div className={`${className} form-control`}>
            <input {...props} ref={inputRef} />
            {props.type === 'password' ? (
                <span className="icon-control" onClick={handlePasswordClick}>
                    {showPassword ? <Close /> : <See />}
                </span>
            ) : null}
        </div>
    );
}

export default Input;
