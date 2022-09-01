import sql from 'mssql' //se importa el modulo
import config from '../config';
const dbsetting = { //se configuran los parametros de la base de datos a la que se va a hacer conexion
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
   options: {
     encrypt: false, // for azure que es la nube de microsoft
     trustServerCertificate: true // change to true for local dev / self-signed certs confia en el certificado del servidor actual
   },
}

 export async function getConection(){
    try {
        const pool = await sql.connect(dbsetting); //SQL.CONNECT() ES UNA FUNCION ASINCRONA POR QUE LLEVA TIEMPO LA CONEXION POR LO QUE REQUERIRA UNA PROMESA
                                                   //SE GENERA UN POOL O CONEXION, CON EL CUAL SE PODRAN HACER CONSULTAS(QUERYS)
        return pool; //se retorna cuando se ejecute la funcion getConection para que otro codigo lo utilize para determinadas consultas     
    } catch (error) {
        console.error(error);
    }
  }

  export {sql}
  