import express from 'express'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

/*
  Express Routes for signin/singout
*/
router.route('/auth/signin')
  .post(authCtrl.signin)
router.route('/auth/signout')
  .get(authCtrl.signout)

export default router
