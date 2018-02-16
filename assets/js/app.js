var marvel = {
	render: function () {
		var url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=0d8e5f4ae6c9a0caa883ffd01d52d9eb&hash=747ccd2e0bbade2c070679dc925eab7c";
		var message= document.getElementById("message");
		var attr=document.getElementById("attribution");
		var marvelContainer =document.getElementById("marvelContainer");

		$.ajax({
			url: url,
			type:'GET',
			
			success:function(data){
				attr.innerHTML = data.attributionHTML;
				var string = "";
				string += "<div class='row'>";
				
				for (var i = 0; i < data.data.results.length; i++){
					var element = data.data.results[i];
					string += "<div class='col-md-3'>";
					string += " <a href='" + element.urls[0].url + "'target= '_blank'>";
					string += " <img src='"+ element.thumbnail.path + "/portrait_fantastic." + element.thumbnail.extension + "'/>";
					string += "</a>"
					string += "<h3>" + element.name + "</h3>";
					string += "</div>"
					if((i + 1)% 4 == 0){
						string += "</div>"
						string += "<div class='row'>";
					}
				}
				marvelContainer.innerHTML = string;
			},
			error: function(){
				message.innerHTML = "we are sorry!";
			},

		});
	}	
};
marvel.render();