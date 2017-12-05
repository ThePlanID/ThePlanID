var functions = require('firebase-functions');
var admin = require('firebase-admin');

exports = module.exports =
    functions.https.onRequest((request, response) => 
    {
        var email, password;
        request.body.hasOwnProperty("email") ? email = request.body["email"] : response.send("303", "invalid format");
        request.body.hasOwnProperty("password") ? password = request.body["password"] : response.send("303", "invalid format");

        admin.auth().signOut().catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            response.send ("303", "Failed user");
        });
    }
);
