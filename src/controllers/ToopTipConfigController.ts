import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { ToopTipConfiguration } from "../entity/ToopTipConfig";

const ToolTipConfigSchema = Joi.object({

          Tcolumn: Joi.string().allow(null,""),
          columnName: Joi.string().allow(null,""),
          index: Joi.number().allow(null,""),
          userId: Joi.string().allow(null,""),
          branchId: Joi.string().allow(null,""),
          checkValue: Joi.boolean().allow(null,""),
});

export const createToolTipConfig = async (req: Request, res: Response) => {
  const { error } = ToolTipConfigSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const tooltipconfig = new ToopTipConfiguration();
    tooltipconfig.columnName = req.body.columnName;
    tooltipconfig.index = req.body.index;
    tooltipconfig.userId = req.body.userId;
    tooltipconfig.branchId = req.body.branchId;
    await tooltipconfig.save();
    return res.status(201).json(tooltipconfig);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllToolTipConfig = async (_: Request, res: Response) => {
  try {
    const tooltipconfig = await ToopTipConfiguration.find();
    return res.json(tooltipconfig);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateToolTipConfig = async (req: Request, res: Response) => {
  const { error } = ToolTipConfigSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const tooltipconfig = await ToopTipConfiguration.findOne(req.params.id);
    if (!tooltipconfig) {
      return res.status(404).json({ error: 'ToopTipConfiguration not found' });
    }
    tooltipconfig.columnName = req.body.columnName;
    tooltipconfig.index = req.body.index;
    tooltipconfig.userId = req.body.userId;
    tooltipconfig.branchId = req.body.branchId;

    await tooltipconfig.save();
    return res.json(tooltipconfig);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteToolTipConfig = async (req: Request, res: Response) => {
  try {
    const tooltipconfig = await ToopTipConfiguration.findOne(req.params.id);
    if (!tooltipconfig) {
      return res.status(404).json({ error: 'ToopTipConfiguration not found' });
    }

    await tooltipconfig.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const ToolTipConfigById = async (req: Request, res: Response) => {
  try {
    const tooltipconfig = await ToopTipConfiguration.findOne(req.params.id);
    if (!tooltipconfig) {
      return res.status(404).json({ error: 'ToopTipConfiguration not found' });
    }
    return res.json(tooltipconfig);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkToolTip = async (req: Request, res: Response) => {
  if (req.body.tooltipconfig.length) {
    const tooltipconfigData = req.body.tooltipconfig

    let responseData: any = []

    for (let i = 0; i < tooltipconfigData.length; i++) {
      const element = tooltipconfigData[i];
      const { error } = ToolTipConfigSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
    }
    try {

      for (let i = 0; i < tooltipconfigData.length; i++) {
        const element = tooltipconfigData[i];
        let toolTipUpdateData: any;

        if (element.Tcolumn) {
          console.log("update");
          toolTipUpdateData = await updateToolTipData(element)
        }
        else {
          toolTipUpdateData = await createToolTipData(element)
          console.log("add");
        }
        responseData.push(toolTipUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

export const updateToolTipData = async (data: any) => {
  const { error } = ToolTipConfigSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const tooltipconfig = await ToopTipConfiguration.findOne({ where: { Tcolumn: data.Tcolumn } });
    if (!tooltipconfig) {
      return { error: ' batch not found' }
    }
    tooltipconfig.Tcolumn = data.Tcolumn;
    tooltipconfig.columnName = data.columnName;
    tooltipconfig.index = data.index;
    tooltipconfig.userId = data.userId;
    tooltipconfig.branchId = data.branchId;
    tooltipconfig.checkValue = data.checkValue;

    await tooltipconfig.save();
    return tooltipconfig

  } catch (error) {
    return error
  }
};

export const createToolTipData = async (data: any) => {
  // Check if a color configuration with the same stateName already exists
  const existingConfig = await ToopTipConfiguration.findOne({ where: { Tcolumn: data.Tcolumn } });

  if (existingConfig) {
    return { error: "ToolTip configuration with this Tcolumn already exists." };
  }
  try {
    const tooltipconfig = new ToopTipConfiguration();
    tooltipconfig.Tcolumn = data.Tcolumn;
    tooltipconfig.columnName = data.columnName;
    tooltipconfig.index = data.index;
    tooltipconfig.userId = data.userId;
    tooltipconfig.branchId = data.branchId;
    tooltipconfig.checkValue = data.checkValue;

    await tooltipconfig.save();
    return tooltipconfig
  } catch (error) {
    console.log(error)
    return error
  }
};