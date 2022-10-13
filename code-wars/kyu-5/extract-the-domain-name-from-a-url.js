/*
Write a function that when given a URL as a string, parses out
just the domain name and returns it as a string.

Parameters: a string (url)
Returns: a string (domain name)
Examples:
  domainName("http://google.com") // "google"
  domainName("http://google.co.jp") // "google"
  domainName("www.xakep.ru") // "xakep"
  domainName("https://youtube.com") // "youtube"
  domainName("http://github.com/carbonfive/raygun") // "github"
  domainName("http://www.zombie-bites.com" ) // "zombie-bites"
  domainName("https://www.cnet.com") // "cnet"
Pseudocode:
  replace 'http(s)://' and/or 'www.' with an empty string
  split replaced result on '.'
  return the first element from split
*/

function domainName(url) {
  return url.replace(/(?:http:\/\/)|(?:https:\/\/)|(?:www.)/ig, '').split('.')[0];
}