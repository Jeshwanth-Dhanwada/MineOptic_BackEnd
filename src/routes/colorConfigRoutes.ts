import * as express from "express";
import {
  createColorConfig, getAllColorConfig, updateColorConfig,deleteColorConfig, ColorConfigById,getColumnNamesFromTipperStateHistory,updateBulkColorConfig
} from "../controllers/ColorConfigControllers";

let router = express.Router();

router.put("/bulk", updateBulkColorConfig);
router.get("/",getAllColorConfig);
router.get("/tables",getColumnNamesFromTipperStateHistory);
router.post("/", createColorConfig);
router.get("/:id",ColorConfigById);
router.put("/:id", updateColorConfig);
router.delete("/:id", deleteColorConfig);


export = router;
