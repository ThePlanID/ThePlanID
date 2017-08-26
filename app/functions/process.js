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
