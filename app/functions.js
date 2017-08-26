require "firebaseInit.js";
//
// function userSession(id,userid,date,token,status){
// 	this.id = id;
// 	this.userid = userid;
// 	this.date = date;
// 	this.token = token;
// 	this.status = status;
// }
//
// function User(id, name, email, password, accountType, currentSesionToken){
// 	this.id = id;
// 	this.name = name;
// 	this.email = email;
// 	this.password = password;
// 	this.accountType = accountType;
// 	this.currentSesionToken = currentSesionToken;
// }
//
// function AccountType(id, name){
// 	this.id = id;
// 	this.name = name;
// }
//
// function UserSessionStatus(id, name){
// 	this.id = id;
// 	this.name = name;
// }

function writeUserXProcessinstance(iduser, date, idprocess){
	var data ={
		iduser: iduser,
		date: date,
		idprocess: idprocess
	};

	var updates = {};

	updates['/UserXProcessinstance/' + iduser + idprocess] = data;

	return firebase.database().ref().update(updates);
}

function readUserXProcessInstance(processinstanceID){
//TODO
};

function writeTaskXProcessintance(userid, taskid, processinstanceID, date, taskStatus){
	var data = {
		userid = userid;
		taskid = taskid;
		processinstanceID = processinstanceID;
		date = date;
		taskStatus = taskStatus;
	};


}

function Task(id, name, processAmount, taskType, valueAmount){
	this.id = id;
	this.name = name;
	this.processAmount = processAmount;
	this.taskType = taskType;
	this.valueAmount = valueAmount;
}

function TaskType(id, name){
	this.id = id;
	this.name = name;
}

function TaskStatus(id, name){
	this.id = id;
	this.name = name;
}

function Process(id, name, description, createDate, lastUpdateDate, virtualJson, avrgCost, realPrice){
	this.id = id;
	this.name = name;
	this.description = description;
	this.createDate = createDate;
	this.lastUpdateDate = lastUpdateDate;
	this.virtualJson = virtualJson;
	this.avrgCost = avrgCost;
	this.realPrice = realPrice;
}

function Stage(id, description, processid, icon, createDate){
	this.id = id;
	this.description = description;
	this.processid = processid;
	this.icon = icon;
	this.createDate =createDate;
}

function ProcessInstance(id, processid, procesStatusID, startDate, dueDate, createDate, taskDate){
	this.id = id;
	this.processid = processid;
	this.procesStatusID = procesStatusID;
	this.startDate = startDate;
	this.dueDate = dueDate;
	this.createDate = createDate;
	this.taskDate = taskDate;
}

function ProcessStatus(id, name){
	this.id = id;
	this.name = name;
}

function Workflow(id, date, fromStage, toStage){
	this.id = id;
	this.date = date;
	this.fromStage = fromStage;
	this.toStage = Stage;
}
