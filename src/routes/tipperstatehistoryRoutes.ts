import * as express from "express";
import {createtripStateHistory, getAlltripStateHistory,updateBulktripStateHistory,deletetruckstatehistory,truckstatehistoryById} from "../controllers/tipper_state_historyController"

let router = express.Router();

router.get("/", getAlltripStateHistory);
router.post("/", createtripStateHistory);
router.get("/:id", truckstatehistoryById);
router.put("/bulk", updateBulktripStateHistory);
router.delete("/:id", deletetruckstatehistory);


export = router;
