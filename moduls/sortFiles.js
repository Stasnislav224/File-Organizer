const {path} = require('./core');
const createDir = require('./createDir')


module.exports = function sortFiles (data) {
    const files = {
        txt: [],
        dir: [],
        json: [],
        pdf: [],
        png: [],
        scripts: [],
    };

    data.forEach(file => {
        const ex = path.extname(file).replace('.', '');
        if (files[ex]) {
            files[ex].push(file);
        } else if(ex === '') {
            files.dir.push(file);
        }
    });

    createDir(files);
}