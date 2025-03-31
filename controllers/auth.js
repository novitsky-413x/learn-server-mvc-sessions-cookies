const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    // const isLoggedIn =
    //     req
    //         .get('Cookie')
    //         .split(';')
    //         .find((c) => c.trim().startsWith('loggedIn'))
    //         .split('=')[1] === 'true';
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false,
    });
};

exports.postLogin = (req, res, next) => {
    // res.setHeader('Set-Cookie', 'loggedIn=true; HttpOnly');
    User.findById('67d05ac9e95a8e3a84bf6873')
        .then((user) => {
            req.session.isLoggedIn = true;
            req.session.user = user;
            res.redirect('/');
        })
        .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
        console.log(err);
        res.redirect('/');
    });
};
