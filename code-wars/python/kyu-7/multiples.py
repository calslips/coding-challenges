# Make a program that takes a value (x) and returns "Bang" if
# the number is divisible by 3, "Boom" if it is divisible by 5,
# "BangBoom" if it divisible by 3 and 5, and "Miss" if it isn't
# divisible by any of them.
#
# Note: Your program should only return one value
#
# Ex: Input: 105 --> Output: "BangBoom"
# Ex: Input: 9 --> Output: "Bang"
# Ex: Input: 25 --> Output: "Boom"
#
# Parameters: an int
# Returns: a str
# Examples:
#   multiple(30), "BangBoom"
#   multiple(3), "Bang"
#   multiple(98), "Miss"
#   multiple(65), "Boom"
#   multiple(23), "Miss"
#   multiple(15), "BangBoom"
# Pseudocode:
#   return 'BangBoom' if input is divisible by both 3 AND 5
#   return 'Bang' if input is only divisible by 3
#   return 'Boom' if input is only divisible by 5
#   return 'Miss' otherwise

def multiple(x):
    return 'BangBoom' if x % 15 == 0 else 'Bang' if x % 3 == 0 else 'Boom' if x % 5 == 0 else 'Miss'