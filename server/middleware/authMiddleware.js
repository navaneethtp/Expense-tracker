import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];
  if (!token)
    return res.status(401).json({ message: "Not authorized, no token" });
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decode.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not founded" });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};
