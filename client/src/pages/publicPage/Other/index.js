import React, { useState, useEffect, useRef, memo, useMemo } from 'react';

import ImageBanner from '../../../components/ImageBanner';
import imageBanner from '../../../assets/images/image03.jpg';

import './Other.scss';

const Title = memo(({ title }) => {
    return <h2 className="title-section">{title}</h2>;
});

const Modal = () => {
    const inputRef = useRef(null);
    const [modal, setModal] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = () => {
        setModal(true);
        setTimeout(() => {
            inputRef.current.focus();
        }, 30);
    };

    const handleClick = (e) => {
        if (e.target.classList.contains('modal-holder')) {
            setModal(false);
        }
    };
    return (
        <>
            <Title title="useRef" />
            <button className="btn btn-big" onClick={handleChange}>
                Open modal
            </button>
            {modal ? (
                <div className="modal-holder" onClick={handleClick}>
                    <div className="modal-block">
                        <form onSubmit={handleSubmit}>
                            <input type="text" ref={inputRef} />
                            <button type="submit" className="btn-second">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            ) : null}
        </>
    );
};

const Memo = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <Title title={'memo'} />
            <p>Count: {count}</p>
            <button
                className={'btn btn-big'}
                onClick={() => setCount((prev) => prev + 1)}
            >
                Click
            </button>
        </>
    );
};

const list = [2, 58, 45, 3, 66, 585, 455];
const sortList = () => {
    return list.sort((a, b) => a - b);
};

const UseMemo = () => {
    const [update, setUpdate] = useState(false);
    const numbers = useMemo(sortList, []);

    return (
        <>
            <Title title={'useMemo'} />
            {JSON.stringify(update)}
            {numbers.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
            <button
                className={'btn btn-big'}
                onClick={() => setUpdate((prev) => !prev)}
            >
                Click
            </button>
        </>
    );
};

function Other() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <ImageBanner image={imageBanner} title={'Contact'} />
            <div className={'container'}>
                <Modal />
                <Memo />
                <UseMemo />
            </div>
        </>
    );
}

export default Other;
