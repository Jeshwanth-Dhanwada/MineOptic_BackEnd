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
});

export const createtripDetails = async (req: Request, res: Response) => {
  const { error } = tripDetailsSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
          const tripdetails = new tripDetails();
          tripdetails.inserted_time = req.body.tripdetails
          tripdetails.hex_sno = req.body.tripdetails
          tripdetails.driver_id = req.body.tripdetails
          tripdetails.first_excavator_id = req.body.tripdetails
          tripdetails.first_operator_id = req.body.tripdetails
          tripdetails.location_id = req.body.tripdetails
          tripdetails.pdate = req.body.tripdetails
          tripdetails.second_excavator_id = req.body.tripdetails
          tripdetails.second_operator_id = req.body.tripdetails
          tripdetails.shift_id = req.body.tripdetails
          tripdetails.te_start_time = req.body.tripdetails
          tripdetails.tipper_id = req.body.tripdetails
          tripdetails.tipper_trip_no = req.body.tripdetails
          tripdetails.trip_duration = req.body.tripdetails
          tripdetails.trip_flag = req.body.tripdetails
          tripdetails.trip_no = req.body.tripdetails
          tripdetails.trip_time = req.body.tripdetails
          tripdetails.upload_file = req.body.tripdetails
          tripdetails.material_id = req.body.tripdetails
          tripdetails.trip_distance = req.body.tripdetails
          tripdetails.odometer = req.body.tripdetails
          tripdetails.coolant_level = req.body.tripdetails
          tripdetails.fuel_level = req.body.tripdetails
          tripdetails.total_fuel_consumed = req.body.tripdetails
          tripdetails.total_hours = req.body.tripdetails
    
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
    tripdetails.inserted_time = data.tripdetails
    tripdetails.hex_sno = data.tripdetails
    tripdetails.driver_id = data.tripdetails
    tripdetails.first_excavator_id = data.tripdetails
    tripdetails.first_operator_id = data.tripdetails
    tripdetails.location_id = data.tripdetails
    tripdetails.pdate = data.tripdetails
    tripdetails.second_excavator_id = data.tripdetails
    tripdetails.second_operator_id = data.tripdetails
    tripdetails.shift_id = data.tripdetails
    tripdetails.te_start_time = data.tripdetails
    tripdetails.tipper_id = data.tripdetails
    tripdetails.tipper_trip_no = data.tripdetails
    tripdetails.trip_duration = data.tripdetails
    tripdetails.trip_flag = data.tripdetails
    tripdetails.trip_no = data.tripdetails
    tripdetails.trip_time = data.tripdetails
    tripdetails.upload_file = data.tripdetails
    tripdetails.material_id = data.tripdetails
    tripdetails.trip_distance = data.tripdetails
    tripdetails.odometer = data.tripdetails
    tripdetails.coolant_level = data.tripdetails
    tripdetails.fuel_level = data.tripdetails
    tripdetails.total_fuel_consumed = data.tripdetails
    tripdetails.total_hours = data.tripdetails

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
          tripdetails.inserted_time = data.tripdetails
          tripdetails.hex_sno = data.tripdetails
          tripdetails.driver_id = data.tripdetails
          tripdetails.first_excavator_id = data.tripdetails
          tripdetails.first_operator_id = data.tripdetails
          tripdetails.location_id = data.tripdetails
          tripdetails.pdate = data.tripdetails
          tripdetails.second_excavator_id = data.tripdetails
          tripdetails.second_operator_id = data.tripdetails
          tripdetails.shift_id = data.tripdetails
          tripdetails.te_start_time = data.tripdetails
          tripdetails.tipper_id = data.tripdetails
          tripdetails.tipper_trip_no = data.tripdetails
          tripdetails.trip_duration = data.tripdetails
          tripdetails.trip_flag = data.tripdetails
          tripdetails.trip_no = data.tripdetails
          tripdetails.trip_time = data.tripdetails
          tripdetails.upload_file = data.tripdetails
          tripdetails.material_id = data.tripdetails
          tripdetails.trip_distance = data.tripdetails
          tripdetails.odometer = data.tripdetails
          tripdetails.coolant_level = data.tripdetails
          tripdetails.fuel_level = data.tripdetails
          tripdetails.total_fuel_consumed = data.tripdetails
          tripdetails.total_hours = data.tripdetails

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



