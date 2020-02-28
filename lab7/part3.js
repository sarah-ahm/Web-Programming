(function () {
	
	// Add the click handler for the button
	$("button").click( function(){
		$("#allUpper").empty();
		$("#allUpper").append($("#myInput").val().toUpperCase());

		$("#allLower").empty();
		$("#allLower").append($("#myInput").val().toLowerCase());

		$("#redText").empty();
		$("#redText").append($("#myInput").val());
		$("#redText").css("color","red");

		$("#flashyText").empty();
		$("#flashyText").append($("#myInput").val());
		$("#flashyText").addClass("flashy");
	});
	
})();