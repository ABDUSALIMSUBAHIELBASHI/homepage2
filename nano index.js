const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express(); // 1. Create the app first!
const PORT = 5000;

app.use(cors());
app.use(express.json());

// 2. Connect to MongoDB
const MONGO_URI = "mongodb://localhost:27017/faycelmohmedahmed";

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("✅ Successfully connected to MongoDB: faycelmohmedahmed");
    })
    .catch((err) => {
        console.log("❌ MongoDB Connection Error: ", err);
    });

// 3. Simple Route
app.get('/', (req, res) => {
    res.send("Server is alive!");
});

// 4. Finally, start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});