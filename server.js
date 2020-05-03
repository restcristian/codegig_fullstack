const express = require("express");
const handlebars = require("handlebars");
const hbs = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const path = require("path");
const db = require("./config/db");

const app = express();

// Handlebars

app.engine(
  "handlebars",
  hbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

// Testing database
db.authenticate()
  .then(() => console.log("database connected"))
  .catch((err) => console.log("error", err));

app.get("/", (req, res) => {
  res.render("index", { layout: "landing" });
});

// Gig routes
app.use("/gigs", require("./routes/gigs"));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
