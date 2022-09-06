# resourcePath

!!! note "String resourcePath(String name)"

    See [()]()) for further details

    **Returns** :

    * Returns the string representation of this path.

    **Examples** :

    SpEL : `${#resourcePath()}`

# resourcesPath

!!! note "String resourcesPath(String name)"

    See [()]()) for further details

    **Returns** :

    * Returns a URI equivalent to this URL. This method functions in the same way as new URI (this.toString())

    **Examples** :

    SpEL : `${#resourcesPath()}`

# resourceContent

!!! note "String resourceContent(String name, String charset)"
    
    See [()]()) for further details
    
    **Returns** :

    * Reads all characters from a file into a string, decoding from bytes to characters using the specified charset.

    **Examples** :

    SpEL : `${#resourceContent()}`

# resourceToPath

!!! note "String resourceToPath(String name)"

    See [()]()) for further details
    
    **Returns** :

    * Returns a reference to the currently executing thread object.

    **Examples** :

    SpEL : `${#resourceToPath()}`