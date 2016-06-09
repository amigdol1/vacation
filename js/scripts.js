$(document).ready(function() {
	$("#blanks").submit(function() {

		$var name = $("#name").val();
		$var email = $("#email").val();
		$var climate = $("input:radio[name=climate]:checked").val();
		$var residence = $("input:radio[name=climate]:checked").val();

		var result;

		if ((climate === "hot") && (residence === "house")) {
			result === hot_house;
		} else if ((climate === "cold") && (residence === "house")) {
			results === cold_house;
		} else if ((climate === "hot") && (residence === "resort")) {
			results === hot_resort;
		} else if ((climate === "cold") && (residence === "resort")) {
			results === cold_resort;
		} else if ((climate === "hot") && (residence === "no_preference")) {
			results === cold_resort;
			else if ((climate === "cold") && (residence === "no_preference")) {
			results === cold_resort;

	});
});