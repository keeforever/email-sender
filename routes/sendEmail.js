const {Router} = require("express")
const router = Router()
const sendEmail = require('../controllers/sendEmail')

router.route('/send').get(sendEmail)

module.exports = router