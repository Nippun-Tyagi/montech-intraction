const router = require("express").Router()

const {User, getUser, getAllUser} = require("../controler/userControler");

router.route("/User").post(User).get(getAllUser)

router.route("/User/:id").get(getUser)


module.exports = router