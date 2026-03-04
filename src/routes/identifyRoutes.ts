import { Router } from 'express';
import * as identifyController from '../controllers/identifyController';

const router = Router();

router.post('/identify', identifyController.identify);

export default router;
