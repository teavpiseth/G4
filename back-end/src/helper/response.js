const successResponse = (data, message = "Success") => {
  return {
    status: "success",
    statusCode: 200,
    message,
    data,
    errorCode: 0, // optional: for frontend handling
    errors: [], // optional: validation or details
  };
};

const errorResponse = (message = "Error", statusCode = 500) => {
  return {
    status: "error",
    statusCode,
    message,
  };
};

module.exports = {
  successResponse,
  errorResponse,
};
