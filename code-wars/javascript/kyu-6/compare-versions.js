/*
Karan's company makes software that provides different features
based on the version of operating system of the user.

For finding which version is more recent,
Karan uses the following method:

function compareVersions (version1, version2) {
  return parseFloat(version1) >= parseFloat(version2);
}

While this function worked for OS versions 10.6, 10.7, 10.8 and
10.9, the Operating system company just released OS version 10.10.

Karan's function fails for the new version:

compareVersions ("10.9", "10.10");
  // returns true, while it should return false

Karan now wants to spend some time to write a more robust version
comparison function that works for any future version/sub-version
updates.

It can be assumed that version strings are non empty and only
contain numeric literals and the character '.'.

Parameters: 2 strings
  containing numbers & '.'s
Returns:
  whether the 1st version is more recent than the second
Examples:
  compareVersions("11", "10")       // returns true
  compareVersions("11", "11")       // returns true
  compareVersions("10.4.6", "10.4") // returns true
  compareVersions("10.4", "11")     // returns false
  compareVersions("10.4", "10.10")  // returns false
  compareVersions("10.4.9", "10.5") // returns false
  compareVersions ("10.9", "10.10") // returns false
Pseudocode:
  convert versions into arrays of nums split on '.'
  iterate over the arrays (loop count = longer version)
    if current v1 num is less than current v2 num OR v1 is undefined
      return false
    otherwise if current v1 num is greater than current v2 num
    (if current v2 num is undefined, replace with 0)
      return true
  return true
  (when the conditionals within the loop are never met,
  versions are equal, meaning v1 is most recent)
*/

function compareVersions (version1, version2) {
  const [v1, v2] = [version1, version2].map(v => v.split('.').map(Number));
  for (let i = 0; i < v1.length || i < v2.length; i++) {
    if (v1[i] < v2[i] || v1[i] === undefined) return false;
    else if (v1[i] > (v2[i] || 0)) return true;
  }
  return true;
}