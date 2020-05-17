import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";
import Gig from "../../models/Gig";
import User from "../../models/User";
import { requiresAuth } from "../../middlewares";
import Sequelize from "sequelize";
import bcrypt from "bcrypt";
import { ExtendedRequest } from "../../types";

const router = Router();
const { Op } = Sequelize;

const { PRIVATE_KEY } = process.env;

//Get gig list
router.get(
  "/gigs",
  requiresAuth,
  async (req: ExtendedRequest, res: Response) => {
    try {
      jwt.verify(
        req.token as string,
        PRIVATE_KEY as string,
        async (err, decoded) => {
          if (err) {
            res.status(401).send([]);
          } else {
            const gigs = await Gig.findAll();
            res.send(gigs);
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
);

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

// Authentication

router.post("/auth/signup", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const users = await User.findAll({
      where: {
        username: {
          [Op.eq]: username,
        },
      },
    });
    if (users.length > 0) {
      res.status(500).send({
        status: "user already exists",
      });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      password: hashedPassword,
    });

    res.send({
      status: "SUCCESS",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "FAILED",
    });
  }
});

router.post("/auth/signin", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        username: {
          [Op.eq]: username,
        },
      },
    });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        { username, password: user.password },
        PRIVATE_KEY as string
      );

      res.send({ username, token, error: "" });
    } else {
      res.send({
        error: "invalid credentials",
      });
    }
    console.log(user);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

module.exports = router;
