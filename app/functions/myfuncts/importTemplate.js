var functions = require('firebase-functions');
var admin = require('firebase-admin');
try {admin.initializeApp(functions.config().firebase);} catch(e) {} // You do that because the admin SDK can only be initialized once.


// Take the json file and upload as DB.
exports = module.exports =
	functions.https.onRequest((request, response) => 
	{
				
		var uid, proc;
		const process, projects
		
		uid = functions.auth().currentUser.uid;		
		uid === null ? true : response.status(303).send('No user');

		proc = request.body;
		proc.hasOwnProperty('process') ? process = proc["process"] : response.status(400).send('no process');

		admin.database().ref('/'+ uid +'/processes').push ({process:process});

		if (proc.hasOwnProperty('projects')){
			projects = proc['projects'];			
			admin.database().ref('/'+ uid +'/projects').push ({projects:projects}).then( snapshot =>{
				response.status(303).send(admin.database().ref);
			});
		} else {
			response.status(303).send(admin.database().ref);
		}
	}); 