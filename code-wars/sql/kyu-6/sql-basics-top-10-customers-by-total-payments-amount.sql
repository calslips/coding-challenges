-- You are working for a company that wants to reward its top 10 customers with
-- a free gift. You have been asked to generate a simple report that returns the
-- top 10 customers by total amount spent ordered from highest to lowest. Total
-- number of payments has also been requested.

-- The query should output the following columns:
--   customer_id [int4]
--   email [varchar]
--   payments_count [int]
--   total_amount [float]

-- and has the following requirements:
-- only returns the 10 top customers,
-- ordered by total amount spent from highest to lowest

-- customer table schema
--   *customer_id
--   store_id
--   first_name
--   last_name
--   email
--   address_id
--   activebool
--   create_date
--   last_update
--   active

-- payment table schema
--   *payment_id
--   customer_id
--   staff_id
--   rental_id
--   amount
--   payment_date

SELECT
  customer.customer_id,
  email,
  COUNT(*) AS payments_count,
  SUM(CAST(amount AS float)) AS total_amount
FROM customer
JOIN payment
ON customer.customer_id = payment.customer_id
GROUP BY customer.customer_id
ORDER BY total_amount DESC
LIMIT 10;