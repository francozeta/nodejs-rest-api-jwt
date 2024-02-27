import { Router } from 'express';
import * as authCtrl from '../controllers/auth.controller.js'
const router = Router();

router.post('/signup', authCtrl.signup);
router.post('/signin', authCtrl.signin);


export default router;