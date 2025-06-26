const successResponse = (data, message = "Success") => {
  return {
    status: "success",
    statusCode: 200,
    message,
    data,
    // timestamp: Date.now(),
  };
};

const errorResponse = (message = "Error", statusCode = 500) => {
  return {
    status: "error",
    statusCode,
    message,
    // timestamp: Date.now(),
  };
};

module.exports = {
  successResponse,
  errorResponse,
};
