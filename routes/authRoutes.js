const {Router} = require('express');
const authControler = require('../controllers/authcontrollers');
const router = Router();

router.get('/signup',authControler.signup_get);
router.post('/signup',authControler.signup_post);
router.get('/login',authControler.login_get);
router.post('/login',authControler.login_post);

module.exports = router;