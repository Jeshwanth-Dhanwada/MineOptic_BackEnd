import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { tipperhistory } from "../entity/tipperhistory";

const tripHistorySchema = Joi.object({
  inserted_time: Joi.date(),
  hex_sno: Joi.number().allow(null,""),
  altitude: Joi.number().allow(null,""),
  direction: Joi.string().allow(null,""),
  engineStatus: Joi.string().allow(null,""),
  lat_direction: Joi.string().allow(null,""),
  location_id: Joi.string().allow(null,true),
  long_direction: Joi.string().allow(null,""),
  longitude: Joi.number().allow(null,""),
  operator_id: Joi.string().allow(null,""),
  site_id: Joi.string().allow(null,""),
  speed: Joi.string().allow(null,""),
  state: Joi.string().allow(null,""),
  tipper_id: Joi.string().allow(null,""),
  trackTime: Joi.string().allow(null,""),
  LD_Excavator: Joi.string().allow(null,""),
  odometer: Joi.number().allow(null,""),
  power_indicator: Joi.string().allow(null,""),
  tipper_history_duration: Joi.number().allow(null,""),
  vibration_value: Joi.string().allow(null,""),
  Vibration_Threshold_Indicator: Joi.string().allow(null,""),
  vibration_diff: Joi.string().allow(null,""),
  reverse_indicator: Joi.string().allow(null,""),
  accelerator_position: Joi.number().allow(null,""),
  alternator: Joi.string().allow(null,""),
  coolant_level: Joi.number().allow(null,""),
  coolant_temperature: Joi.number().allow(null,""),
  engine_rpm: Joi.number().allow(null,""),
  fuel_level: Joi.number().allow(null,""),
  hoist: Joi.string().allow(null,""),
  ios: Joi.string().allow(null,""),
  pto: Joi.string().allow(null,""),
  total_fuel_consumed: Joi.number().allow(null,""),
  total_hours: Joi.number().allow(null,""),
  vehicle_speed: Joi.number().allow(null,""),
  odometer_diff: Joi.number().allow(null,""),
  total_fuel_consumed_diff: Joi.string().allow(null,""),
  Exc1: Joi.string().allow(null,""),
  Exc1_RSSI: Joi.number().allow(null,""),
  Exc1_Distance: Joi.number().allow(null,""),
  Exc2: Joi.string().allow(null,""),
  Exc2_RSSI: Joi.number().allow(null,""),
  Exc2_Distance: Joi.number().allow(null,""),
  Exc3: Joi.string().allow(null,""),
  Exc3_RSSI: Joi.number().allow(null,""),
  Exc3_Distance: Joi.number().allow(null,""),
  trip_no: Joi.number().required(),
});

export const createtripHistory = async (req: Request, res: Response) => {
  const { error } = tripHistorySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
   const truckhistory = new tipperhistory();
    truckhistory.inserted_time = req.body.inserted_time
    truckhistory.hex_sno = req.body.hex_sno
    truckhistory.altitude = req.body.altitude
    truckhistory.direction = req.body.direction
    truckhistory.engineStatus = req.body.engineStatus
    truckhistory.lat_direction = req.body.lat_direction
    truckhistory.location_id = req.body.location_id
    truckhistory.long_direction = req.body.long_direction
    truckhistory.longitude = req.body.longitude
    truckhistory.operator_id = req.body.operator_id
    truckhistory.site_id = req.body.site_id
    truckhistory.speed = req.body.speed
    truckhistory.state = req.body.state
    truckhistory.tipper_id = req.body.tipper_id
    truckhistory.trackTime = req.body.trackTime
    truckhistory.LD_Excavator = req.body.LD_Excavator
    truckhistory.odometer = req.body.odometer
    truckhistory.power_indicator = req.body.power_indicator
    truckhistory.tipper_history_duration = req.body.tipper_history_duration
    truckhistory.vibration_value = req.body.vibration_value
    truckhistory.Vibration_Threshold_Indicator = req.body.Vibration_Threshold_Indicator
    truckhistory.vibration_diff = req.body.vibration_diff
    truckhistory.reverse_indicator = req.body.reverse_indicator
    truckhistory.accelerator_position = req.body.accelerator_position
    truckhistory.alternator = req.body.alternator
    truckhistory.coolant_level = req.body.coolant_level
    truckhistory.coolant_temperature = req.body.coolant_temperature
    truckhistory.engine_rpm = req.body.engine_rpm
    truckhistory.fuel_level = req.body.fuel_level
    truckhistory.hoist = req.body.hoist
    truckhistory.ios = req.body.ios
    truckhistory.pto = req.body.pto
    truckhistory.total_fuel_consumed = req.body.total_fuel_consumed
    truckhistory.total_hours = req.body.total_hours
    truckhistory.vehicle_speed = req.body.vehicle_speed
    truckhistory.odometer_diff = req.body.odometer_diff
    truckhistory.total_fuel_consumed_diff = req.body.total_fuel_consumed_diff
    truckhistory.Exc1 = req.body.Exc1
    truckhistory.Exc1_RSSI = req.body.Exc1_RSSI
    truckhistory.Exc1_Distance = req.body.Exc1_Distance
    truckhistory.Exc2 = req.body.Exc2
    truckhistory.Exc2_RSSI = req.body.Exc2_RSSI
    truckhistory.Exc2_Distance = req.body.Exc2_Distance
    truckhistory.Exc3 = req.body.Exc3
    truckhistory.Exc3_RSSI = req.body.Exc3_RSSI
    truckhistory.Exc3_Distance = req.body.Exc3_Distance
    truckhistory.trip_no = req.body.trip_no
    
    await truckhistory.save();
    return res.status(201).json(truckhistory);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAlltripHistory = async (_: Request, res: Response) => {
  try {
    const truckhistory = await tipperhistory.find();
    return res.json(truckhistory);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulktripHistory = async (req: Request, res: Response) => {
  if (req.body.truckhistory.length) {
    const truckhistoryData = req.body.truckhistory

    let responseData: any = []

    for (let i = 0; i < truckhistoryData.length; i++) {
      const element = truckhistoryData[i];
      const { error } = tripHistorySchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }

    try {

      for (let i = 0; i < truckhistoryData.length; i++) {
        const element = truckhistoryData[i];
        let truckhistoryDataUpdateData: any;

        if (element.id) {
          console.log("update");
          truckhistoryDataUpdateData = await updateDatatruckhistory(element)
        }

        else {
          truckhistoryDataUpdateData = await createDatatruckhistory(element)
          console.log("add");
        }

        responseData.push(truckhistoryDataUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDatatruckhistory = async (data: any) => {
  const { error } = tripHistorySchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const truckhistory = await tipperhistory.findOne(data.id);
    if (!truckhistory) {
      return { error: error.details[0].message }
    }
    truckhistory.inserted_time = data.inserted_time
    truckhistory.hex_sno = data.hex_sno
    truckhistory.altitude = data.altitude
    truckhistory.direction = data.direction
    truckhistory.engineStatus = data.engineStatus
    truckhistory.lat_direction = data.lat_direction
    truckhistory.location_id = data.location_id
    truckhistory.long_direction = data.long_direction
    truckhistory.longitude = data.longitude
    truckhistory.operator_id = data.operator_id
    truckhistory.site_id = data.site_id
    truckhistory.speed = data.speed
    truckhistory.state = data.state
    truckhistory.tipper_id = data.tipper_id
    truckhistory.trackTime = data.trackTime
    truckhistory.LD_Excavator = data.LD_Excavator
    truckhistory.odometer = data.odometer
    truckhistory.power_indicator = data.power_indicator
    truckhistory.tipper_history_duration = data.tipper_history_duration
    truckhistory.vibration_value = data.vibration_value
    truckhistory.Vibration_Threshold_Indicator = data.Vibration_Threshold_Indicator
    truckhistory.vibration_diff = data.vibration_diff
    truckhistory.reverse_indicator = data.reverse_indicator
    truckhistory.accelerator_position = data.accelerator_position
    truckhistory.alternator = data.alternator
    truckhistory.coolant_level = data.coolant_level
    truckhistory.coolant_temperature = data.coolant_temperature
    truckhistory.engine_rpm = data.engine_rpm
    truckhistory.fuel_level = data.fuel_level
    truckhistory.hoist = data.hoist
    truckhistory.ios = data.ios
    truckhistory.pto = data.pto
    truckhistory.total_fuel_consumed = data.total_fuel_consumed
    truckhistory.total_hours = data.total_hours
    truckhistory.vehicle_speed = data.vehicle_speed
    truckhistory.odometer_diff = data.odometer_diff
    truckhistory.total_fuel_consumed_diff = data.total_fuel_consumed_diff
    truckhistory.Exc1 = data.Exc1
    truckhistory.Exc1_RSSI = data.Exc1_RSSI
    truckhistory.Exc1_Distance = data.Exc1_Distance
    truckhistory.Exc2 = data.Exc2
    truckhistory.Exc2_RSSI = data.Exc2_RSSI
    truckhistory.Exc2_Distance = data.Exc2_Distance
    truckhistory.Exc3 = data.Exc3
    truckhistory.Exc3_RSSI = data.Exc3_RSSI
    truckhistory.Exc3_Distance = data.Exc3_Distance
    truckhistory.trip_no = data.trip_no

    await truckhistory.save();

    return truckhistory

  } catch (error) {
    return error
  }
};

const createDatatruckhistory = async (data: any) => {
  const { error } = tripHistorySchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {

    const truckhistory = new tipperhistory();
    truckhistory.inserted_time = data.inserted_time
    truckhistory.hex_sno = data.hex_sno
    truckhistory.altitude = data.altitude
    truckhistory.direction = data.direction
    truckhistory.engineStatus = data.engineStatus
    truckhistory.lat_direction = data.lat_direction
    truckhistory.location_id = data.location_id
    truckhistory.long_direction = data.long_direction
    truckhistory.longitude = data.longitude
    truckhistory.operator_id = data.operator_id
    truckhistory.site_id = data.site_id
    truckhistory.speed = data.speed
    truckhistory.state = data.state
    truckhistory.tipper_id = data.tipper_id
    truckhistory.trackTime = data.trackTime
    truckhistory.LD_Excavator = data.LD_Excavator
    truckhistory.odometer = data.odometer
    truckhistory.power_indicator = data.power_indicator
    truckhistory.tipper_history_duration = data.tipper_history_duration
    truckhistory.vibration_value = data.vibration_value
    truckhistory.Vibration_Threshold_Indicator = data.Vibration_Threshold_Indicator
    truckhistory.vibration_diff = data.vibration_diff
    truckhistory.reverse_indicator = data.reverse_indicator
    truckhistory.accelerator_position = data.accelerator_position
    truckhistory.alternator = data.alternator
    truckhistory.coolant_level = data.coolant_level
    truckhistory.coolant_temperature = data.coolant_temperature
    truckhistory.engine_rpm = data.engine_rpm
    truckhistory.fuel_level = data.fuel_level
    truckhistory.hoist = data.hoist
    truckhistory.ios = data.ios
    truckhistory.pto = data.pto
    truckhistory.total_fuel_consumed = data.total_fuel_consumed
    truckhistory.total_hours = data.total_hours
    truckhistory.vehicle_speed = data.vehicle_speed
    truckhistory.odometer_diff = data.odometer_diff
    truckhistory.total_fuel_consumed_diff = data.total_fuel_consumed_diff
    truckhistory.Exc1 = data.Exc1
    truckhistory.Exc1_RSSI = data.Exc1_RSSI
    truckhistory.Exc1_Distance = data.Exc1_Distance
    truckhistory.Exc2 = data.Exc2
    truckhistory.Exc2_RSSI = data.Exc2_RSSI
    truckhistory.Exc2_Distance = data.Exc2_Distance
    truckhistory.Exc3 = data.Exc3
    truckhistory.Exc3_RSSI = data.Exc3_RSSI
    truckhistory.Exc3_Distance = data.Exc3_Distance
    truckhistory.trip_no = data.trip_no

    await truckhistory.save();

    return truckhistory
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deletetruckhistory = async (req: Request, res: Response) => {
  try {
    const truckhistory = await tipperhistory.findOne(req.params.id);
    if (!truckhistory) {
      return res.status(404).json({ error: 'tipperhistory not found' });
    }

    await truckhistory.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const truckhistoryById = async (req: Request, res: Response) => {
  try {
    const truckhistory = await tipperhistory.findOne(req.params.id);
    if (!truckhistory) {
      return res.status(404).json({ error: 'truckhistory not found' });
    }
    return res.json(truckhistory);
  } catch (error) {
    return InternalServerError(res, error);
  }
};



