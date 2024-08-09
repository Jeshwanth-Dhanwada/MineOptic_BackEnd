import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { excavatorStatehistory } from "../entity/excavatorStateHistory";

const excavatorstatehistorySchema = Joi.object({
  state_date: Joi.date(),
  latitude: Joi.string().allow(null,""),
  longitude: Joi.string().allow(null,""),
  latitude_direction: Joi.string().allow(null,""),
  longitude_direction: Joi.string().allow(null,""),
  shift_id: Joi.number().allow(null,""),
  pdate: Joi.string().allow(null,""),
  excavator_id: Joi.string().allow(null,""),
  operator_id: Joi.string().allow(null,""),
  location_id: Joi.string().allow(null,""),
  new_state: Joi.string().allow(null,""),
  state_duration: Joi.string().allow(null,""),
  seen_by_tipper_id: Joi.string().allow(null,""),
  trip_no: Joi.number().allow(null,""),
  power_indicator: Joi.number().allow(null,""),
  RFID_indicator: Joi.number().allow(null,""),
  engine_indicator: Joi.date().allow(null,""),
  ignition_value: Joi.number().allow(null,""),
  userId: Joi.string().allow(null,""),
  DateTime: Joi.date().allow(null,""),
});

export const createExcavatorStateHistory= async (req: Request, res: Response) => {
  const { error } = excavatorstatehistorySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
   const excavatorStateHistory = new excavatorStatehistory();
          excavatorStateHistory.state_date = req.body.state_date
          excavatorStateHistory.latitude = req.body.latitude
          excavatorStateHistory.longitude = req.body.longitude
          excavatorStateHistory.latitude_direction = req.body.latitude_direction
          excavatorStateHistory.longitude_direction = req.body.longitude_direction
          excavatorStateHistory.shift_id = req.body.shift_id
          excavatorStateHistory.pdate = req.body.pdate
          excavatorStateHistory.excavator_id = req.body.excavator_id
          excavatorStateHistory.operator_id = req.body.operator_id
          excavatorStateHistory.location_id = req.body.location_id
          excavatorStateHistory.new_state = req.body.new_state
          excavatorStateHistory.state_duration = req.body.state_duration
          excavatorStateHistory.seen_by_tipper_id = req.body.seen_by_tipper_id
          excavatorStateHistory.trip_no = req.body.trip_no
          excavatorStateHistory.power_indicator = req.body.power_indicator
          excavatorStateHistory.RFID_indicator = req.body.RFID_indicator
          excavatorStateHistory.engine_indicator = req.body.engine_indicator
          excavatorStateHistory.ignition_value = req.body.ignition_value
          excavatorStateHistory.userId = req.body.userId
    
    await excavatorStateHistory.save();
    return res.status(201).json(excavatorStateHistory);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllExcavatorStateHistory = async (_: Request, res: Response) => {
  try {
    const excavatorStateHistory = await excavatorStatehistory.find();
    return res.json(excavatorStateHistory);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkExcavatorStateHistory = async (req: Request, res: Response) => {
  if (req.body.excavatorStateHistory.length) {
    const excavatorStateHistoryData = req.body.excavatorStateHistory

    let responseData: any = []

    for (let i = 0; i < excavatorStateHistoryData.length; i++) {
      const element = excavatorStateHistoryData[i];
      const { error } = excavatorstatehistorySchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }

    try {

      for (let i = 0; i < excavatorStateHistoryData.length; i++) {
        const element = excavatorStateHistoryData[i];
        let excavatorStateHistoryUpdateData: any;

        if (element.id) {
          console.log("update");
          excavatorStateHistoryUpdateData = await updateDataExcavatorStatehistory(element)
        }

        else {
          excavatorStateHistoryUpdateData = await createDataExcavatorStatehistory(element)
          console.log("add");
        }

        responseData.push(excavatorStateHistoryUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataExcavatorStatehistory = async (data: any) => {
  const { error } = excavatorstatehistorySchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const excavatorStateHistory = await excavatorStatehistory.findOne(data.id);
    if (!excavatorStateHistory) {
      return { error: error.details[0].message }
    }
    excavatorStateHistory.state_date = data.state_date
    excavatorStateHistory.latitude = data.latitude
    excavatorStateHistory.longitude = data.longitude
    excavatorStateHistory.latitude_direction = data.latitude_direction
    excavatorStateHistory.longitude_direction = data.longitude_direction
    excavatorStateHistory.shift_id = data.shift_id
    excavatorStateHistory.pdate = data.pdate
    excavatorStateHistory.excavator_id = data.excavator_id
    excavatorStateHistory.operator_id = data.operator_id
    excavatorStateHistory.location_id = data.location_id
    excavatorStateHistory.new_state = data.new_state
    excavatorStateHistory.state_duration = data.state_duration
    excavatorStateHistory.seen_by_tipper_id = data.seen_by_tipper_id
    excavatorStateHistory.trip_no = data.trip_no
    excavatorStateHistory.power_indicator = data.power_indicator
    excavatorStateHistory.RFID_indicator = data.RFID_indicator
    excavatorStateHistory.engine_indicator = data.engine_indicator
    excavatorStateHistory.ignition_value = data.ignition_value
    excavatorStateHistory.userId = data.userId

    await excavatorStateHistory.save();

    return excavatorStateHistory

  } catch (error) {
    return error
  }
};

const createDataExcavatorStatehistory = async (data: any) => {
  const { error } = excavatorstatehistorySchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {

    const excavatorStateHistory = new excavatorStatehistory();
    excavatorStateHistory.state_date = data.state_date
    excavatorStateHistory.latitude = data.latitude
    excavatorStateHistory.longitude = data.longitude
    excavatorStateHistory.latitude_direction = data.latitude_direction
    excavatorStateHistory.longitude_direction = data.longitude_direction
    excavatorStateHistory.shift_id = data.shift_id
    excavatorStateHistory.pdate = data.pdate
    excavatorStateHistory.excavator_id = data.excavator_id
    excavatorStateHistory.operator_id = data.operator_id
    excavatorStateHistory.location_id = data.location_id
    excavatorStateHistory.new_state = data.new_state
    excavatorStateHistory.state_duration = data.state_duration
    excavatorStateHistory.seen_by_tipper_id = data.seen_by_tipper_id
    excavatorStateHistory.trip_no = data.trip_no
    excavatorStateHistory.power_indicator = data.power_indicator
    excavatorStateHistory.RFID_indicator = data.RFID_indicator
    excavatorStateHistory.engine_indicator = data.engine_indicator
    excavatorStateHistory.ignition_value = data.ignition_value
    excavatorStateHistory.userId = data.userId

    await excavatorStateHistory.save();

    return excavatorStateHistory
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteExcavatorStateHistory= async (req: Request, res: Response) => {
  try {
    const excavatorStateHistory = await excavatorStatehistory.findOne(req.params.id);
    if (!excavatorStateHistory) {
      return res.status(404).json({ error: 'excavatorStatehistory not found' });
    }

    await excavatorStateHistory.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const ExcavatorStateHistoryById = async (req: Request, res: Response) => {
  try {
    const excavatorStateHistory = await excavatorStatehistory.findOne(req.params.id);
    if (!excavatorStateHistory) {
      return res.status(404).json({ error: 'excavatorStateHistory not found' });
    }
    return res.json(excavatorStateHistory);
  } catch (error) {
    return InternalServerError(res, error);
  }
};



