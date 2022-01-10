const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require('mongoose');
const url = "mongodb+srv://admin:admin@cluster0.vfeta.mongodb.net/bootcode?retryWrites=true&w=majority";
const userRoutes = require("./routes/User");
const publicationRoutes = require("./routes/Publication");

app.use(express.json());
<<<<<<< HEAD:index.js
app.use(cors());
=======
app.use(cors())
>>>>>>> 4089f12e680d3d8c90cb4cdb5ace1b70f98ca5ca:server.js

app.get('/', function (req, res) {
    res.send('API Bootcode')
  })
<<<<<<< HEAD:index.js
=======
  
>>>>>>> 4089f12e680d3d8c90cb4cdb5ace1b70f98ca5ca:server.js

app.use("/auth", userRoutes);
app.use("/publication", publicationRoutes);

mongoose.connect(url, {useUnifiedTopology: true,}).then(() => console.log("Connected to DB")).catch (console.error);

<<<<<<< HEAD:index.js
app.listen(process.env.PORT || 3000, () => console.log("Running on port 3000"))
=======
app.listen(process.env.PORT || 3000, () => console.log("Running on port 3000"))
>>>>>>> 4089f12e680d3d8c90cb4cdb5ace1b70f98ca5ca:server.js
