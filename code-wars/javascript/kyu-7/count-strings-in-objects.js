/**
 *Create a function strCount (takes an object as argument) that will count
 all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3
 */

function strCount(obj) {
  return Object.values(obj).reduce((c, e) => typeof e === 'string' ? ++c : typeof e === 'object' && e !== null ? c + strCount(e) : c, 0);
}