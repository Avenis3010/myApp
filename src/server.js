const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const message = process.env.APP_MESSAGE || "Hello from myapp!";
app.get('/', (_, res) => res.send({ ok: true, message }));
app.listen(port, () => console.log(`myapp listening on ${port}`));
