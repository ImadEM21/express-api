import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// coonection to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`Serveur en fonctionnemment sur le port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Listenting on port ${PORT}`);
});