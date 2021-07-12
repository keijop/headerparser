const whoami = (req, res) => {
	console.log(req)
	return res.status(200).json({ ipaddress : req.ip , software : req.headers['user-agent'] })
} 

module.exports = whoami