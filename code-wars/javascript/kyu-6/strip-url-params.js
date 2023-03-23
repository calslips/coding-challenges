/*
Complete the method so that it does the following:
Removes any duplicate query string parameters from the url
(the first occurence should be kept)
Removes any query string parameters specified within the 2nd argument
(optional array)

Parameters:
  a string
  an array
Returns:
  input string modified
    duplicate query params removed, first occurence kept
    remove query params contained in input array
Examples:
  stripUrlParams('www.codewars.com?a=1&b=2&a=2')
    // 'www.codewars.com?a=1&b=2'
  stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b'])
    // 'www.codewars.com?a=1'
  stripUrlParams('www.codewars.com', ['b'])
    // 'www.codewars.com'
Pseudocode:
  if url string does NOT contain '?'
    return url string
  initialize a query params variable assigned to
    a copy the query portion of the url string,
    converted to an array of query params
    converted to an array of tuples
      first el is query param
      second el is query param value
  initialize a unique params varable assigned to an empty obj
  iterate over the array of query params
    if unique params obj does NOT contain the query param AND
    if the input array (params to remove) does NOT contain current query param
      add property to unique obj
        param being the key
        value being the value
  return input url from beginning to '?' inclusive
    concatted with
    unique params entries (tuples, converted to string joined on '=') joined on '&'
    (account for when all query params are removed,
    url should NOT end in '?', but be the base url)
*/

function stripUrlParams(url, paramsToStrip = []) {
  if ((qpIndex = url.indexOf('?')) < 0) return url;
  let queryParams = url.slice(qpIndex + 1).split('&').map(p => [p.slice(0, eq = (p.indexOf('='))), p.slice(eq + 1)]);
  const uniqueParams = {};
  queryParams.forEach(t => !(t[0] in uniqueParams || paramsToStrip.includes(t[0])) && (uniqueParams[t[0]] = t[1]));
  return url.slice(0, qpIndex) + ((qps = Object.entries(uniqueParams).map(e => e.join('=')).join('&')).length ? `?${qps}` : '');
}

// function stripUrlParams(url, paramsToStrip = []) {
//   if ((qpIndex = url.indexOf('?')) < 0) return url;
//   let queryParams = url.slice(++qpIndex).split('&').map(p => [p.slice(0, eq = (p.indexOf('='))), p.slice(eq + 1)]);
//   const uniqueParams = {};
//   queryParams.forEach(t => !(t[0] in uniqueParams || paramsToStrip.includes(t[0])) && (uniqueParams[t[0]] = t[1]));
//   return (r = url.slice(0, qpIndex) + Object.entries(uniqueParams).map(e => e.join('=')).join('&')).endsWith('?') ? r.slice(0, -1) : r;
// }