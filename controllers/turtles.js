import { turtles } from '../data/turtle-data.js'

function index(req, res) {
  res.render('turtles/index', {
    turtles: turtles, title: 'Express TMNT'
  })
}

export {
	index
}