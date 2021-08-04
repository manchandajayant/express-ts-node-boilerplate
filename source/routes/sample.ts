import express from 'express';
import controller from '../controllers/sample';
const router = express.Router();

router.get('/sample', controller.sampleReq);

export = router;
