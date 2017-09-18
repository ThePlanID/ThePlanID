var functions = require('firebase-functions');
var admin = require('firebase-admin');
try {admin.initializeApp(functions.config().firebase);} catch(e) {} // You do that because the admin SDK can only be initialized once.


// Take the json file and upload as DB.
exports = module.exports =
	functions.https.onRequest((request, response) => 
	{
		// We are receiving a File.

		// Check if .json
		request.query.process.split('.').pop === 'json' ? pass : response.redirect(400, 'Bad Request');
		
		const proc = JSON.stringify(request.query.process);

		admin.database().ref('/process').push ({proc:proc}).then( snapshot =>{
			response.redirect(303, snapshot.ref);
		});
	});
  
