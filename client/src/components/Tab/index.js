import { useState } from 'react';
import style from './Tab.module.scss';

function Tab({ items }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className={style.tab}>
            <div className={style.nav}>
                {items.map((item, index) => (
                    <button
                        key={item.title}
                        type="button"
                        className={`${style.btn} ${
                            activeIndex === index ? style.btnActive : null
                        }`}
                        onClick={() => handleClick(index)}
                        aria-expanded={activeIndex === index}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
            {items.map((item, index) =>
              activeIndex === index ? (
                <div key={item.title} className={style.item}>
                    {item.content}
                </div>
              ) : null
            )}
        </div>
    );
}

export default Tab;
