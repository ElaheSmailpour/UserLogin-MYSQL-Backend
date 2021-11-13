const db = require("../models/index")
const User = db.users;
exports.createUser = async (req, res, next) => {
    const user = {
        username: req.body.username,
        gender: req.body.gender
    }
    console.log("user=", user)
    User.create(user).then((data) =>
        res.send(data)
    ).catch(err => {
        console.log(err)
        res.send(err)
    }

    )
}
