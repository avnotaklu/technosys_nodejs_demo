const { echo } = require("../controllers/auth_controller");
const router = require("express").Router();

router.post("/echo", echo);
module.exports = router;
