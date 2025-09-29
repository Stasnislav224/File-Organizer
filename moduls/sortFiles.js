const {path} = require('./core');
const createDir = require('./createDir');

const isTextFile = (file) => {
    return path.extname(file) === '.txt' ? true : false;
};

const isImage = (img) => {
    return path.extname(img) === '.jpg' ? true : path.extname(img) === '.png' ? true : false;
};


module.exports = function sortFiles (data) {
    const files = {
        txt: [],
        docx: [],
        zip: [],
        json: [],
        pdf: [],
        img: [],
    };

    data.forEach(file => {
        const ex = path.extname(file).replace('.', '');

        if (isTextFile(file)) {
            files[ex].push(file);
        } 
        else if (isImage(file)) {
            files.img.push(file);
        } 
        else if (files[ex]) {
            files[ex].push(file);
        } 
        else if(ex === '') {
            files.dir.push(file);
        }
    });

    createDir(files);
}