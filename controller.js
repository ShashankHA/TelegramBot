const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000
const sample = require('./sample')

app.use(bodyParser.json());
app.post("/", function (req, res) {
  sample.sendMessage(req.body.message);
  res.send("message sent")
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})