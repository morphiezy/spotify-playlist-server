const responseSuccess = function (response, statusCode, values) {
    var data = {
        status: "SUCCESS",
        data: values,
    };
    response.status(statusCode).json(data);
    response.end();
};

const responseFailed = function (response, statusCode, message) {
    var data = {
        status: "FAILED!",
        message: message,
    };
    response.status(statusCode).json(data);
    response.end();
};

module.exports = {
    responseSuccess,
    responseFailed
}