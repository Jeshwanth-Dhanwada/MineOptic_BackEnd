import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { location } from "../entity/location";


const locationSchema = Joi.object({

          location_name: Joi.string().allow(null,''),
          location_type: Joi.string().allow(null,''),
          active: Joi.boolean().allow(null,''),
          description: Joi.string().allow(null,''),
          material_id: Joi.string().allow(null,''),
          polygon: Joi.string().allow(null,''),
          site_id: Joi.string().allow(null,''),
          viewonly: Joi.string().allow(null,''),
          branchId: Joi.string().allow(null,''),
});

export const createLocations = async (req: Request, res: Response) => {
  const { error } = locationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const locate = new location();
    locate.location_name = req.body.location_name;
    locate.location_type = req.body.location_type;
    locate.active = req.body.active;
    locate.description = req.body.description;
    locate.material_id = req.body.material_id;
    locate.polygon = req.body.polygon;
    locate.site_id = req.body.site_id;
    locate.viewonly = req.body.viewonly;
    locate.branchId = req.body.branchId;
    await locate.save();
    return res.status(201).json(locate);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllLocations = async (_: Request, res: Response) => {
  try {
    const locate = await location.find();
    return res.json(locate);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteLocations = async (req: Request, res: Response) => {
  try {
    const locate = await location.findOne(req.params.id);
    if (!locate) {
      return res.status(404).json({ error: 'location not found' });
    }

    await locate.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const LocationsById = async (req: Request, res: Response) => {
  try {
    const locate = await location.findOne(req.params.id);
    if (!locate) {
      return res.status(404).json({ error: 'location not found' });
    }
    return res.json(locate);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};


