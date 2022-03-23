const User = require('../models/User.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const SALT_ROUNDS = 6

async function create(req, res) {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
		console.log('*****Step 2!!!', req.body.name)
		console.log(hashedPassword, 'this is the hashedpass')
		const user = await User.create({ name: req.body.name, email: req.body.email, password: req.body.hashedPassword })
		console.log (user, 'this is the user')
		console.log('*****Step 3!!!')
		const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '30d' })
		console.log('*****Step 3!!!')
		res.status(200).json(token) // send it to the frontend
		console.log('*****Step 4!!!')
	} catch (err) {
		res.status(400).json(err)
	}
}

async function login(req, res) {
	try {
		const user = await User.findOne({ email: req.body.email })
		if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error('Password Error')
		const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' })
		res.status(200).json(token)
	} catch (err) {
		res.status(400).json('Bad Credentials')
	}
}

module.exports = { create, login }