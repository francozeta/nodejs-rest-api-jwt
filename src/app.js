import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';

import { createRoles } from './libs/initialSetup.js'

import productsRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';
import usersRoutes from './routes/user.routes.js';

const app = express();
createRoles();

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

app.use('/api/products', productsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
export default app;