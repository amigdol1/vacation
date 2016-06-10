

$(document).ready(function() {
	$("#blanks").submit(function(event) {
		event.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		var climate = $("input:radio[name=climate]:checked").val();
		var residence = $("input:radio[name=residence]:checked").val();


		var result;
		if ((climate === "hot") && (residence === "house")) {
			result = "hot_house";
		} else if ((climate === "cold") && (residence === "house")) {
			result = "cold_house";
		} else if ((climate === "hot") && (residence === "resort")) {
			result = "hot_resort";
		} else if ((climate === "cold") && (residence === "resort")) {
			result = "cold_resort";
		} else {
			result = "view_all";
		}


		console.log(result)

			$("result").text(result);


	});
});