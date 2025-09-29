const {fs, path} = require('./core');

module.exports = function createDir(data) {
    for(const item in data) {
        fs.mkdir(path.join(process.env.USER_DIR, item), { recursive: true }, (err) => {
            if (err) throw err;

            const dirPath = path.join(process.env.USER_DIR, item);
            data[item].forEach(file => {
                fs.rename(
                    path.join(process.env.USER_DIR, file),
                    path.join(dirPath, file),
                    err => {
                        if(err) throw err;
                });
            });
        });


    }
}