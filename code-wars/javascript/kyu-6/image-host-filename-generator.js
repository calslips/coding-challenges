/*
You are developing an image hosting website.

You have to create a function for generating random and unique
image filenames.

Create a function for generating a random 6 character string
which will be used to access the photo URL.

To make sure the name is not already in use, you are given
access to an PhotoManager object.

You can call it like so to make sure the name is unique

// at this point, the website has only one photo,
// hosted on the 'ABCDEF' url
photoManager.nameExists('ABCDEF'); // returns true
photoManager.nameExists('BBCDEF'); // returns false

Note: We consider two names with same letters but different
      cases to be unique.

Parameters: none
Returns: random str (length 6, upper/lowercase letters)
Examples:
  generateName(), 'jtFNPg'
  generateName(), 'ydGhVB'
  generateName(), 'QjgjGz'
Pseudocode:
  initialize name var
  initialize do/while loop
    do
      assign name var to empty str
      initialize a loop to run 6 times
        concatenate a random upper or lowercase letter to name
    while
      run the above as long as name exists in photoManager
  return name
*/

function generateName() {
  let name;
  do {
    name = '';
    for (let i = 0; i < 6; i++) {
      name += String.fromCharCode(Math.round(Math.random() * 25 + (Math.round(Math.random()) ? 65 : 97)));
    }
  } while (photoManager.nameExists(name));
  return name;
}