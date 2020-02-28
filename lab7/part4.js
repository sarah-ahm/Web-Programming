(function () {

	var resources = "http://students.engr.scu.edu/~adiaztos/resources/";

	// Load sample1.php
	$("#sample1").load("http://students.engr.scu.edu/~adiaztos/resources/sample1.php");

	// Load sample2.php
	$("#sample2").load("http://students.engr.scu.edu/~adiaztos/resources/sample2.php");

	// Get sample3.php
	$.get("http://students.engr.scu.edu/~adiaztos/resources/sample3.php", function(data){
		var list = document.createElement("ul");
		$("#sample3 h3").after(list);
		var x = JSON.parse(data);
		var friends = x.friends;
		$.each(friends, function(index, value) {
			$("#sample3 ul").append("<li>" + value.name + "</li>");
		});
	});
	
})();