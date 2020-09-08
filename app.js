const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

const supplyData = [
  {
    id: 0,
    imgURI: "images/products/supply/prod1.jpeg",
    product: "Creatine",
    name: "AM NUTRITION MICRONISED CREATINE MONOHYDRATE CREA-8",
    price: "₹599.00",
    company: "AMNutrition",
  },
  {
    id: 1,
    imgURI: "images/products/supply/prod2.jpeg",
    product: "Muscle Gainer",
    name: "AM NUTRITION 8EIGHT LEAN MUSCLE GAINER - DUTCH CHOCOLATE",
    price: "₹2199.00",
    company: "AMNutrition",
  },
  {
    id: 2,
    imgURI: "images/products/supply/prod3.jpeg",
    product: "Whey Protien",
    name: "AM NUTRITION 100% RAGE WHEY 2KG",
    price: "₹3899.00",
    company: "AMNutrition",
  },
  {
    id: 3,
    imgURI: "images/products/supply/prod4.jpeg",
    product: "BCAA",
    name: "AM NUTRITION MATRIXX BCAA 30 SERVINGS",
    price: "₹1999.00",
    company: "AMNutrition",
  },
  {
    id: 4,
    imgURI: "images/products/supply/prod5.jpeg",
    product: "Weight Gainer",
    name: "AM NUTRITION NITROFLEXX WEIGHT GAINER - DUTCH CHOCOLATE 2KG",
    price: "₹1,899.00",
    company: "AMNutrition",
  },
  {
    id: 5,
    imgURI: "images/products/supply/prod6.jpeg",
    product: "Gym Equipment",
    name: "TRANSFORMER MULTI-FUNCTIONAL GYM EQUIPMENT",
    price: "Contact Us",
    company: "RPWOLFIT",
  },
  {
    id: 6,
    imgURI: "images/products/supply/prod7.jpeg",
    product: "Gym Equipment",
    name: "FQ BEAST TOTAL BODY TRAINING HOME GYM EQUIPMENT",
    price: "Contact Us",
    company: "RPWOLFIT",
  },
  {
    id: 7,
    imgURI: "images/products/supply/prod8.jpeg",
    product: "Gym Equipment",
    name: "Transformer 2 Multi-Functional Gym Equipment",
    price: "Contact Us",
    company: "RPWOLFIT",
  },
  {
    id: 9,
    imgURI: "images/products/supply/prod9.jpeg",
    product: "Gym Equipment",
    name: "4 in 1 Home Gym Bench",
    price: "Contact Us",
    company: "RPWOLFIT",
  },
  {
    id: 10,
    imgURI: "images/products/supply/prod10.jpeg",
    product: "Gym Equipment",
    name: "4 in 1 Commercial Gym Bench",
    price: "Contact Us",
    company: "RPWOLFIT",
  },
  {
    id: 11,
    imgURI: "images/products/supply/prod11.jpeg",
    product: "Gym Equipment",
    name: "Commercial Spinning Bike",
    price: "Contact Us",
    company: "RPWOLFIT",
  },
  {
    id: 12,
    imgURI: "images/products/supply/prod12.jpeg",
    product: "Gym Equipment",
    name: "Home Spinning Bike",
    price: "Contact Us",
    company: "RPWOLFIT",
  },
];

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

app.get("/shop", (req, res) => {
  res.render("shop", { title: "Shop", supplyData: supplyData });
});

app.get("/privacy", (req, res) => {
  res.render("privacy", { title: "Privacy Policy" });
});

app.get("/blog-single", (req, res) => {
  res.render("blog-single", { title: "Covid Blog" });
});

app.get("/courses", (req, res) => {
  res.render("courses", { title: "Courses" });
});

app.get("/form", (req, res) => {
  res.render("trainer", { title: "Form" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
