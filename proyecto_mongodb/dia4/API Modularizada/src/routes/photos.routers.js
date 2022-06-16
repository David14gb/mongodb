const {Router} = require ("express")
const router = Router();
const photCtrl = require("../controller/photos.controller")

router.get("/", photCtrl.getStart);
router.get("/photos", photCtrl.getPhotos);
router.post("/photos", photCtrl.postPhotos);
router.put("/photos", photCtrl.putPhotos);
router.delete("/photos", photCtrl.deletePhotos);


module.exports = router; 