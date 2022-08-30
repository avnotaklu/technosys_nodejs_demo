const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
var bodyParser = require('body-parser')


app.use(bodyParser.json());
//connecting to mongoDb
mongoose
    .connect(process.env.MONGODB_URL || "mongodb://localhost:27017/voip", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {
        //Middleware routes for /api path
        const authRoutes = require("./routes/auth_routes");
        app.use("/api", authRoutes);
        console.log("Successfully connected to the database");
    })
    .catch((err) => {
        console.log("Could not connect to the database. Error...", err);
        process.exit();
    });

app.get("/", (req, res) => {
    res.json({
        message: "Voip server is up and running",
    });
});

const port = process.env.PORT || 8080;

let server = app.listen(port, "0.0.0.0", () => {
    console.log(`Voip Server is listening on port ${port}`);
});