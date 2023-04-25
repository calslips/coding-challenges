-- There is truly no magic in the world; the Hogwarts Sorting Hat
-- is SQL-based, its decision-making powers are common operators
-- and prospectIve students are merely data - names, and two
-- columns of qualities.

-- students
--   id
--   name
--   quality1
--   quality2

-- Slytherin are being quite strict this year and will only take
-- students who are evil AND cunning.

-- Gryffindor will take students who are brave but only if their
-- second quality is NOT evil.

-- Ravenclaw accepts students who are studious OR intelligent.

-- Hufflepuff will simply take those who have the quality
-- hufflepuff.

-- (don't worry, for simplicity's sake 'brave' and 'studious'
-- will only appear in quality1, and 'cunning' and 'intelligent'
-- will only appear in quality2.)

-- Return the id, name, quality1 and quality2 of all the students
-- who'll be accepted, ordered by ascending id.

SELECT * FROM students
WHERE quality1 LIKE 'evil' AND quality2 LIKE 'cunning'
  OR quality1 LIKE 'brave' AND quality2 NOT LIKE 'evil'
  OR quality1 LIKE 'studious' OR quality2 LIKE 'intelligent'
  OR quality1 LIKE 'hufflepuff' OR quality2 LIKE 'hufflepuff'
ORDER BY id;