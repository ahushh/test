const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Check if some string is a palindrome: ', data => {
    const a = data.split('');
    console.log(
       a.join('') === a.reverse().join('')
    );
    rl.close();
});
