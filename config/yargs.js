const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Listar o no'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Factor máximo'
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base debe ser un numero'
        }
        return true
    })
    .argv;

    module.exports = argv; //no es un objeto