!!! note "nullable(Object input)"

    This function helps you handle context values which may be null.

    See [Optional.ofNullable()](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Optional.html#ofNullable(T)) for further details

    **Parameters** :

    * Object input

    **Returns** :
    
    * The typed value or the String "null" in case the value was null.


!!! tip "Examples"

    SpEL without : `${T(java.util.Optional).ofNullable(#mayBeNull).orElse("null")}`

    SpEL with    : `${#nullable(#mayBeNull)}`
