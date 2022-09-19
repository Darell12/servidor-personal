import express from 'express';
const router = express.Router();


import { 
    home,
    operacion,
    saludo,
    calcular
} from '../controller/index.js';

router
    .route('/home')
    .get(home)

router
    .route('/operacion/:numero') // Recibir parametros
    .get(operacion)

router
    .route('/saludo/:nombre') // Recibir parametros
    .get(saludo)

router
    .route('/calcular/:result')
    .get(calcular)

export default router;