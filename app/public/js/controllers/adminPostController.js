
function adminPostController(){

	$("#admin-publish").click(function(){
		var adminposttitle = $("#admin-post-title").val();
		var adminpostcontent = $("#admin-post-content").val();
		var url = '/admin/admin-post';
		console.log(url);
		$.ajax({
			url: url,
			type: 'POST',
			data: { adminposttitle:adminposttitle,
					adminpostcontent:adminpostcontent,
				},
			complete: function(data){
	 			
			},
			error: function(jqXHR){
				console.log(jqXHR.responseText+' :: '+jqXHR.statusText);
			}
		}).done(function(data){	if(data == 'success'){
					alert(0);
				}});
	});
	
}

adminPostController();