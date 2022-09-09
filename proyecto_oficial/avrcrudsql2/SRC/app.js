import express from 'express';
import config from './config';
import servidoresRouter from './routes/servidores.routes'

const app = express();


app.set('port', config.port || 3000)
app.use(servidoresRouter)

export default app