import express from 'express';
const router = express.Router();


import { 
    login,
    registro,
    pass
} from '../controller/index.js';

router
    .route('/login')
    .get(login)

router
    .route('/regist')
    .get(registro)

router
    .route('/recovery')
    .get(pass)
export default router;
