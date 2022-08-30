const dotenv = require("dotenv").config();

exports.echo = async (req, res) => {
  return res.status(500).json({ echo: req.body });
};
