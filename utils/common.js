const { pool } = require("../config/sql.config");

const getJsonResponse = (success, data, message, error) => {
  return {
    success: success,
    data: data,
    message: message,
    error: error,
  };
};
const commonWorker = (queryString, params, loggerInfo) => {
  return new Promise((resolve) => {
    const execRes = {
      queryErr: "",
      queryRes: "",
    };
    pool.getConnection(function (sqlErr, connection) {
      if (sqlErr) {
        console.log(`${loggerInfo} ${sqlErr}`);
        execRes.queryErr = sqlErr;
        return resolve(execRes);
      }
      connection.query(queryString, params, function (queryErr, queryRes) {
        connection.release();
        execRes.queryErr = queryErr;
        execRes.queryRes = queryRes;
        resolve(execRes);
      });
    });
  });
};

module.exports = { getJsonResponse, commonWorker };
