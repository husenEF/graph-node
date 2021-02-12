const { User } = require("../../database/models");
const jwt = require("jsonwebtoken");
const { AuthenticationError } = require("apollo-server-express");

const verifyToken = async (token) => {
  console.log({ token });
  try {
    if (!token) return null;
    const tokens = token.split(" ");

    // console.log({ tokens });
    const decoded = await jwt.verify(tokens[1], "mySecret");
    // console.log({ decoded });
    const { id } = decoded;
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    // console.log({ error });
    throw new AuthenticationError(error.message);
  }
};

module.exports = async ({ req }) => {
  const token = (req.headers && req.headers.authorization) || "";
  const user = await verifyToken(token);
  return { user };
};
