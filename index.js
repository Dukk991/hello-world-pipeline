const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Hello World from Pipeline");
});

app.get('/', (req, res) => {
  res.send("Update_1");
});

app.listen(port, () => {
  console.log("Running");
});
