const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

const mainRouter = require("./routes/main-routes");  
app.use(mainRouter);
app.get("/", (req, res) => {
  res.redirect("/");
});
app.use(notFound);

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
