const express = require('express')

const User = require('./db/models/user')
const Video = require('./db/models/video')
const setupDb = require('./db/db-setup')
// models


setupDb()

const app = express()
app.use(express.json())

app.get('/user/:id', async (req, res, next) => {
	try {
		const { id } = req.params
		const user = await User.query().findById(id).withGraphFetched('channel')
		res.json(user)
	} catch (e) {
		console.error(e)
		res.status(500).json(e)
	}

})

app.get('/videos', async (req, res, next) => {
	try {
		const videos = await Video.query().withGraphFetched('channel')
		res.json(videos)
	} catch (e) {
		console.error(e)
		res.status(500).json(e)
	}

})

app.listen(8081, () => {
	console.log('Server started at 8081')
})