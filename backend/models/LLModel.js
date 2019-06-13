const imp = require('./LLImp.js')
var list = new imp.LinkedList();

function insertElement(data) 
{
	var tmp = list.add(data);
	var obj = new Object();
	obj.data = tmp;
	return obj;
}

function getElement(index) 
{
	var tmp = list.get(index);
	var obj = new Object();
	obj.data = tmp;
	return obj;
}

function getAllElements()
{
	var i = 0, arr = [];
	var tmp = list.get(i);
	while(tmp != null)
	{
		arr.push(tmp);
		i++;
		tmp = list.get(i);
	}
	return arr;
}

function updateElement(index, data) 
{
	var tmp = list.update(index, data);
	var obj = new Object();
	obj.data = tmp;
	obj.index = index;
	return obj;
}

function deleteElement(index) 
{
	var tmp = list.remove(index);
	var obj = new Object();
	obj.data = tmp;
	obj.index = index;
	return obj;
}

module.exports = {
    getElement,
    getAllElements,
    insertElement,
    updateElement, 
    deleteElement
}