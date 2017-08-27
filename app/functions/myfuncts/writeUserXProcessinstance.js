require ("./firebaseInit.js");

function writeUserXProcessinstance(iduser, date, idprocess){
	var data ={
		'iduser': iduser,
		'date': date,
		'idprocess': idprocess
	};

	var updates = {};

	updates['/UserXProcessinstance/' + iduser + idprocess] = data;

	return firebase.database().ref().update(updates);
}
