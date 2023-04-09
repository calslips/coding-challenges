/*
Let's take a look at an interesting feature of JS:
custom Getters and Setters for objects.

The object of this exercise will be to provide a constructor
named "Archiver" that creates a "self-archiving" object with
respect to its "temperature" property, but otherwise looks and
acts just like a normal JS object. Each time the "temperature"
property is assigned, the object should add a log entry to an
array (the "archive") that it returns via a "getArchive"
function. The log entry should be formed as such:
{date: //the Date when the "temperature" property was assigned,
val: //the value that was written to the "temperature" property}.
The "date" property of the log entry should be a valid JS Date
object.

Parameters:
  a num, for setting temp
Returns:
  an array of objs, for getting archive
Examples:
  //new Date() == '2013-09-24...Z'
  const arc = new Archiver();
  arc.temperature = 33;
  arc.temperature = 28;
  arc.temperature = 21;
  arc.getArchive(),
    [{date: 2013-09-24..., val:33},{date: 2013-09-24..., val:28},{date: 2013-09-24..., val:21}]
Pseudocode:
  initialize an Archiver class
    define constructor, no args
      initialize private temp to null
      initialize private archive to an empty array
  define method getArchive
    returns private archive
  define getter temperature
    return private temperature value
  define setter temperature
    set private temperature to passed in arg
    initialize an obj containing 2 properties
      date for current date
      val for passed in arg
    push obj to private archive
*/

class Archiver {
  constructor() {
    this._archive = [];
    this._temperature = null;
  }
  getArchive() {
    return this._archive;
  }
  get temperature() {
    return this._temperature;
  }
  set temperature(val) {
    this._temperature = val;
    this._archive.push({date: new Date(), val});
  }
}