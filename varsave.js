// CSC 105 JavaScript File:  varsave.js
// This file includes scripts designed to make it easy to save and restore state variables

// Sets a cookie with the specified value stored under the specified name
function setCookie(key,value,lifetime) {
  // sets a cookie with the name and value given in the text input fields
  var cookie = key+'='+escape(value)
  if (lifetime) {
	var expires = new Date()
  	expires.setTime(expires.getTime()+lifetime)
	cookie = cookie+"; expires="+expires.toGMTString()
  }
  document.cookie = cookie
}

// returns the value stored under the specified cookie name
function getCookie(key) {
  var cookielist = ' '+document.cookie+';'
  var searchfor = ' '+key+'='
  var start = cookielist.indexOf(searchfor)
  if (start != -1) {
    // start of cookie was found; figure out its value
    start = start+searchfor.length
	finish = cookielist.indexOf(';',start)
    return unescape(cookielist.substring(start,finish))
  } else {
    // cookie wasn't found
    return null
  }
}

// saves a javascript variable as a cookie
function saveVar(varname,lifetime) {
	vtype = eval('typeof '+varname)
	vval = eval(varname)
	if (vtype=='boolean') {
		setCookie('SV_'+varname,'B_'+vval,lifetime)
	} else if (vtype=='number') {
		setCookie('SV_'+varname,'N_'+vval,lifetime)
	} else if (vtype=='string') {
		setCookie('SV_'+varname,'S_'+vval,lifetime)
	} else {
		alert("This package doesn't know how to save "+varname);
	}
}

// restores a javascript variable from a cookie
function restoreVar(varname) {
	cval = getCookie('SV_'+varname)
	if ((cval)&&(cval.length>=2)) {
		if (cval.substring(0,2)=='B_') {
			vval = (cval.substring(2)=='true')
		} else if (cval.substring(0,2)=='N_') {
			vval = Number(cval.substring(2))
		} else if (cval.substring(0,2)=='S_') {
			vval = cval.substring(2)
		} else {
			vval = null;
		}
	} else {
		// no value saved under this name
		vval = null;
	}
	eval(varname+' = vval')
}
