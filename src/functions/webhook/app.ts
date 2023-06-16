import express from 'express';

import { webhook } from '@/middleware';

import bodyParser from 'body-parser';
import { customDomainAdaptorMiddleware } from '@/lib/app';

export const app = express();
app.use(customDomainAdaptorMiddleware);

app.post('/webhook', bodyParser.raw({ type: 'application/json' }), webhook);
