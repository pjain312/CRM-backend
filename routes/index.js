(function (routes) {
  "use strict";

  routes.init = function (app) {
    const patientLeads = require("./patientLeads.routes");
    app.use("/patientLeads", patientLeads);

    const appointments = require("./appointment.routes");
    app.use("/appointments", appointments);

    const packages = require("./packages.routes");
    app.use("/packages", packages);

    const sessions = require("./session.routes");
    app.use("/sessions", sessions);
    
    const authRoutes = require("./auth.routes");
    app.use("/auth", authRoutes);

    const userRoutes = require("./user.routes");
    app.use("/user", userRoutes);
  };
})(module.exports);
