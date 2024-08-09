import * as express from "express";
import {createExcavatorStateHistory, getAllExcavatorStateHistory,updateBulkExcavatorStateHistory,deleteExcavatorStateHistory,ExcavatorStateHistoryById} from "../controllers/excavatorStateHistoryController"

let router = express.Router();

router.get("/", getAllExcavatorStateHistory);
router.post("/", createExcavatorStateHistory);
router.get("/:id", ExcavatorStateHistoryById);
router.put("/bulk", updateBulkExcavatorStateHistory);
router.delete("/:id", deleteExcavatorStateHistory);


export = router;
