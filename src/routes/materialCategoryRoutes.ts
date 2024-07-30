import * as express from "express";
import {
  createMaterialCategory, getAllMaterialCategory, updateMaterialCategory,deleteMaterialCategory, materialCategoryById
} from "../controllers/materialCategoryController";

let router = express.Router();

router.get("/",getAllMaterialCategory);
router.post("/", createMaterialCategory);
router.get("/:id",materialCategoryById);
router.put("/:id", updateMaterialCategory);
router.delete("/:id", deleteMaterialCategory);


export = router;
