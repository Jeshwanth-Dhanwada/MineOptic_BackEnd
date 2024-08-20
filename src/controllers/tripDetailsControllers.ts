import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { tripDetails } from "../entity/tripDetails";

const tripDetailsSchema = Joi.object({
  inserted_time: Joi.date(),
  hex_sno: Joi.number().allow(null,""),
  driver_id: Joi.string().allow(null,""),
  first_excavator_id: Joi.string().allow(null,""),
  first_operator_id: Joi.string().allow(null,""),
  location_id: Joi.string().allow(null,""),
  pdate: Joi.date().allow(null,""),
  second_excavator_id: Joi.string().allow(null,""),
  second_operator_id: Joi.string().allow(null,""),
  shift_id: Joi.string().allow(null,""),
  te_start_time: Joi.date().allow(null,""),
  tipper_id: Joi.string().allow(null,""),
  tipper_trip_no: Joi.number().allow(null,""),
  trip_duration: Joi.number().allow(null,""),
  trip_flag: Joi.string().allow(null,""),
  trip_no: Joi.number().allow(null,""),
  trip_time: Joi.date().allow(null,""),
  upload_file: Joi.string().allow(null,""),
  material_id: Joi.string().allow(null,""),
  trip_distance: Joi.number().allow(null,""),
  odometer: Joi.number().allow(null,""),
  coolant_level: Joi.number().allow(null,""),
  fuel_level: Joi.number().allow(null,""),
  total_fuel_consumed: Joi.number().allow(null,""),
  total_hours: Joi.number().allow(null,""),
  branchId: Joi.string().allow(null,""),
});

export const createtripDetails = async (req: Request, res: Response) => {
  const { error } = tripDetailsSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
          const tripdetails = new tripDetails();
          tripdetails.inserted_time = req.body.inserted_time
          tripdetails.hex_sno = req.body.hex_sno
          tripdetails.driver_id = req.body.driver_id
          tripdetails.first_excavator_id = req.body.first_excavator_id
          tripdetails.first_operator_id = req.body.first_operator_id
          tripdetails.location_id = req.body.location_id
          tripdetails.pdate = req.body.pdate
          tripdetails.second_excavator_id = req.body.second_excavator_id
          tripdetails.second_operator_id = req.body.second_operator_id
          tripdetails.shift_id = req.body.shift_id
          tripdetails.te_start_time = req.body.te_start_time
          tripdetails.tipper_id = req.body.tipper_id
          tripdetails.tipper_trip_no = req.body.tipper_trip_no
          tripdetails.trip_duration = req.body.trip_duration
          tripdetails.trip_flag = req.body.trip_flag
          tripdetails.trip_no = req.body.trip_no
          tripdetails.trip_time = req.body.trip_time
          tripdetails.upload_file = req.body.upload_file
          tripdetails.material_id = req.body.material_id
          tripdetails.trip_distance = req.body.trip_distance
          tripdetails.odometer = req.body.odometer
          tripdetails.coolant_level = req.body.coolant_level
          tripdetails.fuel_level = req.body.fuel_level
          tripdetails.total_fuel_consumed = req.body.total_fuel_consumed
          tripdetails.total_hours = req.body.total_hours
          tripdetails.branchId = req.body.branchId
    
    await tripdetails.save();
    return res.status(201).json(tripdetails);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const getAlltripDetails = async (_: Request, res: Response) => {
  try {
    const tripdetails = await tripDetails.find();
    return res.json(tripdetails);
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const updateBulktripDetails = async (req: Request, res: Response) => {
  if (req.body.trucksdetails.length) {
    const truckDetailsData = req.body.trucksdetails

    let responseData: any = []

    for (let i = 0; i < truckDetailsData.length; i++) {
      const element = truckDetailsData[i];
      const { error } = tripDetailsSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
    }
    try {

      for (let i = 0; i < truckDetailsData.length; i++) {
        const element = truckDetailsData[i];
        let truckDetailsUpdateData: any;

        if (element.id) {
          console.log("update");
          truckDetailsUpdateData = await updatetruckDetails(element)
        }
        else {
          truckDetailsUpdateData = await createtruckDetails(element)
          console.log("add");
        }
        responseData.push(truckDetailsUpdateData);
      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }
};

const updatetruckDetails = async (data: any) => {
  const { error } = tripDetailsSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const tripdetails = await tripDetails.findOne(data.id);
    if (!tripdetails) {
      return { error: error.details[0].message }
    }
    tripdetails.inserted_time = data.inserted_time
    tripdetails.hex_sno = data.hex_sno
    tripdetails.driver_id = data.driver_id
    tripdetails.first_excavator_id = data.first_excavator_id
    tripdetails.first_operator_id = data.first_operator_id
    tripdetails.location_id = data.location_id
    tripdetails.pdate = data.pdate
    tripdetails.second_excavator_id = data.second_excavator_id
    tripdetails.second_operator_id = data.second_operator_id
    tripdetails.shift_id = data.shift_id
    tripdetails.te_start_time = data.te_start_time
    tripdetails.tipper_id = data.tipper_id
    tripdetails.tipper_trip_no = data.tipper_trip_no
    tripdetails.trip_duration = data.trip_duration
    tripdetails.trip_flag = data.trip_flag
    tripdetails.trip_no = data.trip_no
    tripdetails.trip_time = data.trip_time
    tripdetails.upload_file = data.upload_file
    tripdetails.material_id = data.material_id
    tripdetails.trip_distance = data.trip_distance
    tripdetails.odometer = data.odometer
    tripdetails.coolant_level = data.coolant_level
    tripdetails.fuel_level = data.fuel_level
    tripdetails.total_fuel_consumed = data.total_fuel_consumed
    tripdetails.total_hours = data.total_hours
    tripdetails.branchId = data.branchId

    await tripdetails.save();

    return tripdetails

  } catch (error) {
    return error
  }
};

const createtruckDetails = async (data: any) => {
  const { error } = tripDetailsSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {

    const tripdetails = new tripDetails();
          tripdetails.inserted_time = data.inserted_time
          tripdetails.hex_sno = data.hex_sno
          tripdetails.driver_id = data.driver_id
          tripdetails.first_excavator_id = data.first_excavator_id
          tripdetails.first_operator_id = data.first_operator_id
          tripdetails.location_id = data.location_id
          tripdetails.pdate = data.pdate
          tripdetails.second_excavator_id = data.second_excavator_id
          tripdetails.second_operator_id = data.second_operator_id
          tripdetails.shift_id = data.shift_id
          tripdetails.te_start_time = data.te_start_time
          tripdetails.tipper_id = data.tipper_id
          tripdetails.tipper_trip_no = data.tipper_trip_no
          tripdetails.trip_duration = data.trip_duration
          tripdetails.trip_flag = data.trip_flag
          tripdetails.trip_no = data.trip_no
          tripdetails.trip_time = data.trip_time
          tripdetails.upload_file = data.upload_file
          tripdetails.material_id = data.material_id
          tripdetails.trip_distance = data.trip_distance
          tripdetails.odometer = data.odometer
          tripdetails.coolant_level = data.coolant_level
          tripdetails.fuel_level = data.fuel_level
          tripdetails.total_fuel_consumed = data.total_fuel_consumed
          tripdetails.total_hours = data.total_hours
          tripdetails.branchId = data.branchId

    await tripdetails.save();

    return tripdetails
  } catch (error) {
    console.log(error)
    return error
  }
};

export const deletetruckDetails = async (req: Request, res: Response) => {
  try {
    const tripdetails = await tripDetails.findOne(req.params.id);
    if (!tripdetails) {
      return res.status(404).json({ error: 'tripDetails not found' });
    }

    await tripdetails.remove();
    return res.status(204).end();
  } catch (error) {
    return InternalServerError(res, error);
  }
};

export const truckDetailsById = async (req: Request, res: Response) => {
  try {
    const tripdetails = await tripDetails.findOne(req.params.id);
    if (!tripdetails) {
      return res.status(404).json({ error: 'tripdetails not found' });
    }
    return res.json(tripdetails);
  } catch (error) {
    return InternalServerError(res, error);
  }
};



