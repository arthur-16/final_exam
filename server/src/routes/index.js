import { Router } from 'express';
import movieRouter from './movies';

let router = Router();

router.use('/movies', movieRouter);

export default router;