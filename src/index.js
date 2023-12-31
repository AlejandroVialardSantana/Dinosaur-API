const express = require('express');
const app = express();
const cors = require('cors');

const config = require('./config');

const port = config.PORT;

const dinosaurRouter = require('./routes/dinosaurRoutes');
const imageMiddleware = require('./controllers/imageController');

app.use(cors({
    origin: config.CORS_ORIGIN,
    methods: ['GET'],
    optionsSuccessStatus: 200
}));
app.use(express.json());

app.use(express.static('public'));

app.use('/api', dinosaurRouter);

app.use('/uploads', imageMiddleware);

app.use((req, res, next) => {
    res.status(404).send({ status: 404, message: "Resource not found" });
});

app.listen(port, () => console.log(`Server listening on port ${port}...`));