import * as path from 'path';

import * as express from 'express';
import { Request, Response } from 'express';

const app: express.Express = express();

app.get('/index.js', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../dist/bundle.js'));
});

app.get('/**', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on :' + port);
});
