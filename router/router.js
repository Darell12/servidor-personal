import express from 'express';
const router = express.Router();


import { 
    calcular
} from '../controller/index.js';

router
    .route('/calcular/:result')
    .get(calcular)

export default router;
