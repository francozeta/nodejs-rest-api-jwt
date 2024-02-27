import { Router } from 'express';
import * as authCtrl from '../controllers/auth.controller.js';
import { verifySignup } from '../middlewares/'; 
const router = Router();

router.post('/signup',
  [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted],
  authCtrl.signup);
router.post('/signin', authCtrl.signin);


export default router;