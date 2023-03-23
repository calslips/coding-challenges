/*
This code does not execute properly. Try to figure out why.

SELECT price + amount AS total FROM items

items is a table containing colums:
  id, name, price, amount

we want to to take the data from items,
rearrange it to return a table with a single column:
  total
which is the item price MULTIPLIED by the amount of items

the original query incorrectly returns the total as
price PLUS amount
*/

SELECT price * amount AS total FROM items;