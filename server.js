const express = require("express");
const path = require("path");

const app = express()
const PORT = process.env.PORT || 3001;

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(PORT, () => console.log("now listening on port", PORT));