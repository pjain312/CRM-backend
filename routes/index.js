(function (routes) {
  "use strict";

  routes.init = function (app) {
    const patientLeads = require("./patientLeads.routes");
    app.use("/patientLeads", patientLeads);
  };
})(module.exports);
