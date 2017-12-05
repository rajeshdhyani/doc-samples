// Copyright (c)2004 AuthorIT Software Corporation Ltd.  All rights reserved.

function loadParent() {
  // Function to determine if parent page is loaded, and if not 
  // call index.htm, with parameters passed in query to ensure this
  // page is reloaded into body frame.
  
  if (self == top){ 
    var strTocURL='toc.htm';
    var strBodyURL=location.href;

    // Get toc url
    for (var i = 0; i < document.links.length; i++) {
      //SUP21248 ANeame 07-Jan-08 Prevent bug when book description contains the string 'toc'
      //if (document.links[i].href.indexOf("toc.") != -1) {
      if (getFilename(document.links[i].href).indexOf("toc.") != -1) {
        strTocURL=document.links[i].href;
        break;
      }
    }

    // Call parent page
    window.location='index.htm?'+getFilename(strTocURL)+'?'+getFilename(strBodyURL);
  }
}
function getFilename(pstrPath) {
  // Return filename from path

  var lngIndex=pstrPath.lastIndexOf('/');
  if (lngIndex > -1) {
    return pstrPath.slice(lngIndex+1);
  } else {
    return pstrPath;
  }
}
