const express = require("express");
const path = require("path");
const app = express();

//setup static and middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
//    Adding to static assets
//    Server Side Rendering
// });

app.get("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("Server is listning on port 5000");
});
