const express = require("express");
const{registerUser} = require("../controllers/userControllers");
const{authUser} = require("../controllers/userControllers");
const {protect} = require("../middleware/authMiddleware");
const {allUsers} = require("../controllers/userControllers");

const router = express.Router();

router.get("/",protect, allUsers);
router.post("/signup",registerUser);
router.post("/login",authUser);
// router.get("/test",(req, res)=>{
//     res.send("Tested");
// })

module.exports = router;