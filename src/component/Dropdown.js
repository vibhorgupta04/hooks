import React, { useState, useEffect } from 'react';

const Dropdown = (props) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.addEventListener(
            "click",
            () => {
                console.log('BOD');
                if (open) setOpen(false);
            }
        );
    }, [open]);

    const renderedOptions = props.dpcontent.map(option => {
        if (option.color === props.defVal.color) {
            return null;
        }
        return (
            <div key={option.color} className="item" onClick={() => {
                console.log("Item Clicked");
                props.onSelectedChange(option);
            }}>
                {option.label}
            </div>
        );
    });

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a color</label>
                <div onClick={() => {
                    console.log("Dropdown");
                    setOpen(!open);
                }} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{props.defVal.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
                </div>
            </div >
        </div >
    );
};

export default Dropdown;