const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Check for [a, b] and [c, d] intervals intersection where a, b, c, d = ', data => {
    try {
        const [_, ...c] = data.match(/(-?\d+)[^\d-]+(-?\d+)[^\d-]+(-?\d+)[^\d-]+(-?\d+)/);
        console.log(
            +c[2] < +c[1] && +c[0] < +c[3]
        );
    } catch (e) {
        console.error('Not valid coordinates');
    }
    rl.close();
});
