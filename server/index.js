import express from 'express';
import cors from 'cors';
import { Connection } from './database/db.js';
import route from './routes/routes.js'

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', route)

const PORT = 3000;
Connection();
app.listen(PORT, () => console.log('Server listening on port: ' + PORT));