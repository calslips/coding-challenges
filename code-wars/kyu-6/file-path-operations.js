/**
 * Task:
This kata requires you to write an object that receives a file path and
does operations on it. NOTE FOR PYTHON USERS: You cannot use modules
os.path, glob, and re
The purpose of this kata is to use string parsing, so you're not supposed
to import external libraries. I could only enforce this in python.

Testing:
JavaScript:
const fm = new FileMaster('/Users/person1/Pictures/house.png');
fm.extension(); // output: 'png'
fm.filename(); // output: 'house'
fm.dirpath(); // output: '/Users/person1/Pictures/'
 */

class FileMaster {
  constructor(filepath) {
    this.filepath = filepath;
  }

  extension() {
    return this.filepath.slice(this.filepath.indexOf('.') + 1);
  }

  filename() {
    return this.filepath.slice(this.filepath.lastIndexOf('/') + 1, this.filepath.indexOf('.'));
  }

  dirpath() {
    return this.filepath.slice(0, this.filepath.lastIndexOf('/') + 1);
  }
}