import sql from 'mssql' //se importa el modulo

const dbsetting = { //se configuran los parametros de la base de datos a la que se va a hacer conexion
user: 'user',
password: 'Cerezo.2022',
server: '192.168.1.200',
database: 'webstoreavr',
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
