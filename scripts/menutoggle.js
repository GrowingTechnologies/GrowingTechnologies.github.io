// menutoggle.js: toggles menu widths for every page except the front page
// Set and change menu styles for show/hide and CSS background toggle (+/-)
$("#rightBox").hide();

$("#toolsLogo").addClass("rightmenuToggleMinus");


		
		$("#toolsLogo").click(function(){
			$("#rightBox").animate({width:'toggle'},500);
		});


		$("#toolsLogo").toggle(function(){
				$(this).removeClass("rightmenuToggleMinus"); 
				$(this).addClass("rightmenuTogglePlus");
				//$("h1").addClass("moveLeft180");
				//$("h2").addClass("moveLeft180");
				//$("#tableHolder").addClass("width75");
				//$("#contentText").addClass("moveLeft180");
				}, function () {
				$(this).removeClass("rightmenuTogglePlus"); 
				$(this).addClass("rightmenuToggleMinus");
				setTimeout( function() { 
									 //$("#tableHolder").removeClass("width75"); 
									 //$("h1").removeClass("moveLeft180"); 
									 //$("h2").removeClass("moveLeft180"); 
									 //$("#contentText").removeClass("moveLeft180"); 
									 }, 510 ); 
			});

