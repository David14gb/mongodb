const {Router} = require ("express")
const router = Router();
const movieCtrl = require("../controller/pelicula.controller")

router.get("/pe", movieCtrl.getStart);
router.get("/peliculas", movieCtrl.getMovie);
router.post("/peliculas", movieCtrl.postMovie);
router.put("/peliculas", movieCtrl.putMovie);
router.delete("/peliculas", movieCtrl.deleteMovie);
router.get("/peliculas/actor", movieCtrl.getActor);
// router.get("/peliculas/director", movieCtrl.getDirector);
// router.get("/peliculas/guionista", movieCtrl.getGuionista);
// router.get("/peliculas/productora", movieCtrl.getProductora);
router.post("/peliculas/actor", movieCtrl.postActor);
// router.post("/peliculas/director", movieCtrl.postDirector);
// router.post("/peliculas/guionista", movieCtrl.postGuionista);
// router.delete("/peliculas/actor", movieCtrl.deleteActor);
// router.delete("/peliculas/director", movieCtrl.deleteDirector);
// router.delete("/peliculas/guinista", movieCtrl.deleteGuionista);



module.exports = router; 