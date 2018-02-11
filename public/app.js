$(document).on("click", "#scrape", function getResults() {
	$("#results").empty();
	$.getJSON("/all", function(data) {
		for ( var i = 0; i < data.length; i++) {
			$("#results").prepend("<p class='dataentry' data-id=" + data[i]._id + ">"+ data[i]._id);
			$("#results").prepend("<p class='dataentry' data-id=" + data[i]._id + ">"+ data[i].title);
			$("#results").prepend("<p class='dataentry' data-id=" + data[i]._id + ">"+ data[i].link);
		}
	});
})