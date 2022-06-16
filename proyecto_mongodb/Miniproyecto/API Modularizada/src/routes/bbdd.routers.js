const {Router} = require ("express")
const router = Router();
const bbddCtrl = require("../controller/bbdd.cotroller")

router.get("/", bbddCtrl.getStart);
router.get("/profesionales", bbddCtrl.getProfes);
router.post("/profesionales", bbddCtrl.postProfes);
router.put("/profesionales", bbddCtrl.putProfes);
router.delete("/profesionales", bbddCtrl.deleteProfes);


module.exports = router; 