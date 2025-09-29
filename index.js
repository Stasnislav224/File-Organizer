const getFile = require('./moduls/getFiles');
const sortFiles = require('./moduls/sortFiles');
const readLine = require('node:readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('Введіть абсолютний шлях до папки');
rl.on('line', (line) => {
    getFile(line == '' ? process.cwd() : line)
        .then(data => {
            sortFiles(data);
            console.log("Фали були відсортовані по папкам");
            process.exit(0);
        })
        .catch(err => console.error(err));
}).on('close', () => {
    console.log('Робота скрипту призупинена!');
    process.exit(0);
});
