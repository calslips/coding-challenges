/*
You will be given a list of objects.
Each object has type, material, and possibly secondMaterial.
The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to
their material (and secondMaterial if it's present), by listing the type's
of objects that should go into those bins.

Notes
The bins should come in the same order as the materials listed above
All bins should be listed in the output, even if some of them are empty
If an object is made of two materials, its type should be listed in both
of the respective bins
The order of the type's in each bin should be the same as the order of
their respective objects was in the input list

Parameters: an array of objects
  (with props: type, material, secondMaterial (optional))
Returns: an array of arrays
  (subArray represents bins,
  contains the input objects types,
  based on the materials & secondMaterials if present,
  in the order of: paper, glass, organic, and plastic)
Examples:
  input = [
    {"type": "rotten apples", "material": "organic"},
    {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
    {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
    {"type": "amazon box", "material": "paper"},
    {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
  ]

  output = [
    ["wine bottle", "amazon box", "beer bottle"],
    ["wine bottle", "beer bottle"],
    ["rotten apples", "out of date yogurt"],
    ["out of date yogurt"]
  ]
Pseudocode:
  reduce input array
    if current material or secondMaterial is 'paper'
      push current type to accumulator[0]
    if current material or secondMaterial is 'glass'
      push current type to accumulator[1]
    if current material or secondMaterial is 'organic'
      push current type to accumulator[2]
    if current material or secondMaterial is 'plastic'
      push current type to accumulator[3]
    return accumulator array
    initial value of accumulator is an array of 4 arrays
  return result of reduce
*/

function recycle(array) {
  return array.reduce((r, c) => {
    if (c.material === 'paper' || c.secondMaterial === 'paper') r[0].push(c.type);
    if (c.material === 'glass' || c.secondMaterial === 'glass') r[1].push(c.type);
    if (c.material === 'organic' || c.secondMaterial === 'organic') r[2].push(c.type);
    if (c.material === 'plastic' || c.secondMaterial === 'plastic') r[3].push(c.type);
    return r;
  }, [[], [], [], []]);
}