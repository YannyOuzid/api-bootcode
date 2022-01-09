const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require('mongoose');
const url = "mongodb+srv://admin:admin@cluster0.vfeta.mongodb.net/bootcode?retryWrites=true&w=majority";
const userRoutes = require("./routes/User");
const publicationRoutes = require("./routes/Publication");

app.use(express.json());
app.use(cors())

app.get('/', function (req, res) {
    res.send('API Bootcode')
  })
  

app.use("/auth", userRoutes);
app.use("/publication", publicationRoutes);

mongoose.connect(url, {useUnifiedTopology: true,}).then(() => console.log("Connected to DB")).catch (console.error);

app.listen(process.env.PORT || 3000, () => console.log("Running on port 3000"))
