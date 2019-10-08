const connection = require('./connection.js');

// object relational mapping
const orm = {
    selectAll: function(cb) {
        const qry = `SELECT id, first, last, email FROM nodejs_db.contacts`;
        connection.query(qry, function(err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    },

    insert: function(firstName, lastName, email, cb) {
        console.log('inserting: ' + firstName + ' ' + lastName + ' ' + email);
        const qry = `INSERT INTO nodejs_db.contacts(first, last, email) VALUES('${firstName}','${lastName}','${email}')`;
        connection.query(qry, function(err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    },

    delete: function(cid, cb) {
        console.log('removing ' + cid);
        const qry = `DELETE FROM nodejs_db.contacts WHERE id=${cid}`;
        connection.query(qry, function(err) {
            if (err) cb(err, null);
            cb(null, null);
        });
    }
};

module.exports = orm;
