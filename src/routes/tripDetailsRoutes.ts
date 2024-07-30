import * as express from "express";
import {createtripDetails, getAlltripDetails,updateBulktripDetails,deletetruckDetails,truckDetailsById} from "../controllers/tripDetailsControllers"

let router = express.Router();

router.get("/", getAlltripDetails);
router.post("/", createtripDetails);
router.get("/:id", truckDetailsById);
router.put("/bulk", updateBulktripDetails);
router.delete("/:id", deletetruckDetails);


export = router;
