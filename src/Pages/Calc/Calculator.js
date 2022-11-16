import React from 'react';
import useCalc from './useCalc';

const Calculator = () => {
    const {num,onIncrease,onDecrease,onReset} =useCalc();
    return (
        <div>
            <h1>Caclulator</h1>
            <p>{num}</p>
            <button onClick={onIncrease}>Increase</button>
            <button onClick={onDecrease}>Decrease</button>
            <button onClick={onReset}>Reset</button>

        </div>
    );
};

export default Calculator;