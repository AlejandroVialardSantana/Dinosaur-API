const express = require('express');
const app = express();

const config = require('./config');

const port = config.PORT;

const dinosaurRouter = require('./routes/dinosaurRoutes');

app.use(express.json());
app.use('/api', dinosaurRouter);

app.use((req, res, next) => {
    res.status(404).send({ status: 404, message: "Resource not found" });
});

app.listen(port, () => console.log(`Server listening on port ${port}...`));