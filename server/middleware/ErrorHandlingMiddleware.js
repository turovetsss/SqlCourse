const ApiError = require('../error/ApiError');

module.exports = function errorHandlingMiddleware(err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message });
    }
  
}