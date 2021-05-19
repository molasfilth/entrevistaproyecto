import axios from 'axios';
var mysql = require('mysql');
var dataConection={
    host:'localhost:3306',
    user:'root',
    password:'',
    database:'proyectoentrevista'
}
var mysqlConnection = mysql.createConnection(dataConection);
export const insertPerson=(nombre, apellido_p, apellido_m)=>{
    console.log('metodo insertar persona');
console.log(nombre, apellido_p, apellido_m);
    if( nombre === null || nombre === undefined || 
        apellido_p === null || apellido_p === undefined ||
        apellido_m === null || apellido_m === undefined 
        ){
console.log('campos incompletos');
            return false;
    }else{
        try {
            mysqlConnection.connect();
            mysqlConnection.query(
                `INSERT INTO formulario (nombre,apellido_p,apellido_m) VALUES ('${nombre}', '${apellido_p}', '${apellido_m}')`,
                (error,result,fields)=>{
                    if(error) throw error;
                    return result;
    
                }
            );
        } catch (error) {
            console.log('error en apyMysql.insertPerson() ',error);
            return false;
        }

     
    }
   

}