const express = require('express');
const router = express.Router();
const { addUser, loginUser } = require('../api');
const { checkUserEmailExist, checkValidParams } = require('../validator/userValidation')
var { ValidationError } = require('../error');
var { errorHandler } = require('../response-handlers');

router.get('/', (req, res) => {
  res.send('good day')
})

router.post('/adduser', checkValidParams, checkUserEmailExist, async (req, res, next) => {
  try {
    let user = await addUser(req.body);
    if (user) {
      res.send({
        id: user._id,
        msg: 'user added succesfully',
        status: 200
      });
    } else {
      return errorHandler(res, 422, new ValidationError('user not created', 'user not created', null, null, null));

    }
  } catch (err) {
    next(JSON.stringify(err))
  }
})

router.post('/login', checkValidParams, async (req, res, next) => {
  try {
    let user = await loginUser(req.body);
    if (user) {
      res.send({
        msg: 'login successfully',
        status: 200,
        id: user[0]._id
      });

    } else {
      return errorHandler(res, 422, new ValidationError('Unable to login', 'Unable to login', null, null, null));

    }
  } catch (err) {
    return errorHandler(res, 422, new ValidationError(err, err, null, null, null));
  }
})





module.exports = router;