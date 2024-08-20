import * as express from "express";
import {
  createToolTipConfig, getAllToolTipConfig, updateBulkToolTip,deleteToolTipConfig, ToolTipConfigById,updateToolTipConfig
} from "../controllers/ToopTipConfigController";

let router = express.Router();

router.put("/bulk", updateBulkToolTip);
router.get("/",getAllToolTipConfig);
router.post("/", createToolTipConfig);
router.get("/:id",ToolTipConfigById);
router.put("/:id", updateToolTipConfig);
router.delete("/:id", deleteToolTipConfig);


export = router;
