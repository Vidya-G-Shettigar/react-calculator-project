import React from 'react';

export const Keypad = (props) => {

    const handleNumberClick = (e) => {
        props.numberClick(e.target.value);
    };

    return (
        <div className="keypad">
            <div className="keypad-row">
                <button className="keypad-primary-btn keypad-btn" value="clear" onClick={props.onClear}>C</button>
                <button className="keypad-primary-btn keypad-btn" value="+-" onClick={props.onToggleSign}>+/-</button>
                <button className="keypad-primary-btn keypad-btn" value="percent" onClick={props.onModulus}>%</button>
                <button className="keypad-secondary-btn keypad-btn" value="/" onClick={props.onDivide}>&divide;</button>
            </div>
            <div className="keypad-row">
                <button className="keypad-primary-btn keypad-btn" value="7" onClick={handleNumberClick}>7</button>
                <button className="keypad-primary-btn keypad-btn" value="8" onClick={handleNumberClick}>8</button>
                <button className="keypad-primary-btn keypad-btn" value="9" onClick={handleNumberClick}>9</button>
                <button className="keypad-secondary-btn keypad-btn" value="*" onClick={props.onMultiply}>&times;</button>
            </div>
            <div className="keypad-row">
                <button className="keypad-primary-btn keypad-btn" value="4" onClick={handleNumberClick}>4</button>
                <button className="keypad-primary-btn keypad-btn" value="5" onClick={handleNumberClick}>5</button>
                <button className="keypad-primary-btn keypad-btn" value="6" onClick={handleNumberClick}>6</button>
                <button className="keypad-secondary-btn keypad-btn" value="-" onClick={props.onSubtract}>&minus;</button>
            </div>
            <div className="keypad-row">
                <button className="keypad-primary-btn keypad-btn" value="1" onClick={handleNumberClick}>1</button>
                <button className="keypad-primary-btn keypad-btn" value="2" onClick={handleNumberClick}>2</button>
                <button className="keypad-primary-btn keypad-btn" value="3" onClick={handleNumberClick}>3</button>
                <button className="keypad-secondary-btn keypad-btn" value="+" onClick={props.onAdd}>&#43;</button>
            </div>
            <div className="keypad-row">
                <button className="keypad-primary-btn keypad-btn" value="0" onClick={handleNumberClick}>0</button>
                <button className="keypad-primary-btn keypad-btn" value="." onClick={props.onDecimalPoint}>.</button>
                <button className="keypad-secondary-btn keypad-equal-btn" value="=" onClick={props.onEquals}>=</button>
            </div>
        </div>
    );
}
