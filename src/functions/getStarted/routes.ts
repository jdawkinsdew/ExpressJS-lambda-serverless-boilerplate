import express from 'express';

import { welcome } from '@/middleware';

const router = express.Router();

router.get('/', welcome);

export default router;
