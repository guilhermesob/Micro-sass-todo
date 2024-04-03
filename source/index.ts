import express from 'express';
import { listUsersController } from './controllers/user.controller';

const app = express();
const port = 3000;

app.get ('/users', listUsersController)

app.listen(port, () => {
    console.log(`Serves is running on http://localhost:${port}`);
});
