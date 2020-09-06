const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", { title: "RP WOLFIT" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

app.get("/pricing", (req, res) => {
  res.render("pricing", { title: "Pricing" });
});

app.get("/blog", (req, res) => {
  res.render("blog", { title: "Blog" });
});

app.get("/blog-single", (req, res) => {
  res.render("blog-single", { title: "Blog-Single" });
});

app.get("/classes", (req, res) => {
  res.render("classes", { title: "Classes" });
});

app.get("/form", (req, res) => {
  res.render("trainer", { title: "Form" });
});

app.listen(3000, (req, res) => {
  console.log("Server started at port 3000");
});
