const readline = require('readline');

const gcd = (m, n) => {
    let a = m, b = n;
    while (b !== 0) {
        const t = a % b;
        a = b;
        b = t;
    }
    return a;
}

const lcm = (m, n) => m*n / gcd(m, n);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Compute GCD(a,b) and LCM(a,b) where a,b = ', data => {
    try {
        const [_, a, b] = data.match(/(-?\d+)[^-\d]+(-?\d+)/);
        console.log(
            gcd(a, b),
            lcm(a, b)
        );
    } catch (e) {
        console.error('Invalid numbers');
    }
    rl.close();
});
