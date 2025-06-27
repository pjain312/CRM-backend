const getJsonResponse = (success, data, message, error) => {
  return {
    success: success,
    data: data,
    message: message,
    error: error,
  };
};

module.exports = { getJsonResponse };
