require ("./firebaseInit.js");

function writeTaskXProcessintance(userid, taskid, processinstanceID, date, taskStatus){
	var data = {
		'userid': userid,
		'taskid' : taskid,
		'processinstanceID' : processinstanceID,
		'date' : date,
		'taskStatus' : taskStatus
	};
}
