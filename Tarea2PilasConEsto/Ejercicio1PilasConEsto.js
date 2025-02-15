class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack underflow");
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
    
}

function EvaPosFija(expression) {
    const stack = new Stack();
    const tokens = expression.split(' ');

    tokens.forEach(token => {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            const constante2 = stack.pop();
            const constante1 = stack.pop();
            let result;

            switch (token) {
                case '+':
                    result = constante1 + constante2;
                    break;
                case '-':
                    result = constante1 - constante2;
                    break;
                case '*':
                    result = constante1 * constante2;
                    break;
                case '/':
                    result = constante1 / constante2;
                    break;
                default:
                    throw new Error(`Unknown operator: ${token}`);
            }
            stack.push(result);        }
    });
    return stack.pop();



}

const expression = "3 4 + 5 *";
const result = EvaPosFija(expression);
console.log(`El resultado de la expresión postfija "${expression}" es: ${result}`);
