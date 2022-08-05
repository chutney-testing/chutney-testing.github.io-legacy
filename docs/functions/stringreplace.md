# STRINGREPLACE FUNCTION

!!! note "str_replace(String input, String regularExpression, String replacement)"

    Returns a string resulting from replacing all occurrences of oldChar in this string with newChar.

    See [String.str_replace()](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html#replace(char,char)) for further details

    **Parameters** :

    * String input
    * String regularExpression
    * String replacement

    **Returns** :
    
    * `java.lang.String`


!!! tip "Examples"

    SpEL without : `${T(java.lang.String).str_replace("input", "regularExpression", "replacement")}`

    SpEL with    : `${#str_replace("input", "regularExpression", "replacement")}`