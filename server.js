const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('./config');
const authRoutes = require('./routes/admin');
const newsRoutes = require('./routes/news');
const analyticsRoutes = require('./routes/analytics');

mongoose.connect(config.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api/admin', authRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/analytics', analyticsRoutes);

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});
