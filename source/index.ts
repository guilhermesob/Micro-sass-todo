import express from 'express';
import { findOneUserController, listUserController } from './controllers/user.controller';

const app = express();
const port = 3000;

app.use(express.json())

app.get ('/users', listUserController)
app.post ('/users', createUserController)
app.get ('/user/:userId', findOneUserController)

app.listen(port, () => {
    console.log(`Serves is running on http://localhost:${port}`);
});
