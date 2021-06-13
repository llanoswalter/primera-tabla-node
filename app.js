const { crearArtivo } = require('./helpers/multiplicar');
const argv= require('./config/yargs');

require('colors');


console.clear();

// para leer los datos de consola puedo usar esto o yargs
// const [ , , arg3= 'base=5']= process.argv;
// const [ , base= 5 ]= arg3.split('=');

crearArtivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo=> console.log(nombreArchivo.yellow))
    .catch( error => console.log(error));