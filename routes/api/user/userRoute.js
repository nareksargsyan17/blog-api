const router = require("express").Router();
const { changePassword } = require("../../../controllers/userController");
const checkingPass = require("../../../middleware/changePassMiddleware");
const upload = require("../../../config/imageConfig");
const {uploadImages} = require("../../../controllers/imageController");

router.put("/change_pass",  checkingPass, changePassword);
router.post("/upload", upload.single("image"), uploadImages);


module.exports = router;