import {getConnection} from '../database/connection'

export const getServidores = async (req, res)=>{

  const pool = await getConnection();
  const result = await pool.request().query('SELECT *FROM servidores')
  console.log(result)
 res.json(result)
    }