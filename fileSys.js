// const fs = require('fs')

// const path = './server.js'
// console.log('file exists 1')
// try {
//   if (fs.existsSync(path)) {
//     //file exists
//     console.log('file exists')
//   }
// } catch(err) {
//   console.log('file exists')
//   console.error(err)
// }

var fs = require('fs');

fs.stat('./fileSys.js', function(err) {
    if (!err) {
        console.log('file or directory exists');
        deleteFile();
    }
    else if (err.code === 'ENOENT') {
        console.log('file or directory does not exist');
    }
});

deleteFile = ()=>{
  console.log('delete called')
  fs.unlink('abc.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
}