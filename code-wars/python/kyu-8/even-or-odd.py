# Create a function that takes an integer as an argument and
# returns "Even" for even numbers or "Odd" for odd numbers.
#
# Parameters: an int
# Returns: a str
# Examples:
#   even_or_odd(2), "Even"
#   even_or_odd(1), "Odd"
#   even_or_odd(0), "Even"
#   even_or_odd(1545452), "Even"
#   even_or_odd(7), "Odd"
#   even_or_odd(78), "Even"
#   even_or_odd(17), "Odd"
#   even_or_odd(74156741), "Odd"
#   even_or_odd(100000), "Even"
#   even_or_odd(-123), "Odd"
#   even_or_odd(-456), "Even"
# Pseudocode:
#   if number modulo 2 is 1 (true)
#     return 'Odd'
#   otherwise if it evaluates to 0 (false)
#     return 'Even'

def even_or_odd(number):
    return 'Odd' if number % 2 else 'Even'