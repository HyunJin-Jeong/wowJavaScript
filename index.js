
function calculator(cmd, a, b){
    switch (cmd){
        case 'add':
            return a + b;
            break;
        
        case 'substract':
            return a - b;
            break;
        
        case 'divide':
            return a / b;
            break;
        
        case 'multiply':
            return a * b;
            break;
        
        case 'remainder':
            return a % b;
            break;
        
        default:
            return '??';
            break;
    }
}

console.log(calculator('multiply', 321, 23));