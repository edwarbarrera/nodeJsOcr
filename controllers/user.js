const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.singup = (req, res, next) => {
       bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'user crée' }))
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
}


exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(User => {
            if (User == null) {
                res.status(401).json({ message: 'c est pas bon frerot' })
            } else {
                bcrypt.compare(req.body.password, User.password)
                    .then(valid => {
                        if (!valid) {
                            res.status(401).json({ message: 'c est pas bon frerot' })
                        } else {
                            res.status(200).json({
                                userId: User.id,
                                token: jwt.sign(
                                    {userId: User.id}, 
                                    'RAONDOM_TOKEN_RANDAL', 
                                    {expiresIn: '18h'}
                                )
                            })
                        }
                    })
                    .catch(error => res.status(401).json({ message: 'c est pas bon frerot' }))
            }
        })
        .catch(error => res.status(500).json({ error: error }))
};