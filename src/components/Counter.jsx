import React, {useState, useCallback} from "react";
import ChildButton from "./ChildButton.jsx";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log('Child button clicked');
    }, []);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <ChildButton onClick={handleClick} label="Click me"/>
        </div>
    );
};

export default Counter;