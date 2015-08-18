
//Hides the email address (email had subject)
//function concat(name, subject) { 
//domain="@drs.virginia.gov";
//subjstr="";
//if (subject != null) {
//	subjstr = "?subject=" + subject;
//	}
//window.document.location="mailto:" + name + domain + subjstr;
//}

//Hides the email address for dbvi.virginia.gov
function email(name, subject){ 
domain="@dbvi.virginia.gov";
subjstr="";
	if (subject != null) {
	subjstr = "?subject=" + subject;
	}

window.document.location="mailto:" + name + domain + subjstr; 
}

//Hides the email address for vibonline.org domain (email had subject)
function emailvibonline(name){ 
domain="@vibonline.org";
window.document.location="mailto:" + name + domain ;
}

