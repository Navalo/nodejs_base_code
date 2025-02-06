function responseHandler(req, res, next) {
    res.success = (data, message = 'Success') => {
        res.status(200).json({ success: true, message, data });
    };

    res.error = (message = 'Something went wrong', statusCode = 500) => {
        if (typeof statusCode !== 'number' || statusCode < 100 || statusCode > 599) {
            statusCode = 500;
        }
        res.status(statusCode).json({ success: false, message });
    };

    next();
}

module.exports = responseHandler;