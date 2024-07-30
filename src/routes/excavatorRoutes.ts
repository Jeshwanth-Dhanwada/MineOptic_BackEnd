import * as express from "express";
import {createExcavatorHistory, getAllExcavatorHistory,updateBulkExcavatorHistory,deleteExcavatorHistory,ExcavatorHistoryById} from "../controllers/excavatorhistoryControllers"

let router = express.Router();

router.get("/", getAllExcavatorHistory);
router.post("/", createExcavatorHistory);
router.get("/:id", ExcavatorHistoryById);
router.put("/bulk", updateBulkExcavatorHistory);
router.delete("/:id", deleteExcavatorHistory);


export = router;
