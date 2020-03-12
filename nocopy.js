
//Prevent Copying Content From Blogger/Blogspot
//For full source code, visit https://wiki-ibda3.blogspot.com

var omitformtags=["input", "textarea", "select"]
omitformtags=omitformtags.join("|")
function disableselect(e){
if (omitformtags.indexOf(e.target.tagName.toLowerCase())==-1)
return false
}
function reEnable(){
return true
}
if (typeof document.onselectstart!="undefined")
document.onselectstart=new Function ("return false")
else{
document.onmousedown=disableselect
document.onmouseup=reEnable
}




//<![CDATA[
/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Disable context menu on images by GreenLava (BloggerSentral.com)
Version 1.0
You are free to copy and share this code but please do not remove this credit notice.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */
    function nocontext(e) {
        var clickedTag = (e==null) ? event.srcElement.tagName : e.target.tagName;
        if (clickedTag == "IMG") {
            alert(alertMsg);
            return false;
        }
    }
    var alertMsg = "ممنوع نسخ الصور";
    document.oncontextmenu = nocontext;
//]]>
