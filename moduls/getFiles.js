const {fs} = require('./core');

module.exports = function getFiles (dir) {
    process.env.USER_DIR = dir; // for get dir path
    
    return new Promise((res, rej) => {
        fs.readdir((dir), (err, data) => {
            if (err) rej(err);
            res(data);
        });
    });
}