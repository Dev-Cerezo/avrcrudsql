import { json } from 'express';
import {getConection} from '../database/conection'

export const getProducts = async(req, res) => {
   const pool = await getConection();
   const result = await pool.request().query('SELECT * FROM Products');
   console.log(result)
res.json(result.recordset);
};

export const createNewProduct = (req, res) => {
   const {Name, Description} = req.body
   let {Quantity} = req.body
   if (Name == null || Description == null) {
   return res.status(400).json({msg: 'Bad Request. please fill all fields'})
   }else{
    if (Quantity == null) {
        Quantity = 0;
        console.log(Name,Description,Quantity) 
    }else{
        console.log(Name,Description,Quantity)
    }
   }
   
    res.json('new product')
}