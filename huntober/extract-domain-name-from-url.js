// Write a function that when given a URL as a string,
  // parses out just the domain name and returns it as a string. For example:

// could start with http or https protocols, or none
// could start with www subdomain or not
// could end with any top level domain .com, .org, .net,
  // or have a variety of paths /home, /about, etc.
// expect ONLY the domain name (string) as a return

function domainName(url) {
  // remove the http protocol, if any
  // remove the https protocol, if any
  // remove the www subdomain, if any
  // separate the domain name from the top level domain & any following content
  // return the isolated domain name
  return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0]
}

console.log(domainName("http://github.com/carbonfive/raygun"), "github")
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites")
console.log(domainName("https://www.cnet.com"), "cnet")