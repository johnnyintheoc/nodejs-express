$('button[name="del"]').on('click', function(e) {
    e.preventDefault();

    // retrieve values from contact.hbs template
    const contact_id = this.getAttribute('data-id');
    
    $.ajax({
        url: '/delContact',
        method: 'POST',
        data: {
            cid: contact_id // new data value for handler.js
        }
    })
    .then(function() {
        //alert('Contact removed.');
        location.reload();
    })
    .catch(function() {
        alert('Unable to remove contact.');
    });
});

$('button[type="submit"]').on('click', function(e) {
    e.preventDefault();

    // retrieve values from contact.hbs template
    const firstName = $('input[name="contact_first"]').val();
    const lastName = $('input[name="contact_last"]').val();
    const email = $('input[name="contact_email"]').val();

    $.ajax({
        url: '/addContact',
        method: 'POST',
        data: {
            first: firstName, // new data values for handler.js
            last: lastName,
            email: email
        }
    })
    .then(function() {
        //alert('Contact added.');
        location.reload();
    })
    .catch(function() {
        alert('Unable to add contact.');
    });
    
});
