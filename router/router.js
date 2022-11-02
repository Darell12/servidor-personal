import express from 'express';
const router = express.Router();


import { 
    login,
    registro,
    pass,
    recepcion,
    respuesta
} from '../controller/index.js';

router
    .route('/login')
    .get(login)

router
    .route('/registro')
    .get(registro)

router
    .route('/olvide-pass')
    .get(pass)

router
   .route('/recepcion/:param')
   .get(recepcion)
router
   .route('/respuesta')
   .get(respuesta)
export default router;
