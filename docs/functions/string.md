This function helps you modify strings.

!!! note "String stringReplace(String input, String regularExpression, String replacement)"

    Repalce all occurrences of a given pattern in an initial string with another one.

    **Parameters** :

    * `input` : The initial string
    * `regularExpression` : The regular expression to match to
    * `replacement` : The replacement string

    **Returns** : The derived string

    **Examples** :

    SpEL with    : `${#stringReplace("Hello", "l+", "r")}`
