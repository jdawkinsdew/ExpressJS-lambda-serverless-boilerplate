import sls from 'serverless-http';
import app from '@/lib/app';

import routes from './routes';
app.use('/get-started', routes);

export const handler = sls(app);
