const User = require('../models/User')
const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')
// const SALT_ROUNDS = 6

async function create(req, res) {


	// const user = await User.create(req.body)
	// res.send({
	// 	token:'test 123'
	// })

	try {
		// const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
		// console.log('*****Step 2!!! req.name =', req.body.name)
		// console.log(hashedPassword, 'this is the hashedpass')
		// const user = await User.create({ name: req.body.name, email: req.body.email, password: req.body.password })
		 const user = await User.create(req.body)
		console.log (req.body, 'this is the .body')
		console.log('*****Step 2!!!')
		console.log(jwt, 'this it the jason webtoken')
		// const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '30d' })
		
		// const token = await jwt.sign()
		console.log('*****Step 3!!!', token)
	
		res.status(200).json({user}) // send it to the frontend
		console.log('*****Step 4!!!yay!!')
	} catch (err) {
		res.status(400).json(err)
	}
}

async function login(req, res) {
	try {
		const user = await User.findOne({ email: req.body.email })
		if (req.body.password !== user.password) throw new Error('Password Error')
		// const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' })
		console.log('this is the token coming jsonified:', token)
		res.status(200).json(token)
	} catch (err) {
		res.status(400).json('Bad Credentials')
	}
}

module.exports = { create, login }