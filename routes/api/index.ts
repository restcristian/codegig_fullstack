import { Router, Request, Response } from "express";
import Gig from "../../models/Gig";
import Sequelize from "sequelize";

const router = Router();
const { Op } = Sequelize;

//Get gig list
router.get("/gigs", async (req: Request, res: Response) => {
  try {
    const gigs = await Gig.findAll();
    res.send(gigs);
  } catch (err) {
    console.log(err);
  }
});

// Add a gig
router.post("/gigs/add", async (req: Request, res: Response) => {
  let { budget, email, description, technologies, title } = req.body;
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
  if (!email) {
    errors.push({
      text: "please add a contact email",
    });
  }

  // Check for errors
  if (errors.length > 0) {
    res.send({
      errors,
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
      await Gig.create({
        title,
        technologies,
        budget,
        description,
        email,
      });
      res.send({
        title,
        technologies,
        budget,
        description,
        email,
      });
    } catch (err) {
      console.log(err);
    }
  }
});

// Search for gigs

router.post("/gigs/search", async (req: Request, res: Response) => {
  let { term } = req.body;

  term = (term as string).toLowerCase();

  try {
    const gigs = await Gig.findAll({
      where: {
        technologies: {
          [Op.like]: "%" + term + "%",
        },
      },
    });

    res.send(gigs);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
