import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { tipper_state_history } from "../entity/tipper_state_history";

const tripStateHistorySchema = Joi.object({
  inserted_time: Joi.date(),
  hex_sno: Joi.number().allow(null,""),
  driver_id: Joi.string().allow(null,""),
  first_excavator_id: Joi.string().allow(null,""),
  first_operator_id: Joi.string().allow(null,""),
  fourth_excavator_id: Joi.string().allow(null,""),
  fourth_operator_id: Joi.string().allow(null,true),
  location_id: Joi.string().allow(null,""),
  new_state: Joi.string().allow(null,""),
  pdate: Joi.date().allow(null,""),
  second_excavator_id: Joi.string().allow(null,""),
  second_operator_id: Joi.string().allow(null,""),
  shift_id: Joi.string().allow(null,""),
  state_date: Joi.date().allow(null,""),
  state_duration: Joi.string().allow(null,""),
  third_excavator_id: Joi.string().allow(null,""),
  third_operator_id: Joi.string().allow(null,""),
  tipper_id: Joi.string().allow(null,""),
  trip_no: Joi.number().allow(null,""),
  stateDistance: Joi.number().allow(null,""),
  odometer: Joi.number().allow(null,""),
  tripFlag: Joi.number().allow(null,""),
  coolant_level: Joi.number().allow(null,""),
  fuel_level: Joi.number().allow(null,""),
  total_fuel_consumed: Joi.number().allow(null,""),
  total_hours: Joi.number().allow(null,""),
  Exc1: Joi.string().allow(null,""),
  Exc1_RSSI: Joi.number().allow(null,""),
  Exc1_Distance: Joi.number().allow(null,""),
  Exc2: Joi.string().allow(null,""),
  Exc2_RSSI: Joi.number().allow(null,""),
  Exc2_Distance: Joi.number().allow(null,""),
  Exc3: Joi.string().allow(null,""),
  Exc3_RSSI: Joi.number().allow(null,""),
  Exc3_Distance: Joi.number().allow(null,""),
  vibration_value: Joi.number().allow(null,""),
});

export const createtripStateHistory = async (req: Request, res: Response) => {
  const { error } = tripStateHistorySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
          const truckstatehistory = new tipper_state_history();
          truckstatehistory.inserted_time = req.body.inserted_time
          truckstatehistory.hex_sno = req.body.hex_sno
          truckstatehistory.driver_id = req.body.driver_id
          truckstatehistory.first_excavator_id = req.body.first_excavator_id
          truckstatehistory.first_operator_id = req.body.first_operator_id
          truckstatehistory.fourth_excavator_id = req.body.fourth_excavator_id
          truckstatehistory.fourth_operator_id = req.body.fourth_operator_id
          truckstatehistory.location_id = req.body.location_id
          truckstatehistory.new_state = req.body.new_state
          truckstatehistory.pdate = req.body.pdate
          truckstatehistory.second_excavator_id = req.body.second_excavator_id
          truckstatehistory.second_operator_id = req.body.second_operator_id
          truckstatehistory.shift_id = req.body.shift_id
          truckstatehistory.state_date = req.body.state_date
          truckstatehistory.state_duration = req.body.state_duration
          truckstatehistory.third_excavator_id = req.body.third_excavator_id
          truckstatehistory.third_operator_id = req.body.third_operator_id
          truckstatehistory.tipper_id = req.body.tipper_id
          truckstatehistory.trip_no = req.body.trip_no
          truckstatehistory.stateDistance = req.body.stateDistance
          truckstatehistory.odometer = req.body.odometer
          truckstatehistory.tripFlag = req.body.tripFlag
          truckstatehistory.coolant_level = req.body.coolant_level
          truckstatehistory.fuel_level = req.body.fuel_level
          truckstatehistory.total_fuel_consumed = req.body.total_fuel_consumed
          truckstatehistory.total_hours = req.body.total_hours
          truckstatehistory.Exc1 = req.body.Exc1
          truckstatehistory.Exc1_RSSI = req.body.Exc1_RSSI
          truckstatehistory.Exc1_Distance = req.body.Exc1_Distance
          truckstatehistory.Exc2 = req.body.Exc2
          truckstatehistory.Exc2_RSSI = req.body.Exc2_RSSI
          truckstatehistory.Exc2_Distance = req.body.Exc2_Distance
          truckstatehistory.Exc3 = req.body.Exc3
          truckstatehistory.Exc3_RSSI = req.body.Exc3_RSSI
          truckstatehistory.Exc3_Distance = req.body.Exc3_Distance
          truckstatehistory.vibration_value = req.body.vibration_value
    
    await truckstatehistory.save();
    return res.status(201).json(truckstatehistory);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAlltripStateHistory = async (_: Request, res: Response) => {
  try {
    const truckstatehistory = await tipper_state_history.find();
    return res.json(truckstatehistory);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulktripStateHistory = async (req: Request, res: Response) => {
  if (req.body.truckstatehistory.length) {
    const truckStatehistoryData = req.body.truckstatehistory

    let responseData: any = []

    for (let i = 0; i < truckStatehistoryData.length; i++) {
      const element = truckStatehistoryData[i];
      const { error } = tripStateHistorySchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
    }
    try {

      for (let i = 0; i < truckStatehistoryData.length; i++) {
        const element = truckStatehistoryData[i];
        let truckstatehistoryDataUpdateData: any;

        if (element.id) {
          console.log("update");
          truckstatehistoryDataUpdateData = await updateDatatruckstatehistory(element)
        }
        else {
          truckstatehistoryDataUpdateData = await createDatatruckstatehistory(element)
          console.log("add");
        }
        responseData.push(truckstatehistoryDataUpdateData);
      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }
};

const updateDatatruckstatehistory = async (data: any) => {
  const { error } = tripStateHistorySchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const truckstatehistory = await tipper_state_history.findOne(data.id);
    if (!truckstatehistory) {
      return { error: error.details[0].message }
    }
          truckstatehistory.inserted_time = data.inserted_time
          truckstatehistory.hex_sno = data.hex_sno
          truckstatehistory.driver_id = data.driver_id
          truckstatehistory.first_excavator_id = data.first_excavator_id
          truckstatehistory.first_operator_id = data.first_operator_id
          truckstatehistory.fourth_excavator_id = data.fourth_excavator_id
          truckstatehistory.fourth_operator_id = data.fourth_operator_id
          truckstatehistory.location_id = data.location_id
          truckstatehistory.new_state = data.new_state
          truckstatehistory.pdate = data.pdate
          truckstatehistory.second_excavator_id = data.second_excavator_id
          truckstatehistory.second_operator_id = data.second_operator_id
          truckstatehistory.shift_id = data.shift_id
          truckstatehistory.state_date = data.state_date
          truckstatehistory.state_duration = data.state_duration
          truckstatehistory.third_excavator_id = data.third_excavator_id
          truckstatehistory.third_operator_id = data.third_operator_id
          truckstatehistory.tipper_id = data.tipper_id
          truckstatehistory.trip_no = data.trip_no
          truckstatehistory.stateDistance = data.stateDistance
          truckstatehistory.odometer = data.odometer
          truckstatehistory.tripFlag = data.tripFlag
          truckstatehistory.coolant_level = data.coolant_level
          truckstatehistory.fuel_level = data.fuel_level
          truckstatehistory.total_fuel_consumed = data.total_fuel_consumed
          truckstatehistory.total_hours = data.total_hours
          truckstatehistory.Exc1 = data.Exc1
          truckstatehistory.Exc1_RSSI = data.Exc1_RSSI
          truckstatehistory.Exc1_Distance = data.Exc1_Distance
          truckstatehistory.Exc2 = data.Exc2
          truckstatehistory.Exc2_RSSI = data.Exc2_RSSI
          truckstatehistory.Exc2_Distance = data.Exc2_Distance
          truckstatehistory.Exc3 = data.Exc3
          truckstatehistory.Exc3_RSSI = data.Exc3_RSSI
          truckstatehistory.Exc3_Distance = data.Exc3_Distance
          truckstatehistory.vibration_value = data.vibration_value

    await truckstatehistory.save();

    return truckstatehistory

  } catch (error) {
    return error
  }
};

const createDatatruckstatehistory = async (data: any) => {
  const { error } = tripStateHistorySchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {

    const truckstatehistory = new tipper_state_history();
    truckstatehistory.inserted_time = data.inserted_time
          truckstatehistory.hex_sno = data.hex_sno
          truckstatehistory.driver_id = data.driver_id
          truckstatehistory.first_excavator_id = data.first_excavator_id
          truckstatehistory.first_operator_id = data.first_operator_id
          truckstatehistory.fourth_excavator_id = data.fourth_excavator_id
          truckstatehistory.fourth_operator_id = data.fourth_operator_id
          truckstatehistory.location_id = data.location_id
          truckstatehistory.new_state = data.new_state
          truckstatehistory.pdate = data.pdate
          truckstatehistory.second_excavator_id = data.second_excavator_id
          truckstatehistory.second_operator_id = data.second_operator_id
          truckstatehistory.shift_id = data.shift_id
          truckstatehistory.state_date = data.state_date
          truckstatehistory.state_duration = data.state_duration
          truckstatehistory.third_excavator_id = data.third_excavator_id
          truckstatehistory.third_operator_id = data.third_operator_id
          truckstatehistory.tipper_id = data.tipper_id
          truckstatehistory.trip_no = data.trip_no
          truckstatehistory.stateDistance = data.stateDistance
          truckstatehistory.odometer = data.odometer
          truckstatehistory.tripFlag = data.tripFlag
          truckstatehistory.coolant_level = data.coolant_level
          truckstatehistory.fuel_level = data.fuel_level
          truckstatehistory.total_fuel_consumed = data.total_fuel_consumed
          truckstatehistory.total_hours = data.total_hours
          truckstatehistory.Exc1 = data.Exc1
          truckstatehistory.Exc1_RSSI = data.Exc1_RSSI
          truckstatehistory.Exc1_Distance = data.Exc1_Distance
          truckstatehistory.Exc2 = data.Exc2
          truckstatehistory.Exc2_RSSI = data.Exc2_RSSI
          truckstatehistory.Exc2_Distance = data.Exc2_Distance
          truckstatehistory.Exc3 = data.Exc3
          truckstatehistory.Exc3_RSSI = data.Exc3_RSSI
          truckstatehistory.Exc3_Distance = data.Exc3_Distance
          truckstatehistory.vibration_value = data.vibration_value

    await truckstatehistory.save();

    return truckstatehistory
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deletetruckstatehistory = async (req: Request, res: Response) => {
  try {
    const truckstatehistory = await tipper_state_history.findOne(req.params.id);
    if (!truckstatehistory) {
      return res.status(404).json({ error: 'tipper_state_history not found' });
    }

    await truckstatehistory.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const truckstatehistoryById = async (req: Request, res: Response) => {
  try {
    const truckstatehistory = await tipper_state_history.findOne(req.params.id);
    if (!truckstatehistory) {
      return res.status(404).json({ error: 'truckstatehistory not found' });
    }
    return res.json(truckstatehistory);
  } catch (error) {
    return InternalServerError(res, error);
  }
};



