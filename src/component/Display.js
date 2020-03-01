import React from 'react';

export const DisplayComponent = (props) => {
    return (
        <div className="display">
            <div className="display-expression">{props.expression}</div>
            <div className="display-value">{props.value}</div>
        </div>
    );
}
