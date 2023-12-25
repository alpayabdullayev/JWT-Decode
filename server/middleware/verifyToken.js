import jwt from "jsonwebtoken";

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decodeToken = jwt.verify(token, process.env.JWT_SECRETKEY);
    if (decode.role === "admin") {
      res.userData = { userId: decodeToken.userId };
      next();
    }
  } catch (error) {
    res.status(401).json({ message: error });
  }
};
