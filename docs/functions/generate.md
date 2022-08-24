Following functions help you generate random values.


## file

!!! note "file()"

    Generate a file with a default size of 1kB, in the default OS temp directory.
    File name is prefixed with _chutney_

    **Returns** :

    * The canonical path of the file as a [String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html)

!!! tip "Examples"

    SpEL : `${#generate.file()}`

!!! note "file(int fileSize)"

    Generate a file with a size of _n_ bytes, in the default OS temp directory.
    File name is prefix with _chutney_ and maximum file size is 100MB (104857600 bytes).

    **Parameters** :
    
    * A given file size in bytes as an [int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

    **Returns** :

    * The canonical path of the file as a [String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html)

!!! tip "Examples"

    SpEL : `${#generate.file(42)}`

!!! note "file(String destination, int fileSize)"

    Generate a file with a size of _n_ bytes, with a specific path and filename.
    Maximum file size is 100MB (104857600 bytes).

    **Parameters** :
    
    * A destination file path as a [String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html)
    * A given file size in bytes as an [int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

    **Returns** :

    * The canonical path of the file as a [String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html)

!!! tip "Examples"

    SpEL : `${#generate.file("/path/to/dest/file", 42)}`


## id

!!! note "id(String prefix, int length)"

    Generate a [String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html) with a prefix and _n_ random characters.

    **Parameters** :
    
    * A prefix as a [String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html)
    * The length of random characters as an [int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

    **Returns** :

    * The generated [String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html)


!!! tip "Examples"

    SpEL : `${#generate.id("prefix-", 6)}`  
            -> may produce "prefix-r4nd0m" 

!!! note "id(int length, String suffix)"

    Generate a [String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html) with _n_ random characters and a given suffix.

    **Parameters** :
    
    * The length of random characters as an [int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)
    * A suffix as a [String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html)

    **Returns** :

    * The generated [String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html)


!!! tip "Examples"

    SpEL : `${#generate.id(6, "-suffix")}`  
            -> may produce "r4nd0m-suffix"

!!! note "id(String prefix, int length, String suffix)"

    Generate a [String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html) with a given prefix, _n_ random characters and a given suffix.

    **Parameters** :
    
    * A prefix as a [String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html)
    * The length of random characters as an [int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)
    * A suffix as a [String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html)

    **Returns** :

    * The generated [String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html)


!!! tip "Examples"

    SpEL : `${#generate.id("pre-", 6, "-suf")}`  
            -> may produce "pre-r4nd0m-suf"


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

    Generates a unique identifier (UUID). 

    See [UUID.uuid()](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/UUID.html) for further details

    **Returns** :

    * `java.util.String`

!!! tip "Examples"

    SpEL without : `${T(java.util.String).uuid()}`

    SpEL with    : `${#generate.uuid()}`
