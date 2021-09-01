import React, { Fragment, useState } from 'react';


const Accordion = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);
    // const things = useState(null);
    // const activeIndex = things[0];
    // const setActiveIndex = things[0];

    const onTitleClicked = (index) => {
        setActiveIndex(index);
    };

    const renderItems = props.items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        return (
            <Fragment key={index}>
                <div className={`title ${active}`} onClick={() => onTitleClicked(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </Fragment >
        );
    });

    return (
        <div className="ui styled accordion">
            {renderItems}
            {/* <h1>{activeIndex}</h1> */}
        </div>
    );
};

export default Accordion;