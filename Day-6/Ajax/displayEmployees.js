alert("this script is loaded only now");
function createTableFor(employees){
	var result = "<table cellpadding='5' border='1'>";
	result += "<tr><th>S.No</th><th>Id</th><th>Name</th><th>Salary</th>";
	$.each(employees,function(index,emp){
		result += "<tr><td>" + (index+1) + "</td><td>" + emp.id + "</td><td>" + emp.name + "</td><td>" + emp.salary + "</td></tr>";
	});
	result += "</table>"
	return result;
}
