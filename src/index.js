const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const dinosaurRouter = require('./routes/dinosaurRoutes');

app.use(express.json());
app.use('/', dinosaurRouter);

app.listen(port, () => console.log(`Server listening on port ${port}...`));