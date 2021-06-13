const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        type: 'number',
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'hasta que numero tiene que multiplicar'
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que se un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;