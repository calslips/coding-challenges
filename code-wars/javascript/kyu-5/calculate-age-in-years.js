/**
 * Complete the following function that will return the difference
 * in years (age) for a birthdate, and optionally a "now" date.
 * Both arguments to the function are expected to be Date objects.
 * The returned difference can be either positive or negative.
 *
 * @param {Date} birthDate
 * @param {Date} nowDate
 * @return  {Number}

 Examples:
  getAge(new Date('1980/01/01')), 43
  getAge(new Date('1913/01/01'), new Date('2013/01/01'), 100
  getAge(new Date('2008/02/29'), new Date('2032/03/01')), 24
  getAge(new Date('2008/01/01'), new Date('2000/01/01')), -8
 Pseudocode:
  get the difference between now year and birth year
  get the difference between now month and birth month
  get the difference between now day (date) and birth day (date)
  if month difference is negative
    reduce year difference by 1
  OR if months are equal AND day (date) difference is negative
    reduce year difference by 1
  return year difference
 */

function getAge(birthDate, nowDate = new Date(Date.now())) {
  let yearDiff = nowDate.getYear() - birthDate.getYear(),
      monthDiff = nowDate.getMonth() - birthDate.getMonth(),
      dayDiff = nowDate.getDate() - birthDate.getDate();
  if (monthDiff < 0 || !monthDiff && dayDiff < 0) yearDiff--;
  return yearDiff;
}