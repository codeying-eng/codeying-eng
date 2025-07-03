const express = require("express");
const app = express();
const port = 3000; 
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.send("happy home");
});

app.get("/inbex", (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.get("/confused%20city", (req, res) => {
  res.sendFile(__dirname + "/index2.html")
});

app.get("/stupid%20city", (req, res) => {
  res.sendFile(__dirname + "/index3.html")
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
