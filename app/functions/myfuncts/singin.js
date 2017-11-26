var functions = require('firebase-functions');
var admin = require('firebase-admin');
try {admin.initializeApp(functions.config().firebase);} catch(e) {} // You do that because the admin SDK can only be initialized once.

exports = module.exports =
    functions.https.onRequest((request, response) => 
    {
        const email, password;
        request.body.hasOwnProperty("email") ? email = request.body["email"] : response.send("303", "invalid format");
        request.body.hasOwnProperty("password") ? password = request.body["password"] : response.send("303", "invalid format");
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            response.send ("303", "Failed user");
          });
    }
);