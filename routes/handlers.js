const express = require('express');
const orm = require('../config/orm.js');
const router = express.Router();

// GET
router.get('/', function(req, res) {
    res.render('index', {style:'index', pg:'index'});
});

router.get('/about', function(req, res) {
    res.render('about', {style:'index', pg:'about'});
});

router.get('/contact', function(req, res) {
    orm.selectAll(function(err, contacts) {
        if (err) {
            return res.status(501).json({
                message: 'Error: Unable to query database'
            });
        }
        res.render('contact', {contacts, style:'index', pg:'contact'});
    });
});

// POST
router.post('/delContact', (req, res) => {
    // this value comes from app.js
    const cid = req.body.cid;

    orm.delete(cid, function(err) {
        if (err) {
            return res.status(401).json({
                message: 'Unable to remove contact.'
            });
        }
        res.status(200).end();
    });
});

router.post('/addContact', (req, res) => {
    // these values are from app.js
    const firstName = req.body.first;
    const lastName = req.body.last;
    const email = req.body.email;

    orm.insert(firstName, lastName, email, function(err, contact) {
        if (err) {
            return res.status(401).json({
                message: 'Unable to add contact.'
            });
        }

        return res.json({
            first: firstName,
            last: lastName,
            email: email,
            id: contact.insertid
        });
    });
});

module.exports = router;
