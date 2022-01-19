const jwt = require("jsonwebtoken");

const generateToken = (data) => {
  const token = jwt.sign(
    { data },
    "One of my friend is looking for job change in Graphic designing. He has 2 years of experience in graphic designing and he can join immediately.",
    { expiresIn: "1h" }
  );
  return token;
};

module.exports = { generateToken };
