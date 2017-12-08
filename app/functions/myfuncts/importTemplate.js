var functions = require('firebase-functions');
var admin = require('firebase-admin');

var firebase = require('firebase');

try {admin.initializeApp(functions.config().firebase);} catch(e) {} // You do that because the admin SDK can only be initialized once.


// Take the json file and upload as DB.
exports = module.exports =
	functions.https.onRequest((request, response) => 
	{

		var proc, process, projects, previdToken, idToken;

		proc = request.body;

		proc.hasOwnProperty('process') ? process = proc["process"] : response.status(400).send('no process');

		proc.hasOwnProperty('idToken') ? previdToken = proc["idToken"] : response.status(400).send("void token");

		admin.auth().verifyIdToken(previdToken).then(decodedIdToken => {
			idToken = decodedIdToken.uid; //este es el que hay que usar
			next();  //
		  }).catch(error => {
			response.status(403).send('Unauthorized');
		  });

		admin.database().ref('/'+ idToken +'/processes').push ({process:Sprocess});

		if (proc.hasOwnProperty('projects')){
			projects = proc['projects'];			
			admin.database(s).ref('/'+ idToken +'/projects').push ({projects:projects}).then( snapshot =>{
				response.status(303).send(admin.database().ref);
			});
		} else {
			response.status(303).send(admin.database().ref);
		}
	}); 