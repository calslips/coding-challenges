-- For this challenge you need to create a simple HAVING statement,
-- you want to count how many people have the same age and return
-- the groups with 10 or more people who have that age.

-- people table schema
--   id
--   name
--   age

-- return table schema
--   age
--   total_people

-- worked for postgres
SELECT age, COUNT(age) AS total_people FROM people GROUP BY age HAVING COUNT(age) > 9;

-- word from sqlite
SELECT age, COUNT(age) AS total_people FROM people GROUP BY age HAVING total_people > 9;