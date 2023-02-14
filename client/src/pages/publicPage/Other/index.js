import { useState, useEffect, useRef, memo, useMemo } from 'react';
import { Helmet } from 'react-helmet';

import Accordion from '../../../components/Accordion';
import ImageBanner from '../../../components/ImageBanner';
import imageBanner from '../../../assets/images/image03.jpg';

import './Other.scss';

const Title = memo(({ title }) => <h2 className="title-section">{title}</h2>);

function Modal() {
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
            <button
                type="button"
                className="btn btn-big"
                onClick={handleChange}
            >
                Open modal
            </button>
            {modal ? (
                <div
                    className="modal-holder"
                    onClick={handleClick}
                    role="presentation"
                >
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
}

function Memo() {
    const [count, setCount] = useState(0);
    return (
        <>
            <Title title="memo" />
            <p>Count: {count}</p>
            <button
                type="button"
                className="btn btn-big"
                onClick={() => setCount((prev) => prev + 1)}
            >
                Click
            </button>
        </>
    );
}

const list = [2, 58, 45, 3, 66, 585, 455];
const sortList = () => list.sort((a, b) => a - b);

function UseMemo() {
    const [update, setUpdate] = useState(false);
    const numbers = useMemo(sortList, []);

    return (
        <>
            <Title title="useMemo" />
            {JSON.stringify(update)}
            {numbers.map((item) => (
                <p key={item}>{item}</p>
            ))}
            <button
                type="button"
                className="btn btn-big"
                onClick={() => setUpdate((prev) => !prev)}
            >
                Click
            </button>
        </>
    );
}

function Other() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Other | My App</title>
            </Helmet>
            <ImageBanner image={imageBanner} title="Contact" />
            <div className="container">
                <Title title="Accordion" />
                <Accordion items={[
                  {
                    title: 'text 1',
                    content: 'content 1'
                  },
                  {
                    title: 'text 2',
                    content: 'content 2'
                  },
                  {
                    title: 'text 3',
                    content: 'content 3'
                  }
                ]}/>
                <Modal />
                <Memo />
                <UseMemo />
            </div>
        </>
    );
}

export default Other;
