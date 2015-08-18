// Q-Tip Tooltip Replacements

	$('#logoHolder a[title]').qtip({
	position: {my: 'right center', at: 'left center'},
	style: 	  {classes: 'ui-tooltip-red'}
	});
	
	$('a[title]').qtip({
	position: {my: 'left center', at: 'right center'},
	style: 	  {classes: 'ui-tooltip-red'}
	});
	
		
	$('img[alt]').qtip({
	position: {my: 'left bottom', at: 'right top'},
	style: 	  {classes: 'ui-tooltip-cream'}
	});
	
	$('.rightMenu .block ul li a').qtip({
	position: {my: 'right center', at: 'left center'},  
	style: 	  {classes: 'ui-tooltip-red'}
	});
	
	//$('input#searchBoxSite[title]').qtip({
	//content:  {attr: 'title'},
	//position: {my: 'right center', at: 'left center'},
	//style: 	  {classes: 'ui-tooltip-red'}
	//});
	
	$('#contentText .vidLink').qtip({
	content:  {attr: 'title'},
	position: {my: 'right center', at: 'left center'},
	style: 	  {classes: 'ui-tooltip-blue'}
	});
	
	$('#contentText img').qtip({
	content:  {attr: 'alt'},
	position: {my: 'left center', at: 'right center'},
	style: 	  {classes: 'ui-tooltip-blue'}
	});
	
	$('#contentText img#map.imgright').qtip({
	content:  {attr: 'alt'},
	position: {my: 'right center', at: 'left center'},
	style: 	  {classes: 'ui-tooltip-blue'}
	});

	$('#contentText img.da-imgleft').qtip({
	content:  {attr: 'alt'},
	position: {my: 'right bottom', at: 'left top'},
	style: 	  {classes: 'ui-tooltip-red'}
	});
	
	$('#contentText table a img').qtip({
	content:  {attr: 'alt'},
	position: {my: 'left center', at: 'right center'},
	style: 	  {classes: 'ui-tooltip-blue'}
	});
	
	$('#contentText p a img').qtip({
	content:  {attr: 'alt'},
	position: {my: 'left bottom', at: 'right top'},
	style: 	  {classes: 'ui-tooltip-blue'}
	});
	
	$('acronym[title]').qtip({
	position: {viewport: $(window)},
	style: 	  {classes: 'ui-tooltip-blue'}
	});
	



