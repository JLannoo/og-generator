// Create express server
import express from 'express';
const app = express();

// Routes config
import apiRoutes from './routes/api.routes';
app.use('/api', apiRoutes);

app.use('/', express.static('src/public'));

// Start server
const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => {
	console.log('App listening on port ' + PORT);
});