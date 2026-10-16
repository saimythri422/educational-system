const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const courseRoutes = require('./routes/courseRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files if needed
app.use(express.static(path.join(__dirname, '..')));

// Health Check API
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        project: 'Mythri Educational Institute - Full Stack System',
        timestamp: new Date().toISOString()
    });
});

// API Routes
app.use('/api/courses', courseRoutes);
app.use('/api/enquiries', enquiryRoutes);

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'educationalsystem.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`🚀 Educational Server running on http://localhost:${PORT}`);
    console.log(`📚 Courses API:   http://localhost:${PORT}/api/courses`);
    console.log(`📝 Enquiries API: http://localhost:${PORT}/api/enquiries`);
    console.log(`❤️  Health Check:  http://localhost:${PORT}/api/health`);
    console.log(`====================================================`);
});

module.exports = app;
