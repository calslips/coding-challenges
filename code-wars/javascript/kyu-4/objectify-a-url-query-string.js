/*
In this kata, we want to convert a URL query string into a nested
object. The query string will contain parameters that may or may
not have embedded dots ('.'), and these dots will be used to
break up the properties into the nested object.

You will receive a string input that looks something like this:
user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue

Your method should return an object hash-map that looks like this:
{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
}

You can expect valid input. You won't see input like:
// This will NOT happen
foo=1&foo.bar=2

All properties and values will be strings — and the values should
be left as strings to pass the tests.
Make sure you decode the URI components correctly

Parameters: a str
Returns: an obj
Examples:
  const q = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue',
        out = {
          'user': {
            'name': {
              'firstname': 'Bob',
              'lastname': 'Smith'
            },
            'favoritecolor': 'Light Blue'
          }
        };
  convertQueryToMap(q), out
Pseudocode:
  initialize a result var assigned to an empty obj
  if input is a valid query
    convert input to array, split on '&'s
    iterate over input array
      initialize current to equal result
      convert el into an array split on '.'s
      iterate over sub array
        if at the last el
          split el on '='
          set current at el[0] (key) to el[1] (value), uri decoded
        otherwise if el exists as prop in current
          reassign current to equal value of el key in current
        otherwise if el does NOT exist as prop in current
          establish el as key in current with value of an empty obj
          reassign current to equal value of el key in current
  return result
*/

function convertQueryToMap(query) {
  const obj = {};
  if (query) {
    query.split('&').forEach(path => {
      let current = obj;
      path.split('.').forEach((prop, i, a) => {
        if (i === a.length - 1) {
          const [key, value] = prop.split('=');
          current[key] = decodeURIComponent(value);
        } else {
          if (!current[prop]) current[prop] = {};
          current = current[prop];
        }
      });
    });
  }
  return obj;
}

function convertQueryToMap(query) {
  const obj = {};
  query && query.split('&').forEach(path => {
    let current = obj;
    path.split('.').forEach((prop, i, a) => {
      if (i === a.length - 1) {
        const [key, value] = prop.split('=');
        current[key] = decodeURIComponent(value);
      } else {
        if (!current[prop]) current[prop] = {};
        current = current[prop];
      }
    });
  });
  return obj;
}

function convertQueryToMap(query) {
  return query ? query.split('&').reduce((obj, path) => {
    let current = obj;
    path.split('.').forEach((prop, i, a) => {
      if (i === a.length - 1) {
        const [key, value] = prop.split('=');
        current[key] = decodeURIComponent(value);
      } else {
        if (!current[prop]) current[prop] = {};
        current = current[prop];
      }
    });
    return obj;
  }, {}) : {};
}

function convertQueryToMap(q) {
  return q ? q.split('&').reduce((o, s) => (c = o, s.split('.').forEach((p, i, a) => i < a.length - 1 ? (!c[p] && (c[p] = {}), c = c[p]) : c[(v = p.split('='))[0]] = decodeURIComponent(v[1])), o), {}) : {};
}