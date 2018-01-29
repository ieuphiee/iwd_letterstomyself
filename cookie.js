// CSC 105 JavaScript File:  cookie.js
// This file includes scripts designed to make it easier for you to 
// get and set cookies.

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

// says whether a cookie with the given name exists
function cookieExists(key) {
  var cookielist = ' '+document.cookie+';'
  var searchfor = ' '+key+'='
  var start = cookielist.indexOf(searchfor)
  return (start > -1)
}

// clears any cookie stored under the specified name
function clearCookie(key) {
  // clears the cookie by setting its expiration date in the past
  setCookie(key,"deleted",-100)
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

// returns as a Number the value stored in a cookie
function getNumberCookie(key) {
  return Number(getCookie(key))
}

// returns as a Boolean (true/false) the value stored in a cookie
function getBooleanCookie(key) {
  return (getCookie(key)=='true')
}

