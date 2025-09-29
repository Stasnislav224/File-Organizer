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
            return sortFiles(data);
        })
        .then(() => {
            console.log("Фали були відсортовані по папкам");
            process.exit(0);
        })
        .catch(err => {
            console.error(err)
            process.exit(1);
        });
}).on('close', () => {
    console.log('Робота скрипту призупинена!');
    process.exit(0);
});

// Додати змогу сортувати файли та папки за вагою та по алфавітному порядку (або зробити вибір сортувати за вагою або по алфавітному порядку)

