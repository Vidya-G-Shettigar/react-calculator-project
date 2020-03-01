const math = require('mathjs');

let currentValue = '';
let register = [];
let result = '';
let showExpression = false;

class CalculatorOperations {

    constructor() {
        currentValue = '';
        register = [];
        result = '';
        showExpression = false;
    }

    add() {
        if (currentValue === '') {
            return;
        }
        this.clearRegister();
        register.push(currentValue);
        register.push('+');

        currentValue = '';
    }

    clear() {
        currentValue = '';
        register = [];
        result = '';
    }

    clearRegister = () => {
        if (showExpression) {
            register = [];
        }
        showExpression = false;
    }

    decimal() {
        if (result !== '') {
            result = '';
            currentValue = '';
        }
        this.clearRegister();
        if (currentValue.indexOf('.') >= 0) {
            return;
        }

        if (currentValue === '') {
            currentValue += '0.';
        } else {
            currentValue += '.';
        }
    }

    divide() {
        if (currentValue === '') {
            return;
        }
        this.clearRegister();
        register.push(currentValue);
        register.push('/');

        currentValue = '';
    }

    equals() {
        if (currentValue === '') {
            return;
        }
        register.push(currentValue);

        const expression = register.join(' ');

        result = math.eval(expression);
        currentValue = result.toString();
        showExpression = true;
    }

    getExpression() {
        return register.join(' ');
    }

    getResult() {
        const res = result.toString();
        
        if (res.length + 1 < 10)
            return result;
        else
            return res.substring(0, 9).concat("...");
    }

    getValue() {
        return currentValue;
    }

    inputDigit(digit) {
        if (isNaN(digit)) {
            throw Error('Only numeric input is allowed');
        }
        if (result !== '') {
            result = '';
            currentValue = '';
        }
        if (currentValue.length + 1 < 10) {
            currentValue += digit;
        }
        this.clearRegister();
    }

    modulus() {
        if (currentValue === '') {
            return;
        }
        this.clearRegister();
        register.push(currentValue);
        register.push('%');

        currentValue = '';
    }

    multiply() {
        if (currentValue === '') {
            return;
        }
        this.clearRegister();
        register.push(currentValue);
        register.push('*');

        currentValue = '';
    }

    subtract() {
        if (currentValue === '') {
            return;
        }
        this.clearRegister();
        register.push(currentValue);
        register.push('-');

        currentValue = '';
    }

    toggleSign() {
        currentValue = (parseFloat(currentValue) * (-1)).toString();
    }
}

export default CalculatorOperations;
