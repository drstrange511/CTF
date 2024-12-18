// controllers/homeController.js
const homePage = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    res.render('home', { user: req.session.user });
};

module.exports = { homePage };
