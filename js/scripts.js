$(document).ready(function() {
	$("#blanks").submit(function(event) {
		event.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		var climate = $("input:radio[name=climate]:checked").val();
		var residence = $("input:radio[name=residence]:checked").val();
		var age = $("input:radio[name=age]:checked").val();

			if ((climate === "hot") && (residence === "house")) {
				$("#hot_house_text").show();
			} else if ((climate === "cold") && (residence === "house")) {
					$("#cold_house_text").show();
			} else if ((climate === "hot") && (residence === "resort")) {
					$("#hot_resort_text").show();
			} else if ((climate === "cold") && (residence === "resort")) {
					$("#cold_resort_text").show();
			} else if ((climate === "hot") && (residence === "no_preference")) {
					$("#both_hot_text").show();
			} else if ((climate === "cold") && (residence === "no_preference")) {
					$("#both_cold_text").show();
			} else {
				alert("Oops! Looks like you didn't answer all of the required fields. Be sure to answer all required questions, so our team can give you the best results.")
			}

			console.log(name, email, climate, residence, age)

			//disables resubmissions
			$("button#suggester").on('click', function() {
				$(this).val('Please wait ...')
				.attr('disabled', 'disabled');
				$('#suggesterform').submit();
			});
	});
});