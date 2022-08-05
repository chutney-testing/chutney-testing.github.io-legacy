# GENERATE FUNCTION

The following functions help you use ... :

* [\#uuid](#uuid)
* [\#randomLong](#randomLong)
* [\#randomInt](#randomInt)
* [\#id](#id)
<!-- * [\#id](#id)
* [\#id](#id) ? 3 differents methods with the same name ==> looking for a proper way to display that  -->
* [\#file](#file)
<!-- * [\#file](#file)
* [\#file](#file) ? 3 differents methods with the same name ==> looking for a proper way to display that -->

## uuid

!!! note "uuid()"

    A class that represents an immutable universally unique identifier (UUID). A UUID represents a 128-bit value.

    See [UUID.uuid()](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/UUID.html) for further details

    **Returns** :
    
    * `java.util.UUID`

!!! tip "Examples"

    SpEL without : `${T(java.util.String).uuid()}`

    SpEL with    : `${#uuid()}`

## randomLong

!!! note "randomLong()"

    Returns the next pseudorandom, uniformly distributed long value from this random number generator's sequence. The general contract of nextLong is that one long value is pseudorandomly generated and returned.

    See [Random.randomLong()](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Random.html#nextLong()) for further details

    **Returns** :
    
    * `java.util.Random`

!!! tip "Examples"

    SpEL without : `${T(java.util.String).valueOf(T(java.lang.System).randomLong()}`

    SpEL with    : `${#randomLong()}`