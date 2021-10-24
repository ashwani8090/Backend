var userdb = require("../models/userschema");

module.exports = {
    addUser: (data) => {
        return new Promise((resolve, reject) => {
            userdb.create(data, (err, res) => {
                if (res) {
                    resolve(res);
                } else {
                    reject(err);
                }
            })
        })
    },
    loginUser: (data) => {
        return new Promise((resolve, reject) => {
            userdb.find({ email: data.email, password: data.password }, (err, res) => {
                if (res.length) {
                    resolve(res);
                } else {
                    reject("username and password doesn't match");
                }
            })
        })
    },
}