const { createArtical, updateArtical, getArtical, getAllArtical, ApproveStatus } = require("../controler/articleControler")

const router = require("express").Router()

router.route('/createArtical').post(createArtical)
router.route('/Artical/:id').get(getArtical).put(updateArtical)
router.route('/Articals').get(getAllArtical).put(ApproveStatus)


module.exports = router