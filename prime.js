const readline = require('readline');

const getPrimes = n => {
    let numbers = [...Array(n - 1)].map((_, i) => i + 2);
    let i = 0;
    let m = numbers[i];
    while (m ** 2 <= n) {
        numbers = numbers.filter(x => x % m);
        m = numbers[++i];
    }
    return numbers;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Prime numbers from 1 to N where N is ', data => {
    const n = +data;
    if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
        console.error(`'${data}' is not a natural number`);
        rl.close();
        return;
    }
    const numbers = getPrimes(n);
    console.error(numbers.join(', ') || 'No such numbers');
    rl.close();
});
