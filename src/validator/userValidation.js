var userdb = require("../models/userschema");
var { ValidationError } = require('../error');
var { errorHandler } = require('../response-handlers');

module.exports = {
    checkUserEmailExist: (req, res, next) => {
        userdb.find({ 'email': '' + req.body.email }, (err, result) => {
            if (result?.length) {
                return errorHandler(res, 422, new ValidationError('Email Already Exist', 'Email Already Exist', null, null, null));
            } else {
                return next()
            }
        })
    },
    checkValidParams: (req, res, next) => {
        const { email, password } = req.body;
        console.log(email, password)
        if (email && password) {
            return next();
        } else {
            return errorHandler(res, 400, new ValidationError('Email and password required', 'Email and password required', null, null, null));
        }
    }
}