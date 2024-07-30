import * as express from "express";
import {createtripHistory, getAlltripHistory,updateBulktripHistory,deletetruckhistory,truckhistoryById} from "../controllers/tipperhistoryControllers"

let router = express.Router();

router.get("/", getAlltripHistory);
router.post("/", createtripHistory);
router.get("/:id", truckhistoryById);
router.put("/bulk", updateBulktripHistory);
router.delete("/:id", deletetruckhistory);


export = router;
