// routes/branch.js
const express = require('express');
const router = express.Router();
const { addBranch, renderBranchPage } = require('../controllers/branchController');  // Import controller methods

// GET route to render the branch page
router.get('/', renderBranchPage);  // Calls renderBranchPage to render the page and pass accounts

// POST route for adding a branch
router.post('/add', addBranch);  // Calls addBranch to handle adding the branch

module.exports = router;
