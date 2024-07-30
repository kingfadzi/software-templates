import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// Middleware to parse request bodies
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// RESTful endpoint that handles form submissions
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log('Form Data:', formData);
    res.json({ message: 'Form received', formData });
});

// Readiness probe endpoint
app.get('/readyz', (req, res) => {
    // Add logic here to determine if the server is ready
    res.status(200).send('OK');
});

// Liveness probe endpoint
app.get('/healthyz', (req, res) => {
    // Add logic here to determine if the server is alive
    res.status(200).send('OK');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
