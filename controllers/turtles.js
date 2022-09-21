import { Turtle } from '../models/turtle.js'

function index(req, res) {
  Turtle.find({})
  .then(turtles => {
    res.render('turtles/index', {
      turtles: turtles, title: 'Express TMNT'
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
	index
}