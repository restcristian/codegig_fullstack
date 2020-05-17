import { Response, NextFunction } from "express";
import { ExtendedRequest } from "../types";
const { PRIVATE_KEY } = process.env;

export const requiresAuth = (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  const bearerToken = req.headers["authorization"];

  if (typeof bearerToken !== "undefined") {
    const token = bearerToken.split(" ")[1];
    req.token = token;
    next();
  } else {
    res.status(401);
  }
};
