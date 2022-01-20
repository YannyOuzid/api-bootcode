require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require('mongoose');
const url = process.env.DB_URL
const userRoutes = require("./routes/User");
const publicationRoutes = require("./routes/Publication");
const contactRoutes = require("./routes/Contact");

app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send('API Bootcode')
})

app.use("/auth", userRoutes);
app.use("/publication", publicationRoutes);
app.use("/contact", contactRoutes);

mongoose.connect(url, {useUnifiedTopology: true,}).then(() => console.log("Connected to DB")).catch (console.error);

app.listen(process.env.PORT || 3000, () => console.log("Running on port 3000"))
