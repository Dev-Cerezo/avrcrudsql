import express from 'express';//importa el modulo express
import config from './config';

import productsRoutes from './routes/products.routes'

const app = express();//executa el modulo express para empesar a configurar el servidor

//settings para configurar el puerto
app.set('port', config.port)// si existe la variable port usala y si no la 3000

//middlerawares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(productsRoutes)

export default app;