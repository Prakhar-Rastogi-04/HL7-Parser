var fs = require('fs');
var schedule = require('node-schedule');

checkFileAvailability=()=>{
    fs.stat('./*.js', function(err) {
        if (!err) {
            console.log('file or directory exists');
            deleteFile();
        }
        else if (err.code === 'ENOENT') {
            console.log('file or directory does not exist');
        }
    });
}

deleteFile = ()=>{
  console.log('delete called')
  fs.unlink('abc.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
}


 
var j = schedule.scheduleJob('*/1 * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
  checkFileAvailability();
});