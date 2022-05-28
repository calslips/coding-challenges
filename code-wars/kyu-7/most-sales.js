/*
You work in the best consumer electronics corporation, and your boss wants
to find out which three products generate the most revenue. Given 3 lists
of the same length like these:

products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
return the three product names with the highest revenue (amount * price).

Note: if multiple products have the same revenue, order them according to
their original positions in the input list.

Parameters: 3 arrays,
  products; array of strings
  amounts; array of numbers
  prices; array of numbers
Returns:
  a single array containing 3 elements; products with highest revenue
Examples:
  top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 24, 8], [199, 299, 399])
    // ["Cell Phones", "Vacuum Cleaner", "Computer"]
  top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [5, 25, 2, 7, 10, 3, 2, 24], [51, 225, 22, 47, 510, 83, 82, 124])
    // ['Vacuum Cleaner', 'Gold', ' Speakers']
  top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [0, 12, 24, 17, 19, 23, 120, 8], [9, 24, 29, 31, 51, 8, 120, 14])
    // ['Lego', 'Gold', 'Computer']
Pseudocode:
  initialize dict, where keys are products and values are the revenue
  iterate over the products array
    for each product at current index, collect revenue by multiplying associated amounts & prices at same index
    add property to dict (key is product, value is revenue)
  obtain an array of entries from dict,
  sort entries in descending order by revenue
  slice entries to only have the first 3 elements
  map over top 3 to make each element contain only the product name
  return mapped array
*/

function top3(products, amounts, prices) {
  return Object.entries(products.reduce((d, e, i) => ({...d, [e]: amounts[i] * prices[i]}), {}))
    .sort((a, b) => b[1] === a[1] ? products.indexOf(a[0]) - products.indexOf(b[0]) : b[1] - a[1])
    .slice(0, 3)
    .map(e => e[0]);
}

// function top3(products, amounts, prices) {
//   if (amounts.every(e => e === amounts[0]) && prices.every(e => e === prices[0])) return products.slice(0, 3)
//   return Object.entries(products.reduce((d, e, i) => ({...d, [e]: amounts[i] * prices[i]}), {})).sort((a, b) => b[1] - a[1]).slice(0, 3).map(e => e[0]);
// }