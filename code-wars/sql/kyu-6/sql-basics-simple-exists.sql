-- For this challenge you need to create a SELECT statement that
-- will contain data about departments that had a sale with a
-- price over 98.00 dollars. This SELECT statement will have to
-- use an EXISTS to achieve the task.

-- departments table schema
--   id
--   name

-- sales table schema
--   id
--   department_id (department foreign key)
--   name
--   price
--   card_name
--   card_number
--   transaction_date

-- resultant table schema
--   id
--   name

SELECT * FROM departments d WHERE EXISTS (SELECT department_id, price FROM sales WHERE d.id = department_id AND price > 98);