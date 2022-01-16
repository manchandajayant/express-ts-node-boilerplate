import express from 'express';
import { User } from '../controllers/user';
const router = express.Router();

const user: any = new User();
router.get('/user', user.getUserReq);

export default router;
