const   opn = require('opn'),
        fse = require('fs-extra'),
        util = require('util'),
        path = require('path'),
        imgsize = util.promisify(require('image-size'));

let dir = './sample';

// fse.readFile('./board.html', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//opn('D:/GitHub/moodboards/board.html',{wait:false});



// Step 1: using fs.readDir, iterate over files (see https://stackoverflow.com/questions/32511789/looping-through-files-in-a-folder-node-js)
fse.readdir( dir, function( err, files ) {
        if( err ) {
            console.error( "Could not list the directory.", err );
            process.exit( 1 );
        } 

        files.forEach( function( file, index ) {
            //Step 1.1 for each iterable, check file extensions against match pattern
            console.log(fse.lstatSync(dir + '/' + file).isFile());
            console.log(path.extname(dir + '/' + file));
            // Step 1.2 if it's an image, get dimensions
            imgsize(dir + '/' + file)
                .then(dimensions => { console.log(dimensions.width, dimensions.height); })
                .catch(err => console.error(err));
        });
} );
