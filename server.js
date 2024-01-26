const express = require('express');
const app = express();

app.use(express.json());

// Import user routes
const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
