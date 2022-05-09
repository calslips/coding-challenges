/**
 * Given a credit card number we can determine who the issuer/vendor is
 * with a few basic knowns.

Complete the function getIssuer() that will use the values shown below to
determine the card issuer for a given card number. If the number cannot be
matched then the function should return the string Unknown.

| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |
Examples
getIssuer(4111111111111111) == "VISA"
getIssuer(4111111111111) == "VISA"
getIssuer(4012888888881881) == "VISA"
getIssuer(378282246310005) == "AMEX"
getIssuer(6011111111111117) == "Discover"
getIssuer(5105105105105100) == "Mastercard"
getIssuer(5105105105105106) == "Mastercard"
getIssuer(9111111111111111) == "Unknown"
 */

function getIssuer(n) {
  n = n.toString();
  switch (true) {
    case (n.startsWith('34') || n.startsWith('37')) && n.length === 15:
      return 'AMEX';
    case n.startsWith('6011') && n.length === 16:
      return 'Discover';
    case n.startsWith('51') || n.startsWith('52') || n.startsWith('53') || n.startsWith('54') || n.startsWith('55') && n.length === 16:
      return 'Mastercard';
    case n.startsWith('4') && (n.length === 13 || n.length === 16):
      return 'VISA';
    default:
      return 'Unknown';
  }
}