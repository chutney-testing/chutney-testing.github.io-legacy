# resourcePath

!!! note "String resourcePath(String name)"

    
    See [Path.toString()](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/nio/file/Path.html#toString()) for further details

    **Returns** :

    * Returns the string representation of this path.

    **Examples** :

    SpEL : `${#resourcePath("name")}`

# resourcesPath

!!! note "String resourcesPath(String name)"

    See [URL.toURI()](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/net/URL.html#toURI()) for further details

    **Returns** :

    * Returns a URI equivalent to this URL. This method functions in the same way as new URI (this.toString())

    **Examples** :

    SpEL : `${#resourcesPath("name")}`

# resourceContent

!!! note "String resourceContent(String name, String charset)"
    
    
    
    **Returns** :

    * Reads all characters from a file into a string, decoding from bytes to characters using the specified charset.

    **Examples** :

    SpEL : `${#resourceContent("name")}`

<!-- # resourceToPath

!!! note "String resourceToPath(String name)"

    See [()]()) for further details
    
    **Returns** :

    * Returns a reference to the currently executing thread object.

    **Examples** :

    SpEL : `${#resourceToPath("name")}`

# uriToPath

!!! note "Path uriToPath(URI uri)"

    See [()]()) for further details
    
    **Returns** :

    * 

    **Examples** :

    SpEL : `${#uriToPath("https://github.com/search?q=chutney")}` -->
