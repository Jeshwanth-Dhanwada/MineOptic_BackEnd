import * as express from "express";
import {
  createDependemcyMaster, getAllDependencyMaster, updateBulkDependencyMaster,deleteDependencyMaster, DependencyMasterById
} from "../controllers/DependencyController";

let router = express.Router();

router.get("/",getAllDependencyMaster);
router.post("/", createDependemcyMaster);
router.get("/:id",DependencyMasterById);
router.put("/bulk", updateBulkDependencyMaster);
router.delete("/:id", deleteDependencyMaster);


export = router;
