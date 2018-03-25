// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.post('/register', function(req, res){
    turbo.createUser(req.body)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})

})

router.post('/login', function(req, res){
	const credentials = {
		email: req.body.email,
		password: req.body.password
	}
	
	turbo.login(credentials)
	.then(data => {
		req.vertexSession.user = {id: data.id} // set session with user ID
		// res.json({
		// 	confirmation: 'success',
		// 	data: data
		// })
		res.redirect('/')
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

router.get('/logout', function(req, res){
	req.vertexSession.reset()
	res.redirect('/')
})

module.exports = router
