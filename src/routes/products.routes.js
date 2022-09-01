//este archivo tiene las url's para los metodos consulta de la bd, al visitarlas estas rutas las funciones a ejecutarse estaran en el archivo controllers 

import {Router} from 'express' //permite generar urls
import { createNewProduct, getProducts, getProductById, deleteProductById, getTotalProducts, updateProductById} from '../controllers/products.controller';

const router = Router(); //instaciamos

router.get('/products', getProducts)
router.post('/products', createNewProduct)
router.get('/products/count', getTotalProducts)
router.get('/products/:id', getProductById)
router.delete('/products/:id', deleteProductById)
router.put('/products/:id', updateProductById)


export default router

