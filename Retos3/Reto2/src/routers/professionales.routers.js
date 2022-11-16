const {Router} = require ("express");
const router = Router();
const proCtrl = require ("../controller/professionales.controller");

router.get("/", proCtrl.getStart); 

router.get("/professionales", proCtrl.getPro);

// router.get("/professional/:id", proCtrl.getPro);

router.post("/professionales", proCtrl.postPro);

router.put("/professionales", proCtrl.putPro);

router.delete("/professionales", proCtrl.deletePro);

module.exports = router;