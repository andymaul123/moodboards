const opn = require('opn');

console.log("running");
function launch() {
	console.log('bananas');
// fs.open('/Users/amaul/git-directory/moodboards', 'a+', (err, fd) => {
//   // => [Error: EISDIR: illegal operation on a directory, open <directory>]
// });

}

opn('/Users/amaul/git-directory/moodboards/board.html',{wait:false});
console.log("finish");
module.exports = launch;