// "Mail This Page" function - opens user's default email program and inserts addresses, text and info.

function mailpage()
{
var cntrlHdnEmailLinkContainerID ="";
var cntrlHdnEmailLinkID = "";
var strSearchURL ="";

if (cntrlHdnEmailLinkContainerID != "" && cntrlHdnEmailLinkID != "")
{
    var div = document.getElementById(cntrlHdnEmailLinkContainerID);
     if (div.childNodes[0].id == cntrlHdnEmailLinkID)
     {    
         strSearchURL=  div.childNodes[0].value
     }
}

if(strSearchURL != "")
{
    mail_str = "mailto:?subject=Emailing : Saved Search Results";
    mail_str += "&body=I thought you might be interested in this saved search result set ";
    mail_str  += "located on VIBONLINE.ORG.  You can view these results at the following link : " + escape(strSearchURL); 
}
else
{
    mail_str = "mailto:?subject=Emailing : " + document.title;
    mail_str += "&body=I thought you might be interested in this content '" + document.title;
    mail_str += "' located on VIBONLINE.ORG.  You can view this content at the following link : " + location.href; 
}

location.href = mail_str;
}