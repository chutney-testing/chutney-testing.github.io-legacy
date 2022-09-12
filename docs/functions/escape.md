# Escape

!!! note "String escapeSql(String sql)"
    
    Replaces each substring of this string that matches the given regular expression with the given replacement.

    See [String.replaceAll()](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html#replaceAll(java.lang.String,java.lang.String)) for further details

    **Returns** :

    * Returns the resulting String

    **Examples** :

    SpEL : `${#escapeSql("sql")}`
    