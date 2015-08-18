
/*A name issues see "http://guyellisrocks.com/coding/jquery-select-notes/" .......*/

$(document).ready(function() {
//NOT Using Trailer

// Set which icon to use based on file extension
var fileTypes = {
  doc	: 'doc.gif',
  docx: 'doc.gif',
  xls: 'xls.gif',
  xlsx: 'xls.gif',
  pdf	: 'pdf.gif',
  txt	: 'txt.gif',
  pptx: 'ppt.gif',
  zip	: 'zip.gif'
};

// ALT text for the icons
var fileText = {
  doc	: "'The following link opens a Microsoft Word document.'",
  docx	: "'The following link opens a Microsoft Word document.'",
  xls: "'The following link opens a Microsoft Excel document.'",
  xlsx: "'The following link opens a Microsoft Excel document.'",
  pdf	: "'The following link opens a Adobe PDF document.'",
  txt	: "'The following link opens a Text file.'",
  ppt: "'The following link opens a Microsoft PowerPoint presentation.'",
  pptx: "'The following link opens a Microsoft PowerPoint presentation.'",
  zip	: "'The following link opens a Zip file.'"
};

// Set up trailers for documents
var fileTrailers = {
  doc	: 	"(Word)",
  docx	: 	"(Word)",
  xlsx: "(Excel)",
  xls: "(Excel)",
  pdf	: 	"(PDF)",
  txt	: 	"(Text)",
  ppt: "(PowerPoint)",
  pptx: "(PowerPoint)",
  zip	: 	"(Zip)"
};


// Make sure we only apply this rule to links within the ContentText and Footer DIV (some exclusions)

/*$("div#contentText a:not(div#contentText a[name], div#contentText a[id], div#backto a)" ).each(function() {*/

$("div#contentText a:not(div#contentText a[name], div#contentText a[id], div#rightBox a, div#infographic a)").each(function () {
     var $a = $(this);

// Look for Downloadable Links from External Sites

	// make sure it's an external link, NOT in the FC, AND it's a PDF
	
     if (!this.href.match(document.domain) && !this.href.match(/http:\/\/(www.|)vibonline.org/) && this.href.match(/.pdf/))
    {
		var image 	= 'pdf.gif';
		var text 	= "'The following link opens a PDF from an External Site in a new window.'";
		var trailer = "(PDF - External Site)";
  	} 
	
	// make sure it's an external link, NOT in the FC, AND it's a Word
 else if (!this.href.match(document.domain) && !this.href.match(/http:\/\/(www.|)vibonline.org/) && this.href.match(/.doc|.docx/)) {
		var image 	= 'doc.gif';
		var text 	= "'The following link opens a Word Document from an External Site.'";
		var trailer = "(Word - External Site)";
  	} 
	
	// make sure it's an external link, NOT in the FC, AND it's an Excel File
 else if (!this.href.match(document.domain) && !this.href.match(/http:\/\/(www.|)vibonline.org/) && this.href.match(/.xls|.xlsx/)) {
		var image 	= 'xls.gif';
		var text 	= "'The following link opens an Excel Document from an External Site.'";
		var trailer = "(Excel Document - External Site)";
  	} 
	
	// emails
	else if (this.href.match(/mailto:/)) {
		var image 	= 'email.gif';
		var text 	= "'The following link is an E-Mail Address.'";
		var trailer = "(E-Mail)";
	}//applied env graphic to normal coded emails

	else if (this.rel.match(/JavaMail/)) {
	    var image = 'email.gif';
	    var text = "'The following link is an Email address.'";
	    var trailer = "(E-Mail)";
	} //applied env graphic to JS coded emails
  	
	  // Look for non-forms links pointing to external sites
	  // else if (!this.href.match(document.domain) && !this.href.match(/.doc|.docx|.pdf|.xls|.xlsx|.ppt|.pptx|.txt/)) { 
	    // use a special image for external links 
		// var image = 'ext.gif';
		// var text 	= "'The following link opens a new browser window or tab and visits an External Web Site.'";
		// var trailer = "(External Site)";
	   }
	   
else {
    // get the extension from the href
    var hrefArray = this.href.split('.');
    var extension = hrefArray[hrefArray.length - 1];
 
    // set up images and alt text
	var image 	= fileTypes[extension];
	var text  	= fileText[extension];
	var trailer = fileTrailers[extension];
  }
 
 
  // put the appropriate icon in front of the link w/ a space and
  // change the link target to open in a new window
  if (image) {
    $a.before("<img src=images/icons/" + image + " alt=" + text + ">&nbsp;");
	$a.attr('target','_blank');
	$a.after("&nbsp;<span class=nonBold>" + trailer + "</span>");
  }
 
});

});

