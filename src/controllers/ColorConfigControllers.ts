import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { ColorConfiguration } from "../entity/colorConfig";

const ColorConfigSchema = Joi.object({

  branchId: Joi.string().required(),
  stateName: Joi.string().required(),
  colorCode: Joi.string().required(),
  userId: Joi.string().required(),
});

export const createColorConfig = async (req: Request, res: Response) => {
  const { error } = ColorConfigSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const colorconfig = new ColorConfiguration();
    colorconfig.branchId = req.body.branchId;
    colorconfig.stateName = req.body.stateName;
    colorconfig.colorCode = req.body.colorCode;
    colorconfig.userId = req.body.userId;
    await colorconfig.save();
    return res.status(201).json(colorconfig);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllColorConfig = async (_: Request, res: Response) => {
  try {
    const colorconfig = await ColorConfiguration.find();
    return res.json(colorconfig);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateColorConfig = async (req: Request, res: Response) => {
  const { error } = ColorConfigSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const colorconfig = await ColorConfiguration.findOne(req.params.id);
    if (!colorconfig) {
      return res.status(404).json({ error: 'ColorConfiguration not found' });
    }
    colorconfig.branchId = req.body.branchId;
    colorconfig.stateName = req.body.stateName;
    colorconfig.colorCode = req.body.colorCode;
    colorconfig.userId = req.body.userId;

    await colorconfig.save();
    return res.json(colorconfig);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

export const deleteColorConfig = async (req: Request, res: Response) => {
  try {
    const colorconfig = await ColorConfiguration.findOne(req.params.id);
    if (!colorconfig) {
      return res.status(404).json({ error: 'ColorConfiguration not found' });
    }

    await colorconfig.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const ColorConfigById = async (req: Request, res: Response) => {
  try {
    const colorconfig = await ColorConfiguration.findOne(req.params.id);
    if (!colorconfig) {
      return res.status(404).json({ error: 'ColorConfiguration not found' });
    }
    return res.json(colorconfig);
  }  catch (error) {
    return InternalServerError(res, error);
  }
};

const sql = require('mssql');

const config = {
  user: 'jeshwanth',
  password: '7674003060',
  server: 'JESHWANTH',
  database: 'MineOptic',
  // options: {
  //   encrypt: true, // For Azure SQL Database
  // },
};

export const getColumnNamesFromTipperStateHistory = async (_: Request, res: Response) => {
          try {
            // Connect to the SQL server
            await sql.connect(config);
            console.log("Incoming");
        
            // Query to get all column names from the `tipper_state_history` table
            let result = await new sql.Request().query(`
              SELECT COLUMN_NAME 
              FROM INFORMATION_SCHEMA.COLUMNS 
              WHERE TABLE_NAME = 'tipper_state_history';
            `);
        
            // Extract the column names
            const columnNames = result.recordset.map((column: any) => column.COLUMN_NAME);
            console.log(columnNames, "columnss");
        
            // Return the column names wrapped in an object
            return res.json( columnNames );
          } catch (error) {
            console.error('Error fetching column names:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
          } finally {
            // Close the SQL connection
            await sql.close();
          }
        };

export const updateBulkColorConfig = async (req: Request, res: Response) => {
  if (req.body.colorconfig.length) {
    const colorconfigData = req.body.colorconfig

    let responseData: any = []

    for (let i = 0; i < colorconfigData.length; i++) {
      const element = colorconfigData[i];
      const { error } = ColorConfigSchema.validate(element);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
    }

    try {

      for (let i = 0; i < colorconfigData.length; i++) {
        const element = colorconfigData[i];
        let colorconfigUpdateData: any;

        if (element.stateName) {
          console.log("update");
          colorconfigUpdateData = await updateDataColorConfig(element)
        }
        else {
          colorconfigUpdateData = await createDataColorConfig(element)
          console.log("add");
        }

        responseData.push(colorconfigUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataColorConfig = async (data: any) => {
  const { error } = ColorConfigSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const colorconfig = await ColorConfiguration.findOne({ where: { stateName: data.stateName } });
    if (!colorconfig) {
      return { error: error.details[0].message }
    }

    colorconfig.branchId = data.branchId;
    colorconfig.stateName = data.stateName;
    colorconfig.colorCode = data.colorCode
    colorconfig.userId = data.userId;
    
    await colorconfig.save();

    return colorconfig

  } catch (error) {
    return error
  }
};

const createDataColorConfig = async (data: any) => {
  // Check if a color configuration with the same stateName already exists
  const existingConfig = await ColorConfiguration.findOne({ where: { stateName: data.stateName } });

  if (existingConfig) {
    return { error: "Color configuration with this stateName already exists." };
  }

  try {

    const colorconfig = new ColorConfiguration();
    colorconfig.branchId = data.branchId;
    colorconfig.stateName = data.stateName;
    colorconfig.colorCode = data.colorCode
    colorconfig.userId = data.userId;

    await colorconfig.save();
    return colorconfig
  } catch (error) {
    console.log(error)
    return error
  }
};

