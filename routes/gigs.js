const { Router } = require("express");
const router = Router();
const db = require("../config/db");
const Gig = require("../models/Gig");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//Get gig list
router.get("/", async (req, res) => {
  try {
    const gigs = await Gig.findAll();
    res.render("gigs", { gigs });
  } catch (err) {
    console.log(err);
  }
});

// display add gig form

router.get("/add", (req, res) => {
  res.render("add");
});

// Add a gig

router.post("/add", async (req, res) => {
  let { budget, contact_email, description, technologies, title } = req.body;
  let errors = [];

  if (!title) {
    errors.push({
      text: "please add a title",
    });
  }
  if (!technologies) {
    errors.push({
      text: "please add some technologies",
    });
  }
  if (!description) {
    errors.push({
      text: "please add a description",
    });
  }
  if (!contact_email) {
    errors.push({
      text: "please add a contact email",
    });
  }

  // Check for errors

  if (errors.length > 0) {
    res.render("add", {
      errors,
      budget,
      contact_email,
      description,
      technologies,
      title,
    });
  } else {
    if (!budget) {
      budget = "Unknown";
    } else {
      budget = `$${budget}`;
    }
    technologies = technologies.toLowerCase().replace(/,\s+/g, ",");
    // Insert
    try {
      const gig = await Gig.create({
        title,
        technologies,
        budget,
        description,
        contact_email,
      });
      res.redirect("/gigs");
    } catch (err) {
      console.log(err);
    }
  }
});

// search for gigs

router.get("/search", async (req, res) => {
  let { term } = req.query;

  term = term.toLowerCase();

  try {
    const gigs = await Gig.findAll({
      where: {
        technologies: {
          [Op.like]: "%" + term + "%",
        },
      },
    });

    res.render("gigs", {
      gigs,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
