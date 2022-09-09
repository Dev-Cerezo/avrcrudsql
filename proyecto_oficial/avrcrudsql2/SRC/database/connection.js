import sql from 'mssql'

const dbSettings = {
    user: 'user',
    password: 'Cerezo.2022',
    server: '192.168.1.200',
    database: 'GAECTI_PRU',
    options: {
      encrypt: false,
      // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
}
}

export async function getConnection(){
try {
    const pool = await sql.connect(dbSettings)
    return pool;   
} catch (error) {
    console.log(error)
}

}

