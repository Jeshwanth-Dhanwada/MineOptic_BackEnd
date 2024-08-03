const  express = require('express');
const route = express.Router();
const database = require("../config/db.config")
const getHeaderNode = require('../modals/header').header;
var isInError = 0;
var isErrorMsg = "";
var isErrorCode = "";

route.get("/",  async (req, res) => {
    let result = "";
	isInError = 0;
	isErrorMsg = "";
	isErrorCode = "";
    const startTime = req.query.startTime;
    const endTime = req.query.endTime;

    let sql = () => {
        let SQL = `select * from excavatorhistory where latitude >0 and trackTime >='${startTime}' and trackTime <= '${endTime}' order by trackTime`;
        console.log("SQL --- > ", SQL, req.query);
        return new Promise((resolve, reject) => {
            database.query(SQL, (err, result) => {
                if(err){
                    console.log("Error:" , err);
                    isInError= 1;
                    isErrorCode="FILTER_ERROR";
                    if(err.sqlState == 41001) {
                        isErrorMsg = "Make sure to provide your login.";
                    } else {
                        isErrorMsg = err.sqlState + ": We had difficulty performaing this action.  Pleae report his number to your contact.";
                    }
                    resolve("");
                }
                else {
                    resolve(result);
                }
            });
        });
    }
    if(isInError == 0){
        result = await sql();
        getHeaderNode(isErrorCode, isErrorMsg)
        .then((header) => {
            let response = {
                header: header,
                results: result,
            };
           return res.send(response);
        })
        .catch((err) => {
            res.send(err);
        });
    } else {
        // end isError
		console.log("get /api/ ERROR ");
		getHeaderNode(isErrorCode, isErrorMsg)
			.then((header) => {
				let response = {
					isErrorMsg: isErrorMsg,
				};
			  return res.send(response);
			})
			.catch((err) => {
				res.send(err);
			});
	} // end isError
});

module.exports = route;
