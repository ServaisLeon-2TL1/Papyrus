const jwt = require('jsonwebtoken');


module.exports = {
    generateAccessToken: (user) => {
        return jwt.sign(user, process.env.ACCESS_TOKEN, {expiresIn: 60 * 60});
    },
    generateRefreshToken: (user) => {
        return jwt.sign(user, process.env.REFRESH_TOKEN, {expiresIn: 60 * 60});
    },
    authenticateToken: (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.sendStatus(401);
        }
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
            if (err) {
                return res.sendStatus(401);
            }
            req.user = user;
            next();
        });
    },
};