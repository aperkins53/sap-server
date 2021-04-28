const router = require('express').Router();
const User = require('../db').import('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validateSession = require('../middleware/validate-session');

router.post('/register', (req, res) => {
    User.create({
        firstName: req.body.user.firstName,
        lastName: req.body.user.lastName,
        email: req.body.user.email,
        password: bcrypt.hashSync(req.body.user.password, 10),
        role: 'user'
    })
        .then(function success(user){
            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });

            res.json({
                user: user,
                message: 'User successfully created',
                sessionToken: token
            });
        })
        .catch(err => res.status(500).json({ error: err }))
});

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.user.email,
    },
  })
    .then(function success(user) {
      if (user) {
        bcrypt.compare(req.body.user.password, user.password, function (err, matches) {
            if (matches) {
              let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});

              res.status(200).json({
                user: user,
                message: "User successfully logged in",
                sessionToken: token,
              });
            } else {
              res.status(502).send({ error: "Login failed" });
            }
          }
        );
      } else {
        res.status(500).json({ error: "User does not exist." });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

// router.put('/admin/:id', validateSession, (req, res) => {
//   const makeAdmin = {
//     role: 'admin'
//   };

//   const query = {where: {id: req.user.id }};

//   User.update(makeAdmin, query)
//     .then((user) => res.status(200).json(user))
//     .catch((err) => res.status(500).json({ error: err, message: 'cannot make user an admin'})); 
// });

module.exports = router;