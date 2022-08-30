/*
A traveling salesman has to visit clients. He got each client's address
e.g. "432 Main Long Road St. Louisville OH 43071" as a list.

The basic zipcode format usually consists of two capital letters followed
by a white space and five digits. The list of clients to visit was given
as a string of all addresses, each separated from the others by a comma,
e.g. :
"
 123 Main Street St. Louisville OH 43071,
 432 Main Long Road St. Louisville OH 43071,
 786 High Street Pollocksville NY 56432
"

To ease his travel he wants to group the list by zipcode.

Task
The function travel will take two parameters r (addresses' list of all
clients' as a string) and zipcode and returns a string in the following
format:

zipcode:street and town,street and town,.../house number,house number,...

The street numbers must be in the same order as the streets where they
belong.

If a given zipcode doesn't exist in the list of clients' addresses
return "zipcode:/"

Note for Elixir:
In Elixir the empty addresses' input is an empty list, not an empty string.

Note:
You can see a few addresses and zipcodes in the test cases.

Parameters: two strings
  1st arg contains multiple addresses, comma separated
  2nd arg contains abbr state and zipcode
Returns: a string
  using 2nd arg as a filter, retreives matching addresses
  from 1st arg in a specific format & same order
Examples:
  r = "
    123 Main Street St. Louisville OH 43071,
    432 Main Long Road St. Louisville OH 43071,
    786 High Street Pollocksville NY 56432
  ";
  travel(r, "OH 43071")
    --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"
  travel(r, "NY 56432")
    --> "NY 56432:High Street Pollocksville/786"
  travel(r, "NY 5643")
    --> "NY 5643:/"
Pseudocode:
  if there is no zipcode (2nd arg)
    (edgecase)
    return ':/'
  initialize a house nums variable equal to an empty array
  convert input string to an array of addresses
  iterate over address array
    if address contains 2nd arg
    (had to change to ends with due to partial match & false positives)
      replace current address with copy of current from
      index of first space + 1 to index of 2nd arg - 1
      push copy of current from start to first space, to house nums array
    otherwise
      skip
  return 2nd arg concatted with
    a colon
    new address array joined on a comma
    a forward slash
    house nums array joined on a comma
*/

function travel(r, z) {
  if (!z) return ':/';
  const h = [], nr = r.split(',').reduce((a, c) => c.endsWith(z) ? h.push(c.slice(0, s1 = c.indexOf(' '))) && a.concat(c.slice(++s1, c.indexOf(z) - 1)) : a, []);
  return `${z}:${nr.join(',')}/${h.join(',')}`;
}

// function travel(r, z) {
//   if (!z) return ':/';
//   const h = [], nr = r.split(',').reduce((a, c) => {
//     return c.endsWith(z) ? h.push(c.slice(0, s1 = c.indexOf(' '))) && a.concat(c.slice(++s1, c.indexOf(z) - 1)) : a;
//   }, []);
//   return `${z}:${nr.join(',')}/${h.join(',')}`;
// }