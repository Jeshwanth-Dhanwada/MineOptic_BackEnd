import * as express from "express";
import {
  createEqpType, getAllEqpType, updateEqpType,deleteEqpType, EqpTypeById
} from "../controllers/EqpTypeControllers";       
let router = express.Router();


router.get("/",getAllEqpType);
router.post("/", createEqpType);
router.get("/:id",EqpTypeById);
router.put("/:id", updateEqpType);
router.delete("/:id", deleteEqpType);


export = router;
