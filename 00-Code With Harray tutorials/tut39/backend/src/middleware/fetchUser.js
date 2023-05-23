const jwt = require('jsonwebtoken');
const JWT_SECRET = 'mynameis$khan'

const fetchUser = async (req, res, next) => {
    try {
        //* Get User from jwt token and add id to request obj
        const token = req.header('auth-token')
        if (!token) return res.status(401).json({ errors: 'Please authenticate using valid auth-token' });

        const data = await jwt.verify(token, JWT_SECRET)
        req.user = data.user

        next()
    } catch (error) {
        console.log('error 🐹 : ' + error)
        res.status(401).send('Internal Server Error')
    }
}

module.exports = fetchUser