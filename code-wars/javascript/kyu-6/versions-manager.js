/*
You have to implement a vm function returning an object.

It should accept an optional parameter that represents the initial
version. The input will be in one of the following formats:
"{MAJOR}", "{MAJOR}.{MINOR}", or "{MAJOR}.{MINOR}.{PATCH}". More
values may be provided after PATCH but they should be ignored. If
these 3 parts are not decimal values, an exception with the message
"Error occured while parsing version!" should be thrown. If the
initial version is not provided or is an empty string, use "0.0.1"
by default.

This class should support the following methods, all of which should
be chainable (except release):

major() - increase MAJOR by 1, set MINOR and PATCH to 0
minor() - increase MINOR by 1, set PATCH to 0
patch() - increase PATCH by 1
rollback() - return the MAJOR, MINOR, and PATCH to their values before
  the previous major/minor/patch call, or throw an exception with the
  message "Cannot rollback!" if there's no version to roll back to.
  Multiple calls to rollback() should be possible and restore the
  version history
release() - return a string in the format "{MAJOR}.{MINOR}.{PATCH}"

Parameters: a str (potentially nums separated by '.'s)
  if no arg provided or is an empty str, version defaults to '0.0.1'
  (if input includes non nums b/w '.'s, throws error,
  and any values after patch num is ignored)
Returns:
  release() returns a str of the updated version
  other methods modify data in the vm obj
    major() increases major by 1, resets minor & patch to 0
    minor() increases minor by 1, resets patch to 0
    patch() increases patch by 1
    rollback() reverts to previous version or throws error if at initial
Examples:
  vm().release(), '0.0.1'
  vm('').release(), '0.0.1'
  vm('1.2.3').release(), '1.2.3'
  vm('1.2.3.4').release(), '1.2.3'
  vm('1.2.3.d').release(), '1.2.3'
  vm('1').release(), '1.0.0'
  vm('1.1').release(), '1.1.0'
  vm().major().release(), '1.0.0'
  vm('1.2.3').major().release(), '2.0.0'
  vm('1.2.3').major().major().release(), '3.0.0'
  vm().minor().release(), '0.1.0'
  vm('1.2.3').minor().release(), '1.3.0'
  vm('1').minor().release(), '1.1.0'
  vm('4').minor().minor().release(), '4.2.0'
  vm().patch().release(), '0.0.2'
  vm('1.2.3').patch().release(), '1.2.4'
  vm('4').patch().patch().release(), '4.0.2'
  vm().major().rollback().release(), '0.0.1'
  vm().minor().rollback().release(), '0.0.1'
  vm().patch().rollback().release(), '0.0.1'
  vm().major().patch().rollback().release(), '1.0.0'
  vm('a'), Error, 'Error occured while parsing version!'
  vm('a.b.c'), Error, 'Error occured while parsing version!'
  vm('1.a'), Error, 'Error occured while parsing version!'
  vm('0.1.a.5'), Error, 'Error occured while parsing version!'
  vm().rollback(), Error, 'Cannot rollback!'
Pseudocode:
  create a class VersionManager that takes in initial version or defaults to '0.0.1'
    within constructor
      use destructured assignment on input str converted to array split on '.'s
        1st value is major, 2nd is minor, 3rd is patch
      if any major, minor, or patch cannot be converted to num
        throw error 'Error occured while parsing version'
      initialize a history prop as an empty array

    initialize a major method
      push major, minor, patch joined on '.'s to history
      increment the major and reassign minor & patch to 0
    initialize a minor method
      push major, minor, patch joined on '.'s to history
      increment minor and reassign patch to 0
    initialize a patch method
      push major, minor, patch joined on '.'s to history
      increment patch
    initialize a rollback method
      if history has values
        pop off the last value of history
        split on '.'s
        use destructured assignment to reassign major, minor, patch respectively
      otherwise
        throw error 'Cannot rollback!'
    initialize release
      return major, minor, patch joined on '.'s
*/

class VersionManager {
  constructor(initialVersion) {
    initialVersion = (initialVersion || '0.0.1').split('.');
    this.history = [];
    [this.maj, this.min, this.pat] = Array(3).fill(0).map((z, i) => +(initialVersion[i] || z));
    if (isNaN(this.maj + this.min + this.pat)) throw Error('Error occured while parsing version!');
  }
  major() {
    this.history.push(`${this.maj}.${this.min}.${this.pat}`), this.maj++, this.min = 0, this.pat = 0;
    return this;
  }
  minor() {
    this.history.push(`${this.maj}.${this.min}.${this.pat}`), this.min++, this.pat = 0;
    return this;
  }
  patch() {
    this.history.push(`${this.maj}.${this.min}.${this.pat}`), this.pat++;
    return this;
  }
  rollback() {
    if (!this.history.length) throw Error('Cannot rollback!');
    [this.maj, this.min, this.pat] = this.history.pop().split('.').map(Number);
    return this;
  }
  release() {
    return `${this.maj}.${this.min}.${this.pat}`;
  }
}
const vm = v => new VersionManager(v);

// const vm = function(initialVersion) {
//   initialVersion = initialVersion || '0.0.1';
//   const history = [];
//   let [maj, min, pat] = Array(3).fill(0).map((z, i) => +(initialVersion.split('.')[i] || z));
//   if (isNaN(maj) || isNaN(min) || isNaN(pat)) throw Error('Error occured while parsing version!');
//   return {
//     major: function() {
//       history.push(`${maj}.${min}.${pat}`), maj++, min = 0, pat = 0;
//       return this;
//     },
//     minor: function() {
//       history.push(`${maj}.${min}.${pat}`), min++, pat = 0;
//       return this;
//     },
//     patch: function() {
//       history.push(`${maj}.${min}.${pat}`), pat++;
//       return this;
//     },
//     rollback: function() {
//       if (history.length) {
//         [maj, min, pat] = history.pop().split('.').map(Number);
//         return this;
//       } else throw Error('Cannot rollback!');
//     },
//     release: () => `${maj}.${min}.${pat}`,
//   };
// };