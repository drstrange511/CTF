// controllers/branchController.js
let accounts = {
    'ff2c61957edd885d': { name: 'Alice', RUT: 'ff2c61957edd885d', branches: [] },
    '43bc2011d5f3d9fd': { name: 'Bob', RUT: '43bc2011d5f3d9fd', branches: [] }
};

const addBranch = (req, res) => {
    const userRUT = req.body.userRUT; // Access userRUT, not RUT
    const branchName = req.body.branchName; // Branch name entered by the user

    console.log("Request Body:", req.body); // Debugging to confirm what is being received
    console.log("User RUT:", userRUT); // Confirm RUT value being passed

    // Check if the account exists
    if (!accounts[userRUT]) {
        console.log("Account not found:", userRUT); // Debugging account lookup
        return res.status(404).send('Account not found');
    }

    // Add the branch to the user's account
    accounts[userRUT].branches.push(branchName);

    // Optionally, add a hidden flag for Bob's account
    if (userRUT === '654321') {
        accounts[userRUT].branches.push('CTF{IDOR_found}'); // Flag added to Bob's account
    }

    // Redirect after the branch is added
    res.redirect('/home');
};



// Render branch page (GET)
const renderBranchPage = (req, res) => {
    res.render('branch', { accounts: accounts });  // Pass the accounts object to the EJS view
};

module.exports = { addBranch, renderBranchPage };
