import React from "react";

const ChildButton =
    React.memo(({onClick, label}) =>
    {
    console.log('ChildButton rendered');
    return <button onClick={onClick}>{label}</button>;
})

export default ChildButton;