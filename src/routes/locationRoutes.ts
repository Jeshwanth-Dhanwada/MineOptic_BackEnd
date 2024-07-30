import * as express from "express";
import {
  createLocations, getAllLocations,deleteLocations, LocationsById
} from "../controllers/locationController";

let router = express.Router();

router.get("/",getAllLocations);
router.post("/", createLocations);
router.get("/:id",deleteLocations);
// router.put("/:id", updateBreaks);
router.delete("/:id", LocationsById);


export = router;
