import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { EqpType } from "../entity/EqpType";

const eqpTypeSchema = Joi.object({
branchId: Joi.string().required(),
stateId : Joi.string().allow(null,""),
Description : Joi.string().allow(null,""),
equipmentType : Joi.string().allow(null,""),
stateCategory : Joi.string().allow(null,""),  
userId: Joi.string().required(),
});

export const createEqpType = async (req: Request, res: Response) => {
  try {
    const { error } = eqpTypeSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const qyptype = new EqpType();
    qyptype.branchId = req.body.branchId;
    qyptype.stateId = req.body.stateId;
    qyptype.Description = req.body.Description;
    qyptype.equipmentType = req.body.equipmentType;
    qyptype.stateCategory = req.body.stateCategory;
    qyptype.userId = req.body.userId;
    await qyptype.save();

    return res.status(201).json(qyptype);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllEqpType = async (_: Request, res: Response) => {
  try {
    const eqptype = await EqpType.find();
    return res.json(eqptype);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateEqpType = async (req: Request, res: Response) => {
  try {
    const { error } = eqpTypeSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const eqptype = await EqpType.findOne(req.params.id);
    if (!eqptype) {
      return res.status(404).json({ error: 'EqpType not found' });
    }
    eqptype.branchId = req.body.branchId;
    eqptype.stateId = req.body.stateId;
    eqptype.Description = req.body.Description;
    eqptype.equipmentType = req.body.equipmentType;
    eqptype.stateCategory = req.body.stateCategory;
    eqptype.userId = req.body.userId;

    await eqptype.save();
    return res.json(eqptype);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteEqpType = async (req: Request, res: Response) => {
  try {
    const eqptype = await EqpType.findOne(req.params.id);
    if (!eqptype) {
      return res.status(404).json({ error: 'EqpType not found' });
    }

    await eqptype.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const EqpTypeById = async (req: Request, res: Response) => {
  try {
    const eqptype = await EqpType.findOne(req.params.id);
    if (!eqptype) {
      return res.status(404).json({ error: 'EqpType not found' });
    }
    return res.json(eqptype);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

