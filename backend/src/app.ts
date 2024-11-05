import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import recordRoutes from './routes/recordRoutes';

const app = express();
const PORT = 8080;
const MONGO_URI = 'mongodb://mongo:27017/fullstack-app';

app.use(cors());
app.use(bodyParser.json());
app.use('/api/records', recordRoutes);

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
