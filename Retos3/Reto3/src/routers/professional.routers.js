const {Router} = require ("express");
const router = Router();
const proCtrl = require ("../controller/professional.controller");

router.get("/", proCtrl.getStart); 

router.get("/professional", proCtrl.getPro);

// router.get("/professional/:id", proCtrl.getPro);

router.post("/professional", proCtrl.postPro);

router.put("/professional", proCtrl.putPro);

router.delete("/professional", proCtrl.deletePro);

module.exports = router;