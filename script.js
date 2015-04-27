$('#search').keydown(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");

	$.getJSON('data.json', function(data){
		var output = '<ul class= "searchresults">';
		$.each(data, function(key,val){
			//searching name or bio 
			if((val.name.search(myExp) !=  -1) || (val.bio.search(myExp) != -1) ) {
				output += '<li>';
				output +=	'<h2>' + val.name + '</h2>';
				output +=	'<image src="images/' + val.shortname + '_tn" alt="' + val.name + '" />';
				output +=	'<p>' + val.bio + '</p>';
		 		output += '</li>';
		 	};
		});
		output += '</ul>';
		$('#update').html(output);
	});//get JSON
});