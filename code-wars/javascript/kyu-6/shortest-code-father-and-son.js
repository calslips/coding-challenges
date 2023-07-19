/*
(Code length limit: 120 chars)

Every uppercase letter is Father, The corresponding lowercase
letters is the Son.

Give you a string s, If the father and son both exist, keep them.
If it is a separate existence, delete them. Return the result.

For example:

sc("Aab") should return "Aa"

sc("AabBc") should return "AabB"

sc("AaaaAaab") should return "AaaaAaa"
  (father can have a lot of son)

sc("aAAAaAAb") should return "aAAAaAA"
  (son also can have a lot of father ;-)

Code length calculation
In javascript, we can't get the user's real code, we can only get
the system compiled code. Code length calculation is based the
compiled code.

For example:

If you typed sc=x=>x+1
after compile, it will be:sc=function(x){return x+1;}

Parameters: a str
Returns: a str
Examples:
  sc("Aab"), "Aa"
  sc("AabBc"), "AabB"
  sc("AaaaAaab"), "AaaaAaa"
  sc("aAAAaAAb"), "aAAAaAA"
  sc("SONson"), "SONson"
  sc("FfAaTtHhEeRr"), "FfAaTtHhEeRr"
  sc("SONsonfather"), "SONson"
  sc("sonfather"), ""
  sc("DONKEYmonkey"), "ONKEYonkey"
  sc("monkeyDONKEY"), "onkeyONKEY"
  sc("BANAna"), "ANAna"
Pseudocode:
  convert input str to an array of chars
  filter array of chars to only include
    chars that are contained within input str in both uppercase & lowercase form
  join array of remaining chars back into a str and return it
*/

sc=s=>[...s].filter(c=>s.includes(c.toUpperCase())&&s.includes(c.toLowerCase())).join``