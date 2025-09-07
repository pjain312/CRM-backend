(function (routes) {
  "use strict";

  routes.init = function (app) {
    const patientLeads = require("./patientLeads.routes");
    app.use("/patientLeads", patientLeads);

    const appointments = require("./appointment.routes");
    app.use("/appointments", appointments);
  };
})(module.exports);
