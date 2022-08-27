import sql from 'mssql' //se importa el modulo
import config from '../config';
const dbsetting = { //se configuran los parametros de la base de datos a la que se va a hacer conexion
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
   options: {
     encrypt: false, // for azure
     trustServerCertificate: false // change to true for local dev / self-signed certs
   },
}

 export async function getConection(){
    try {
        const pool = await sql.connect(dbsetting);
        return pool;      
    } catch (error) {
        console.error(error);
    }
  }

  export {sql}
  