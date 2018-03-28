const readline = require('readline');

const getFibonnaci = n => {
    const mem = {
        0: 1,
        1: 1,
    };
    const calc = i => {
        if (!mem[i]) {
            mem[i] = mem[i - 1] + mem[i - 2];
        }
        if (mem[i] > n) {
            return [];
        }
        return [mem[i], ...calc(i + 1)];
    }
    return calc(0);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Fibonacci numbers in 1...N range where N is ', data => {
    const n = +data;
    if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
        console.error(`'${data}' is not a natural number`);
        rl.close();
        return;
    }
    const numbers = getFibonnaci(n);
    console.error(numbers.join(', '));
    rl.close();
});
