import jwt from "jsonwebtoken";

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decodeToken = jwt.verify(token, process.env.JWT_SECRETKEY);
    if (decodeToken.role === "admin") {
      res.userData = { userId: decodeToken.userId };
      next();
    } else {
      res.status(403).json({ message: " Not an admin" });
    }
  } catch (error) {
    res.status(401).json({ message: " Invalid token" });
  }
};
