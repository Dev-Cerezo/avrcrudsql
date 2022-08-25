import express from 'express';//importa el modulo express
import config from './config';

const app = express();//executa el modulo express para empesar a configurar el servidor

//settings para configurar el puerto
app.set('port', config.port)// si existe la variable port usala y si no la 3000

export default app;