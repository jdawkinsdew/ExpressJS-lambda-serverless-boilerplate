import express, { RequestHandler } from 'express';

import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

// Use this if req.path is different between default API Gateway domain and custom domain
export const customDomainAdaptorMiddleware: RequestHandler = (req, _, next) => {
  if (!!req.headers['x-amzn-trace-id']) {
    req.url = '/' + req.url.split('/').slice(2).join('/');
  }
  next();
};
// app.use(customDomainAdaptorMiddleware);

app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(helmet());
app.use(cors());

export default app;
