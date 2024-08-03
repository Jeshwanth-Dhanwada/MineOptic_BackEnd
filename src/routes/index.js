const express = require('express');
const app = express()
const fetchDetails = require('./fetchDetails')
const locations = require('./locations')
const fetchExacavators = require('./exacavations')
const fetchMinTime = require('./fetchMinTimeTipper')
app.use('/getTipperHistory', fetchDetails);
app.use('/getExacavators', fetchExacavators);
app.use('/getLocations', locations);
// app.use('/getMinTime', fetchMinTime);

app.get('/', async (_req, res, _next) => {
	// optional: add further things to check (e.g. connecting to dababase)
	const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
	};
	try {
		res.json(healthcheck);
	} catch (e) {
		healthcheck.message = e;
		res.status(503).send(healthcheck);
	}
});

module.exports = app