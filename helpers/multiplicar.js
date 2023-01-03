//import fs from 'node:fs'; //en la documentacion aparece asi, pero no funciona
const fs = require('fs');
const colors = require('colors');

let result=0, salida='', consola='';
//let maximo=10;

const crearArchivoPromise = (base=5, listar=false, hasta=10) => {
    
    return new Promise((resolve, reject) => {

        for (let i=1; i <= hasta; i++) {
            result= base * i;
            (i<maximo)
                ? salida+=`${base} x ${i} = ${result}\n`
                : salida+=`${base} x ${i} = ${result}`
        }
        
        if(listar)
            console.log(salida);
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);

        resolve(`tabla-${base}.txt`)
    })

}

const crearArchivoAsync = async(base=5, listar=false, hasta=10) => {
    
    try{
        for (let i=1; i <= hasta; i++) {
            result= base * i;
            (i<hasta)
                ? consola+=`${base} ${'x'.yellow} ${i} ${'='.yellow} ${colors.bold(result)}\n`
                : consola+=`${base} ${'x'.yellow} ${i} ${'='.yellow} ${colors.bold(result)}`
        
            salida+= `${base} x ${i} = ${result}\n`;
        }    
        if(listar)
            console.log('====================='.rainbow)
            console.log(`TABLA DEL: ${colors.bold(base)}`)
            console.log('====================='.rainbow)    
            console.log(consola);
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    }
    catch{
        throw "No funciona";
    }
}


module.exports = {
    //crearArchivo: crearArchivo    //una prop que apunta a una cte con el mismo nombre es redundante
    crearArchivoPromise, crearArchivoAsync 
}

/*fs.writeFile(`tabla${base}.txt`, salida, (err) =>{
    if (err) throw err;
    console.log('Archivo creado')
})*/
