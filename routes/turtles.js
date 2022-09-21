import { Router } from 'express'

import * as turtleCtrl from '../controllers/turtles.js'

const router = Router()

/* GET users listing. */
// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

router.get('/', turtleCtrl.index)

export {
  router
}
