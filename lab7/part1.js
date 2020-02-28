(function () {
	var resources = "http://students.engr.scu.edu/~adiaztos/resources/";
	
	// Create an XMLHttpRequest object
	var sample1 = new XMLHttpRequest();
	
	// Handle succesful responses
	sample1.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			document.getElementById("sample1").innerHTML = "<p>" + this.responseText + "</p>";
		}
	};

	// Get sample1.php
	sample1.open("GET", "http://students.engr.scu.edu/~adiaztos/resources/sample1.php",true);
	sample1.send();


	// Create an XMLHttpRequest object
	var sample2 = new XMLHttpRequest();

	// Handle succesful responses
	sample2.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var x = document.getElementById("sample2");
			x.innerHTML = this.responseText;
		}
	};

	// Get sample2.php
	sample2.open("GET", "http://students.engr.scu.edu/~adiaztos/resources/sample2.php",true);
	sample2.send();


	// Create an XMLHttpRequest object
	var sample3 = new XMLHttpRequest();

	// Handle succesful responses
	sample3.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var x = JSON.parse(this.responseText);
			var str = "";
			for(var i = 0; i < x.friends.length; i++){
				str += "<li>" + x.friends[i].name + "</li>\n";
			}
			document.getElementById("sample3").append(document.createElement("ul"));
			document.querySelectorAll("#sample3 ul")[0].innerHTML = str;

		}
	};
	
	// Get sample3.php
	sample3.open("GET", "http://students.engr.scu.edu/~adiaztos/resources/sample3.php",true);
	sample3.send();

})();