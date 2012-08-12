$(document).ready(function() {
 alert("Click on Get Today's trends to start getting tends");
});

var arr = [];
var k=0;

$("#tweet-btn").live("click", function() {
			$.ajax({
				url:"https://api.twitter.com/1/trends/daily.json?exclude=hashtags",
				dataType:"jsonp",
				success:function(data) {
					
				console.log("in here");
				
				for (var i in data.trends){
					for (var j=0; j<=data.trends[i].length && j<15; j++){
							
						
    					var elem = data.trends[i][j].name;
    					arr.push(elem);
    					
    					}
   					}

					console.log(arr);
					
						k=0
						var tag_temp = arr[k];
                    
						var tag = tag_temp.replace(/\s+/g,'');
					
						
						console.log(tag);
						var url_var = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=296aaa4538af42bcb7bae818e566fde6&access_token=5e8692a0e17b474c833ed44ac6477a0e";
						console.log(url_var);
						$("#tweets").append(arr[k]);
						
						$.ajax({
							url:url_var,	
							dataType: "jsonp",
       						success: function(data) {
       						$("#pics").html("");
       		 				console.log("hello pics");
       		 				
       		 				if (data.data.length == 0)
       		 				{
       		 					console.log(data.data.length);
       		 					$("#pics").append("Sorry, No one is Instagraming about this. Click next to see the next trend.")
       		 				}
       		 				else{

       		 				for (var i = 0; i < data.data.length && i < 100; i++) {
       		 		       		 			 
       		 					$("#pics").append("<a target='_blank' href='" + data.data[i].link +
								"'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");

								}
							}
       		 	},
			error: function(err) {
					console.log(err);
			},
    	});
					
					
				},
				error: function(err) {
					console.log(err);
				},
				
			});
		});	



$("#next").live("click", function() {
			
			$("#pics").html("");
			$("#tweets").html("");
			
			k=k+1;
			if (k>=480)
			{
				 alert("That's all the pics for today :)!!");
			}
			else
			{

				console.log(k);
					
						var tag_temp = arr[k];
						var tag_dots = tag_temp.replace(".","");
                    	var tag = tag_dots.replace(/\s+/g,'');
                    	var url_var = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=296aaa4538af42bcb7bae818e566fde6&access_token=5e8692a0e17b474c833ed44ac6477a0e";
						console.log(url_var);
						$("#tweets").append(arr[k]);
					

						$.ajax({
							url:url_var,	
							dataType: "jsonp",
       						success: function(data) {
       						$("#pics").html("");
       		 				console.log("hello pics");
       		 				if (data.data.length == 0)
       		 				{
       		 					console.log(data.data.length);
       		 					$("#pics").append("Sorry, No one is Instagraming about this. Click next to see the next trend.")
       		 				}
       		 				else{
       		 				for (var i = 0; i < data.data.length && i < 100; i++) {
       		 		       		 			 
       		 					$("#pics").append("<a target='_blank' href='" + data.data[i].link +
								"'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");

							}
						}
       		 	},
			error: function(err) {
					console.log(err);
			},
    	});
		}				
});

$("#prev").live("click", function() {
			
			
			
			k=k-1;
			if (k<0)
			{
				 alert("This is the first picture, please press next to see more pictures!!");
			}
			else
			{
			console.log(k);
						$("#pics").html("");
						$("#tweets").html("");
					
						var tag_temp = arr[k];
                    	var tag = tag_temp.replace(/\s+/g,'');
                    	var url_var = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=296aaa4538af42bcb7bae818e566fde6&access_token=5e8692a0e17b474c833ed44ac6477a0e";
						console.log(url_var);
						$("#tweets").append(arr[k]);
					

						$.ajax({
							url:url_var,	
							dataType: "jsonp",
       						success: function(data) {
       						$("#pics").html("");
       		 				console.log("hello pics");
       		 				if (data.data.length == 0)
       		 				{
       		 					console.log(data.data.length);
       		 					$("#pics").append("Sorry, No one is Instagraming about this. Click next to see the next trend.")
       		 				}
       		 				else{

       		 				for (var i = 0; i < data.data.length && i < 100; i++) {
       		 		       		 			 
       		 					$("#pics").append("<a target='_blank' href='" + data.data[i].link +
								"'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");

							}
						}
       		 	},
			error: function(err) {
					console.log(err);
			},

    	});
	}					
});