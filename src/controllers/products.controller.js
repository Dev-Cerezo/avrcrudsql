import { json, query } from 'express';
import { restart } from 'nodemon';
import {getConection,sql,queries} from '../database' //importamos la conexion


export const getProducts = async(req, res) => {
   try {
    const pool = await getConection(); //retorna el pool con su metodo request seguido del metodo query
   const result = await pool.request().query(queries.getAllProduct);//request es hago una peticion, y query es que la peticion es una consulta query
 //  console.log(result) ademas result tiene una propiedad recordset que tiene toda lainfo de la consulta
res.json(result.recordset);
   } catch (error) {
    res.status(500)
    res.send(error.message)
   }
};

export const createNewProduct = async(req, res) => {
   const {Name, Description} = req.body
   let {Quantity} = req.body
   if (Name == null || Description == null) {
   return res.status(400).json({msg: 'Bad Request. please fill all fields'})
   }
    if (Quantity == null) Quantity = 0;

  try {
    const pool = await getConection();
    await pool.request()
    .input('name', sql.VarChar, Name)
    .input('description', sql.Text, Description)
    .input('quantity', sql.Int, Quantity)
   
   .query(queries.addNewProduct);
    
     res.json({Name, Description, Quantity})
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
};

export const getProductById = async (req, res) =>{ 
const{ id } = req.params

const pool = await getConection();
const result = await pool.request()
.input('id', id)
.query(queries.getProductById)
console.log(result);
res.send(result.recordset[0])
}

export const deleteProductById = async (req, res) =>{ 
  const{ id } = req.params
  
  const pool = await getConection();
  const result = await pool.request()
  .input('id', id)
  .query(queries.deleteProduct)
  console.log(result);
  res.sendStatus(204);
  }

  export const getTotalProducts = async (req, res) =>{ 
    
    const pool = await getConection();
    const result = await pool
    .request()
    .query(queries.getTotalProducts)

    res.json(result.recordset[0]['']);
    };

    export const updateProductById = async (req, res) =>{
      const {Name, Description, Quantity} = req.body;
      const { id } = req.params;

      if ((Name == null || Description == null || Quantity === null)) {
        return res.status(400).json({msg: "Bad Request. Please Fill all Fields"})
      }

  const pool = await getConection()
  await pool
  .request()
  .input('name', sql.VarChar, Name)
  .input("description", sql.Text, Description)
  .input("quantity", sql.Int, Quantity)
  .input('id', sql.Int, id)
  .query(queries.updateProductById)

  res.json({Name,Description,Quantity})
    }

