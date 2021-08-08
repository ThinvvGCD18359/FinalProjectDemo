const express = require("express");
const cors = require("cors");
const authMiddleware = require("./auth-middleware");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());


app.use("/", authMiddleware);

app.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

app.listen(3000, () => console.log("The server is running at PORT 3000"));