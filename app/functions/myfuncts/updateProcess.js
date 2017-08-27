var functions = require('firebase-functions');
var admin = require('firebase-admin');
try {admin.initializeApp(functions.config().firebase);} catch(e) {} // You do that because the admin SDK can only be initialized once.

exports = module.exports =
	functions.https.onRequest((request, response) => {
	const proc = request.query.process;
	admin.database().ref('/process').push ({proc:proc}).then( snapshot =>{
		response.redirect(303, snapshot.ref);
	});
});

