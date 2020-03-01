import React, { Component } from 'react';

import CalculatorOperations from './CalculatorOperations';
import { DisplayComponent } from './Display';
import { Keypad } from './Keypad';

const calculatorOperations = new CalculatorOperations();

export default class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expression: '',
            value: ''
        };
    }

    handleOnAdd = () => {
        calculatorOperations.add();
        this.handleResult();
    }

    handleOnClear = () => {
        calculatorOperations.clear();
        this.handleResult();
    }

    handleOnDecimalPoint = () => {
        calculatorOperations.decimal();
        this.handleResult();
    }

    handleOnDigit = (number) => {
        calculatorOperations.inputDigit(number);
        this.handleResult();
    }

    handleOnDivide = () => {
        calculatorOperations.divide();
        this.handleResult();
    }

    handleOnEquals = () => {
        calculatorOperations.equals();

        this.setState({
            expression: calculatorOperations.getExpression(),
            value: calculatorOperations.getResult().toString()
        });
    }

    handleOnModulus = () => {
        calculatorOperations.modulus();
        this.handleResult();
    }

    handleOnMultiply = () => {
        calculatorOperations.multiply();
        this.handleResult();
    }

    handleOnSubtract = () => {
        calculatorOperations.subtract();
        this.handleResult();
    }

    handleOnToggleSign = () => {
        calculatorOperations.toggleSign();

        this.setState({
            value: calculatorOperations.getValue().toString()
        });
    }

    handleResult = () => {
        this.setState({
            expression: calculatorOperations.getExpression(),
            value: calculatorOperations.getValue().toString()
        });
    }

    render() {
        return (
            <div className="calculator">
                <div className="calculator-box">
                    <DisplayComponent expression={this.state.expression} value={this.state.value} />
                    <Keypad numberClick={this.handleOnDigit}
                        onAdd={this.handleOnAdd}
                        onClear={this.handleOnClear}
                        onDecimalPoint={this.handleOnDecimalPoint}
                        onDivide={this.handleOnDivide}
                        onEquals={this.handleOnEquals}
                        onModulus={this.handleOnModulus}
                        onMultiply={this.handleOnMultiply}
                        onSubtract={this.handleOnSubtract}
                        onToggleSign={this.handleOnToggleSign} />
                </div>
            </div>
        );
    };
}
