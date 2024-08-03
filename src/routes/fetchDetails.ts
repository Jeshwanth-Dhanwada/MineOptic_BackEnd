import express, { Router } from 'express';
const database = require("../config/db.config")
import { header } from '../modals/header'

const route: Router = express.Router();

let isInError: number = 0;
let isErrorMsg: string = '';
let isErrorCode: string = '';

route.get('/', async (req, res) => {
  let result: any = '';
  isInError = 0;
  isErrorMsg = '';
  isErrorCode = '';

  const startTime: any = req.query.startTime;
  const endTime: any = req.query.endTime;
  console.log('startTime:', startTime, 'endTime:', endTime);

  const sql: () => Promise<any> = () => {
    let SQL: any = `select * from tipperhistory where latitude >0 and trackTime >='${startTime}' and trackTime <= '${endTime}' order by trackTime`;
    console.log('SQL --- > ', SQL, req.query);
    return new Promise((resolve, _reject) => {
      database.query(SQL, (err:any, result: string | any[]) => {
        if (err) {
          console.log('Error:', err);
          isInError = 1;
          isErrorCode = 'FILTER_ERROR';
          resolve('');
        } else {
          resolve(result);
          console.log('SQL --- > ', result.length);
        }
      });
    });
  };

  if (isInError === 0) {
    result = await sql();
    if (result && Array.isArray(result)) {
      result = result;
    }
    header(isErrorCode, isErrorMsg)
     .then((header) => {
        const response = {
          header,
          results: result,
        };
        return res.send(response);
      })
     .catch((err) => {
        res.send(err);
      });
  } else {
    console.log('get /api/ ERROR ');
    header(isErrorCode, isErrorMsg)
     .then((_header) => {
        const response = {
          isErrorMsg,
        };
        return res.send(response);
      })
     .catch((err) => {
        res.send(err);
      });
  }
});

export default route;