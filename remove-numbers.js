const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Remove all digits from string: ', data => {
    console.log(
       [...Array(data.length)]
        .map((_, i) => data.charCodeAt(i))
        .filter(code => code < 0x30 || code > 0x39)
        .reduce((a, code) => a + String.fromCharCode(code) , '') 
    );
    rl.close();
});
