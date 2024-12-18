// controllers/authController.js
const accounts = {
    'ff2c61957edd885d': { name: 'Alice', RUT: 'ff2c61957edd885d', branches: [] },
    '654321': { name: 'Bob', RUT: '654321', branches: [] }
};

// Show login page
const loginPage = (req, res) => {
    res.render('login');
};

// Handle user login
const loginUser = (req, res) => {
    const { RC2: RC2 } = req.body;
    console.log(RC2);

    if (accounts[RC2]) {
        req.session.user = accounts[RC2];
        return res.redirect('/home');
    } else {
        return res.render('login', { error: 'Invalid RUT. Please try again.' });
    }
};

// Handle user logout
const logoutUser = (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.redirect('/home');
        res.redirect('/login');
    });
};

module.exports = { loginPage, loginUser, logoutUser };
