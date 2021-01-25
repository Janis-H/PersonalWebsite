const express = require('express');
const path = require("path");

const app = express();
const PORT = 3000;

// server static files
app.use(express.static("public"));

// if mode is not in development, serve html file
if (process.env.NODE_ENV === 'production') {
  app.use("/", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));
}

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
