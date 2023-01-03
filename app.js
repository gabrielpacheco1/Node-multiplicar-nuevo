const {crearArchivoPromise, crearArchivoAsync} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();

//console.log(argv)

/* const [, , arg3= 'base=1'] = process.argv;
const [, base=  1]= arg3.split('='); //.split separa el string en 2 tomando como separador el argumento enviado
 */
//console.log(base)
crearArchivoAsync(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log('Archivo'.green, `${nombreArchivo}`.bgGreen, `creado exitosamente.`.green))
    .catch(err => console.log(err));