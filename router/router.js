import express from 'express';
const router = express.Router();


import { 
    login,
    registro,
    pass,
    recepcion
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
export default router;
