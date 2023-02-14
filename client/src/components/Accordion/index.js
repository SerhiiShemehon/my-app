import { useState } from 'react';
import style from './Accordion.module.scss';

function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className={style.accordion}>
            {items.map((item, index) => (
                <div key={item.title} className={style.item}>
                    <button
                        type="button"
                        className={`${style.btn} ${
                            activeIndex === index ? style.btnActive : null
                        }`}
                        onClick={() => handleClick(index)}
                        aria-expanded={activeIndex === index}
                    >
                        {item.title}
                    </button>
                    {activeIndex === index ? (
                        <div className={style.content}>{item.content}</div>
                    ) : null}
                </div>
            ))}
        </div>
    );
}

export default Accordion;
