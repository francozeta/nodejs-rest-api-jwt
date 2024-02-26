import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json'
import productsRoutes from './routes/products.routes.js';
const app = express();

app.set('pkg', pkg);

app.use(express.json()); /* configura el middleware que analiza las solicitudes entrantes con cuerpo en formato JSON. */

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({
    name: app.get('pkg').name,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  });
});

app.use('/products', productsRoutes);

export default app;