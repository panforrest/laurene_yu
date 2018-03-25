// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const arts = [
    {title:'Acting', img: 'LaureneYuActing.png', content: 'Acting and performing art redefine my brand.'},
    {title:'Visual Art', img: 'laurene_design1.png', content: 'My design makes my customers enjoy life more.'},
    {title:'Writing', img: 'writing.jpeg', content: 'My talents and passion for writing create what I really love'},
]

router.get('/', function(req, res){
    if ((!req.vertexSession) || (!req.vertexSession.user)) {
    	res.render('index', {notLoggedin: true})
    }

	res.render('index', {arts: arts, loggedin: true})
})

module.exports = router
