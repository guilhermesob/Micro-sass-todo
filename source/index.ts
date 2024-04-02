import express from 'express';

const app = express();
const port = 3000;

app.get ('/users', listUserscontroller)
app.listen(port, () => {
    console.log(`Serves is running on http://localhost:${port}`);
});
