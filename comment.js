// Create web server
// 1. Create a web server
// 2. Import express module
// 3. Create express object
// 4. Start web server

// 1. Create a web server
// 2. Import express module
const express = require('express');

// 3. Create express object
const app = express();

// 4. Start web server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});