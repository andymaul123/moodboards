const   opn = require('opn'),
        fse = require('fs-extra'),
        util = require('util'),
        path = require('path'),
        imgsize = util.promisify(require('image-size'));

let dir = './sample';
let imageExtensions = ['.jpg','.jpeg','.png'];
let fileExtensions = ['.txt'];

// fse.readFile('./board.html', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

function handleImages(image) {
    imgsize(image)
        .then(dimensions => { 
            //eventually return the dimensions to calculator method for weighting
            console.log(dimensions.width, dimensions.height); 
        })
        .catch(err => {
            console.error(err)
        });
}

function handleTextFiles(text) {
    console.log("Will handle text file from here");
}

//opn('D:/GitHub/moodboards/board.html',{wait:false});

// Step 1: using fs.readDir, iterate over files (see https://stackoverflow.com/questions/32511789/looping-through-files-in-a-folder-node-js)
fse.readdir( dir, function( err, files ) {
        if( err ) {
            console.error( "Could not list the directory.", err );
            process.exit( 1 );
        } 

        files.forEach( function( file, index ) {
            //Step 1.1 for each iterable, check if it's a file and if it's an acceptable image type
            if(fse.lstatSync(dir + '/' + file).isFile() && imageExtensions.indexOf(path.extname(dir + '/' + file)) > -1) {
                handleImages(dir + '/' + file);
            } else if(fse.lstatSync(dir + '/' + file).isFile() && fileExtensions.indexOf(path.extname(dir + '/' + file)) > -1) {
                handleTextFiles(dir + '/' + file);
            }
        });
} );
