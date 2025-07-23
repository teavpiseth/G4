const { errorResponse } = require("../helper/response");
const { getSecretKeyJWT } = require("../helper/const");
const jwt = require("jsonwebtoken");

function getAssessToken(authorization) {
  return authorization.split(" ")[1];
}
function authorization(req, res, next) {
  if (req.url.includes("/web-site/")) {
    return next();
  }
  if (req.headers?.authorization) {
    const token = getAssessToken(req.headers.authorization);
    try {
      const result = jwt.verify(token, getSecretKeyJWT());
      if (result) {
        next();
      } else {
        return res.status(401).json(errorResponse("unauthorized", 401));
      }
    } catch (err) {
      return res.status(401).json(errorResponse("unauthorized", 401));
    }
  } else {
    return res.status(401).json(errorResponse("unauthorized", 401));
  }
}

module.exports = authorization;
