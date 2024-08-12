const express = require('express');
const cors = require('cors');
const connection = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.get('/api/banner', (req, res) => {
    connection.query('SELECT * FROM banner_settings LIMIT 1', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error fetching banner data' });
        } else {
            res.json(results[0] || { isVisible: false, description: '', timer: 0, link: '' });
        }
    });
});

app.post('/api/banner', (req, res) => {
    const { isVisible, description, timer, link } = req.body;
    connection.query(
        'INSERT INTO banner_settings (isVisible, description, timer, link) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE isVisible = VALUES(isVisible), description = VALUES(description), timer = VALUES(timer), link = VALUES(link)',
        [isVisible, description, timer, link],
        (err) => {
            if (err) {
                res.status(500).json({ error: 'Error updating banner data' });
            } else {
                res.json({ success: true });
            }
        }
    );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
