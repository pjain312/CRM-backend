const { patient_leads } = require("../models/patient_leads");
const { getJsonResponse } = require("../utils/common");

const addPatientLeads = async (req, res) => {
  try {
    const response = await patient_leads.create(req.body);
    res.status(200).json(getJsonResponse(true, response, null, null));
  } catch (err) {
    logger.error(
      `patientLeads.controller.js - addPatientLeads - ${err.message}`
    );
    res.status(500).json(getJsonResponse(false, [], null, err.message));
  }
};

const getPatientLeads = async (req, res) => {
  try {
    const { _id } = req.query;
    const response = await patient_leads.findOne({ _id });
    res.status(200).json(getJsonResponse(true, response, null, null));  
  } catch (err) {
    logger.error(
      `patientLeads.controller.js - getPatientLeads - ${err.message}`
    );
    res.status(500).json(getJsonResponse(false, [], err.message, err.message));
  }
};

module.exports = {
  addPatientLeads,
  getPatientLeads,
};
