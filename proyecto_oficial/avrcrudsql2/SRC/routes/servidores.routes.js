import { Router } from "express";
import { getServidores } from "../controllers/servidores.controllers";
const router = Router()

router.get('/servidores', getServidores) //mostrar los servidores

router.post('/servidores', getServidores)//agregar registros de servidores 

router.delete('/servidores', getServidores)//eliminar registros de servidores

router.put('/servidores', getServidores)//actualizar un registro de get product

router.get('/servidores', getServidores)//obtener un servidor por id

export default router;