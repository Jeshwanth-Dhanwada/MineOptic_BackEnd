import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { excavatorhistory } from "../entity/excavatorhistory"
import { Between, getRepository, MoreThan } from "typeorm";

const excavatorhistorySchema = Joi.object({
  inserted_time: Joi.date(),
  hex_sno: Joi.number().allow(null,""),
  altitude: Joi.number().allow(null,""),
  direction: Joi.string().allow(null,""),
  engineStatus: Joi.string().allow(null,""),
  excavator_id: Joi.string().allow(null,""),
  excavator_status: Joi.string().allow(null,""),
  lat_direction: Joi.string().allow(null,""),
  latitude: Joi.number().allow(null,""),
  location_id: Joi.number().allow(null,""),
  long_direction: Joi.string().allow(null,""),
  longitude: Joi.number().allow(null,""),
  operator_id: Joi.number().allow(null,""),
  shift_id: Joi.number().allow(null,""),
  site_id: Joi.number().allow(null,""),
  speed: Joi.number().allow(null,""),
  state: Joi.string().allow(null,""),
  trackTime: Joi.date().allow(null,""),
  RFID_flag: Joi.string().allow(null,""),
  odometer: Joi.number().allow(null,""),
  power_indicator: Joi.string().allow(null,""),
  satellite_no: Joi.number().allow(null,""),
  seen_by_tipperid: Joi.string().allow(null,""),
  ignition_change_flag: Joi.string().allow(null,""),
  stored_data_flag: Joi.string().allow(null,""),
  ble_signal_strength: Joi.number().allow(null,""),
  distance: Joi.number().allow(null,""),
  tipperState: Joi.string().allow(null,""),
  History_Available: Joi.string().required(),
  trip_no: Joi.number().required(),
  userId: Joi.string().allow(null,""),
  branchId: Joi.string().allow(null,""),
});

export const createExcavatorHistory= async (req: Request, res: Response) => {
  const { error } = excavatorhistorySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
   const excavatorHistory = new excavatorhistory();
   excavatorHistory.inserted_time = req.body.excavatorHistory
   excavatorHistory.hex_sno = req.body.excavatorHistory
   excavatorHistory.altitude = req.body.excavatorHistory
   excavatorHistory.direction = req.body.excavatorHistory
   excavatorHistory.engineStatus = req.body.excavatorHistory
   excavatorHistory.excavator_id = req.body.excavatorHistory
   excavatorHistory.excavator_status = req.body.excavatorHistory
   excavatorHistory.lat_direction = req.body.excavatorHistory
   excavatorHistory.latitude = req.body.excavatorHistory
   excavatorHistory.location_id = req.body.excavatorHistory
   excavatorHistory.long_direction = req.body.excavatorHistory
   excavatorHistory.longitude = req.body.excavatorHistory
   excavatorHistory.operator_id = req.body.excavatorHistory
   excavatorHistory.shift_id = req.body.excavatorHistory
   excavatorHistory.site_id = req.body.excavatorHistory
   excavatorHistory.speed = req.body.excavatorHistory
   excavatorHistory.state = req.body.excavatorHistory
   excavatorHistory.trackTime = req.body.excavatorHistory
   excavatorHistory.RFID_flag = req.body.excavatorHistory
   excavatorHistory.odometer = req.body.excavatorHistory
   excavatorHistory.power_indicator = req.body.excavatorHistory
   excavatorHistory.satellite_no = req.body.excavatorHistory
   excavatorHistory.seen_by_tipperid = req.body.excavatorHistory
   excavatorHistory.ignition_change_flag = req.body.excavatorHistory
   excavatorHistory.stored_data_flag = req.body.excavatorHistory
   excavatorHistory.ble_signal_strength = req.body.excavatorHistory
   excavatorHistory.distance = req.body.excavatorHistory
   excavatorHistory.tipperState = req.body.excavatorHistory
   excavatorHistory.History_Available = req.body.excavatorHistory
   excavatorHistory.trip_no = req.body.excavatorHistory
   excavatorHistory.userId = req.body.excavatorHistory
   excavatorHistory.branchId = req.body.branchId
    
    await excavatorHistory.save();
    return res.status(201).json(excavatorHistory);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAllExcavatorHistory = async (req: Request, res: Response) => {
  try {
    const startTime:any = req.query.startTime;
    const endTime:any = req.query.endTime;
    const tipperHistoryRepository = getRepository(excavatorhistory);
    const Excavatorhistory = await tipperHistoryRepository.find({
      where: {
        latitude: MoreThan(0),
        trackTime: Between(startTime, endTime),
      },
      order: {
        trackTime: 'ASC',
      },
    });
    return res.json(Excavatorhistory);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulkExcavatorHistory = async (req: Request, res: Response) => {
  if (req.body.excavatorHistory.length) {
    const excavatorHistoryData = req.body.excavatorHistory

    let responseData: any = []

    for (let i = 0; i < excavatorHistoryData.length; i++) {
      const element = excavatorHistoryData[i];
      const { error } = excavatorhistorySchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }

    try {

      for (let i = 0; i < excavatorHistoryData.length; i++) {
        const element = excavatorHistoryData[i];
        let excavatorHistoryUpdateData: any;

        if (element.id) {
          console.log("update");
          excavatorHistoryUpdateData = await updateDataExcavatorhistory(element)
        }

        else {
          excavatorHistoryUpdateData = await createDataExcavatorhistory(element)
          console.log("add");
        }

        responseData.push(excavatorHistoryUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataExcavatorhistory = async (data: any) => {
  const { error } = excavatorhistorySchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const excavatorHistory = await excavatorhistory.findOne(data.id);
    if (!excavatorHistory) {
      return { error: error.details[0].message }
    }
   excavatorHistory.inserted_time = data.inserted_time
   excavatorHistory.hex_sno = data.hex_sno
   excavatorHistory.altitude = data.altitude
   excavatorHistory.direction = data.direction
   excavatorHistory.engineStatus = data.engineStatus
   excavatorHistory.excavator_id = data.excavator_id
   excavatorHistory.excavator_status = data.excavator_status
   excavatorHistory.lat_direction = data.lat_direction
   excavatorHistory.latitude = data.latitude
   excavatorHistory.location_id = data.location_id
   excavatorHistory.long_direction = data.long_direction
   excavatorHistory.longitude = data.longitude
   excavatorHistory.operator_id = data.operator_id
   excavatorHistory.shift_id = data.shift_id
   excavatorHistory.site_id = data.site_id
   excavatorHistory.speed = data.speed
   excavatorHistory.state = data.state
   excavatorHistory.trackTime = data.trackTime
   excavatorHistory.RFID_flag = data.RFID_flag
   excavatorHistory.odometer = data.odometer
   excavatorHistory.power_indicator = data.power_indicator
   excavatorHistory.satellite_no = data.satellite_no
   excavatorHistory.seen_by_tipperid = data.seen_by_tipperid
   excavatorHistory.ignition_change_flag = data.ignition_change_flag
   excavatorHistory.stored_data_flag = data.stored_data_flag
   excavatorHistory.ble_signal_strength = data.ble_signal_strength
   excavatorHistory.distance = data.distance
   excavatorHistory.tipperState = data.tipperState
   excavatorHistory.History_Available = data.History_Available
   excavatorHistory.trip_no = data.trip_no
   excavatorHistory.userId = data.userId
   excavatorHistory.branchId = data.branchId

    await excavatorHistory.save();

    return excavatorHistory

  } catch (error) {
    return error
  }
};

const createDataExcavatorhistory = async (data: any) => {
  const { error } = excavatorhistorySchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {

    const excavatorHistory = new excavatorhistory();
    excavatorHistory.inserted_time = data.inserted_time
    excavatorHistory.hex_sno = data.hex_sno
    excavatorHistory.altitude = data.altitude
    excavatorHistory.direction = data.direction
    excavatorHistory.engineStatus = data.engineStatus
    excavatorHistory.excavator_id = data.excavator_id
    excavatorHistory.excavator_status = data.excavator_status
    excavatorHistory.lat_direction = data.lat_direction
    excavatorHistory.latitude = data.latitude
    excavatorHistory.location_id = data.location_id
    excavatorHistory.long_direction = data.long_direction
    excavatorHistory.longitude = data.longitude
    excavatorHistory.operator_id = data.operator_id
    excavatorHistory.shift_id = data.shift_id
    excavatorHistory.site_id = data.site_id
    excavatorHistory.speed = data.speed
    excavatorHistory.state = data.state
    excavatorHistory.trackTime = data.trackTime
    excavatorHistory.RFID_flag = data.RFID_flag
    excavatorHistory.odometer = data.odometer
    excavatorHistory.power_indicator = data.power_indicator
    excavatorHistory.satellite_no = data.satellite_no
    excavatorHistory.seen_by_tipperid = data.seen_by_tipperid
    excavatorHistory.ignition_change_flag = data.ignition_change_flag
    excavatorHistory.stored_data_flag = data.stored_data_flag
    excavatorHistory.ble_signal_strength = data.ble_signal_strength
    excavatorHistory.distance = data.distance
    excavatorHistory.tipperState = data.tipperState
    excavatorHistory.History_Available = data.History_Available
    excavatorHistory.trip_no = data.trip_no
    excavatorHistory.userId = data.userId
    excavatorHistory.branchId = data.branchId

    await excavatorHistory.save();

    return excavatorHistory
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deleteExcavatorHistory= async (req: Request, res: Response) => {
  try {
    const excavatorHistory = await excavatorhistory.findOne(req.params.id);
    if (!excavatorHistory) {
      return res.status(404).json({ error: 'excavatorhistory not found' });
    }

    await excavatorHistory.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const ExcavatorHistoryById = async (req: Request, res: Response) => {
  try {
    const excavatorHistory = await excavatorhistory.findOne(req.params.id);
    if (!excavatorHistory) {
      return res.status(404).json({ error: 'excavatorHistory not found' });
    }
    return res.json(excavatorHistory);
  } catch (error) {
    return InternalServerError(res, error);
  }
};



