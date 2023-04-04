/*
Complete the method so that it returns an array of all ID's
passed in. The data structure will be similar to the following:

const data = {
  id: 1,
  items: [
    {id: 2},
    {id: 3, items: [
      {id: 4},
      {id: 5}
    ]}
  ]
}

extractIds(data) // should return [1,2,3,4,5]
The method should be able to handle the case of empty data being
passed in.

Note: The only arrays that need to be traversed are those
assigned to the "items" property.

Parameters: an obj
  with properties id & items
Returns: an array of nums
  all the ids contained within input obj
Examples:
  const data1 = {
	  id : 1,
		items : [
		  {id : 2},
		  {id : 3}
		]
	};
	const data2 = {
		id : 1,
		items : [
		  {id : 2},
		  {id : 3, items : [
		    {id : 4},
		    {id : 5}
	    ]}
		]
	}
	const data3 = {
		id : 1,
	  items : [{
		  id : 2,
		  items : [{
			  id : 3,
			  items : [
			    {id : 4},
			    {id : 5}
			  ]
		  },{
			  id : 6,
			  items : [{id : 7}]
			}]
		}]
	}

  extractIds({}), []
  extractIds(data1), [1,2,3]
  extractIds(data2), [1,2,3,4,5]
  extractIds(data3), [1,2,3,4,5,6,7]
Pseudocode:
  convert input obj into an array of keys
  reduce array of keys into an array of nums
    if key equals id
      return accumulator array concatted with value
    otherwise if key equals items
      return accumulator array concatted with results of
      each item passed as an arg to recursive call of fn
  return reduced array
*/

function extractIds(data) {
  return Object.values(data).reduce((a, v) => a.concat(...(isNaN(v) ? v.map(extractIds) : [v])), []);
}