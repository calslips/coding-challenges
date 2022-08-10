/*
Some new cashiers started to work at your restaurant.
They are good at taking orders, but they don't know how to capitalize words,
or use a space bar!
All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is
to read the orders.
Their preference is to get the orders as a nice clean string with spaces
and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear
in the menu.
The menu items are fairly simple, there is no overlap in the names of the
items:

1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke

Parameters: a string
Returns: formatted string
  menu items capitalized,
  separated by spaces,
  in the same order as they appear in the menu
Examples:
  getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza')
    // 'Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke'
  getOrder('pizzachickenfriesburgercokemilkshakefriessandwich')
    // 'Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke'
Pseudocode:
  define a result variable assigned to an empty array
  define a menu variable to contain the menu items in their proper order/format (array)
  iterate over the menu
    while the input string contains the current element lowercased
      push current element to result array
      reassign input string to equal itself with matched element removed
      (slice 0 to indexOf match concatted with slice indexOf match + match length)
  return result array joined on space ' '
*/

function getOrder(input) {
  return 'Burger Fries Chicken Pizza Sandwich Onionrings Milkshake Coke'
    .split(' ')
    .reduce((order, item) => {
      while (input.includes(food = item.toLowerCase())) {
        order.push(item);
        input = input.slice(0, input.indexOf(food)) + input.slice(input.indexOf(food) + food.length);
      }
      return order;
    }, [])
    .join(' ');
}

// function getOrder(input) {
//   return 'Burger Fries Chicken Pizza Sandwich Onionrings Milkshake Coke'.split(' ').reduce((order, item) => {
//     while (input.includes(food = item.toLowerCase())) {
//       order.push(item);
//       input = input.slice(0, input.indexOf(food)) + input.slice(input.indexOf(food) + food.length);
//     }
//     return order;
//   }, []).join(' ');
// }