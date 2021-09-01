import React, { useState } from "react";
// import Accordion from "./component/Accordion";
// import Search from "./component/Search";
import Dropdown from "./component/Dropdown";

// const items = [
//     {
//         title: 'What is React?',
//         content: 'React is a front and java script framework'
//     },
//     {
//         title: 'Why use React',
//         content: 'React is a favorite JS library among engineers'
//     },
//     {
//         title: 'How do you use React?',
//         content: 'You use React by creating components'
//     }
// ];

const options = [
    {
        label: 'The text Color Red',
        color: 'red'
    },
    {
        label: 'A Shade of Blue',
        color: 'blue'
    },
    {
        label: 'The Color orange',
        color: 'orange'
    }
];


const App = function () {
    const [selected, setSelected] = useState(options[0]);


    return (
        <div>
            <Dropdown defVal={selected} onSelectedChange={setSelected} dpcontent={options} />
        </div>
    );
};

export default App;