import React, { useState } from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);
    const [resetTo, setResetTo] = useState(0);

    // Tre sätt att göra funktionen decrease
    // const decrease = () => { setValue(value - 1); };
    // function decrease()    { setValue(value - 1); }
    const decrease = () => setValue(value - 1);
    const increase = () => setValue(value + 1);
    const reset    = () => setValue(resetTo);

    const decreaseReset = () => setResetTo(resetTo - 1);
    const increaseReset = () => setResetTo(resetTo + 1);

    return (
        <div className="counter">
            <button onClick={decrease}>-1</button>
            Value: {value}
            <button onClick={increase}>+1</button>
            <button onClick={reset}>Reset</button>

            <br />

            <button onClick={decreaseReset}>-1</button>
            Reset to: {resetTo}
            <button onClick={increaseReset}>+1</button>
        </div>
    )
}

export default Counter;
