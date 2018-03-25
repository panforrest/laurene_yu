// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

// const arts = [
//     {title:'Acting', img: 'LaureneYuActing.png', content: 'Acting and performing art redefine my brand.', link: 'acting'},
//     {title:'Visual Art', img: 'laurene_design1.png', content: 'My design makes my customers enjoy life more.', link: 'design'},
//     {title:'Writing', img: 'writing.jpeg', content: 'My talents and passion for writing create what I really love', link: 'writing'},
// ]

router.get('/', function(req, res){

	const arts = [
	    {title:'Acting', img: 'LaureneYuActing.png', content: 'Acting and performing art redefine my brand.', link: '/portfolio/acting'},
	    {title:'Visual Art', img: 'laurene_design1.png', content: 'My design makes my customers enjoy life more.', link: '/portfolio/design'},
	    {title:'Writing', img: 'writing.jpeg', content: 'My talents and passion for writing create what I really love', link: '/portfolio/writing'},
	]


    if ((!req.vertexSession) || (!req.vertexSession.user)) {
    	res.render('index', {notLoggedin: true})
    }

	res.render('index', {arts: arts, loggedin: true})
})

router.get('/portfolio/acting', function(req, res){

    if ((!req.vertexSession) || (!req.vertexSession.user)) {
    	res.render('index', {notLoggedin: true})
    }

    const arts = [
	    {title:'Film', img: 'acting3.png', content: 'Film project description and date', link: '/portfolio/acting'},
	    {title:'Television', img: 'acting2.png', content: 'Television project description and date', link: '/portfolio/acting'},
	    {title:'Theater', img: 'acting1.png', content: 'Theater project description and date', link: '/portfolio/acting'},
	]

    res.render('acting', {arts: arts, loggedin: true})
})

router.get('/portfolio/design', function(req, res){

    if ((!req.vertexSession) || (!req.vertexSession.user)) {
    	res.render('index', {notLoggedin: true})
    }

    const arts = [
	    {title:'Artwork 1', img: 'designWork.jpg', content: 'Artwork 1 description and date', link: '/portfolio/design'},
	    {title:'Artwork 2', img: 'laurene_design.jpg', content: 'Artwork 2 description and date', link: '/portfolio/design'},
	    {title:'Artwork 3', img: 'design4.jpg', content: 'Artwork 3 description and date', link: '/portfolio/design'},
	]

    res.render('design', {arts: arts, loggedin: true})
})

router.get('/portfolio/writing', function(req, res){

    if ((!req.vertexSession) || (!req.vertexSession.user)) {
    	res.render('index', {notLoggedin: true})
    }

    const arts = [
	    {title:'writing Sample 1', img: 'i-am-a-writer.jpg', content: 'Writing project 1 description and date', link: '/portfolio/writing'},
	    {title:'writing Sample 2', img: 'writing.jpeg', content: 'Writing project 2 description and date', link: '/portfolio/writing'},
	    {title:'writing Sample 3', img: 'i_am_an_artist.jpg', content: 'Writing project 3 description and date', link: '/portfolio/writing'},
	]

    res.render('writing', {arts: arts, loggedin: true})
})

module.exports = router
