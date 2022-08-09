Following functions help you generate values.


## file

!!! note "file()"


!!! tip "Examples"

    SpEL without : 

    SpEL with    : `${#generate.file()}`

!!! note "file(int fileSize)"


!!! tip "Examples"

    SpEL without : 

    SpEL with    : `${#generate.file(42)}`

!!! note "file(String destination, int fileSize)"


!!! tip "Examples"

    SpEL without : 

    SpEL with    : `${#generate.file("/path/to/dest/file", 42)}`


## id

!!! note "id(String prefix, int length)"


!!! tip "Examples"

    SpEL without : 

    SpEL with    : `${#generate.id("pre-", 5)}`

!!! note "id(int length, String suffix)"


!!! tip "Examples"

    SpEL without : 

    SpEL with    : `${#generate.id(5, "-suf")}`

!!! note "id(String prefix, int length, String suffix)"


!!! tip "Examples"

    SpEL without : 

    SpEL with    : `${#generate.id("pre-", 5, "-suf")}`


## randomInt

!!! note "randomInt()"


!!! tip "Examples"

    SpEL without : 

    SpEL with    : `${#generate.randomInt()}`

## randomLong

!!! note "randomLong()"

    Returns the next pseudorandom, uniformly distributed long value from this random number generator's sequence. The general contract of nextLong is that one long value is pseudorandomly generated and returned.

    See [Random.randomLong()](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Random.html#nextLong()) for further details

    **Returns** :

    * `java.util.String`

!!! tip "Examples"

    SpEL without : `${T(java.util.String).valueOf(T(java.lang.System).randomLong()}`

    SpEL with    : `${#generate.randomLong()}`


## uuid

!!! note "uuid()"

    A class that represents an immutable universally unique identifier (UUID). A UUID represents a 128-bit value.

    See [UUID.uuid()](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/UUID.html) for further details

    **Returns** :

    * `java.util.String`

!!! tip "Examples"

    SpEL without : `${T(java.util.String).uuid()}`

    SpEL with    : `${#generate.uuid()}`
