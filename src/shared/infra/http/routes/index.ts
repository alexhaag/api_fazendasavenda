import { Router } from 'express';
import { imoveisRouter } from './imoveis.routes';

const router = Router();

router.use('/imoveis', imoveisRouter);

export { router }
