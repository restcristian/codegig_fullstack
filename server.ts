import express, { Request, Response } from "express";
import handlebars from "handlebars";
import hbs from "express-handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";
import path from "path";
import db from "./config/db";

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
  .catch((err: Error) => console.log("error", err));

// Routes
app.get("/", (req: Request, res: Response) => {
  res.render("index", { layout: "landing" });
});

// Gig routes middleware
app.use("/gigs", require("./routes/gigs"));

//API route middleware

app.use("/api", require("./routes/api"));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
