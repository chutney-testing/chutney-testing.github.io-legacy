# tcpPort

!!! note "int tcpPort()"

    Find an available TCP port randomly selected from the range

    **Returns** :

    * Returns an available TCP Port number

    **Examples** :

    SpEL : `${#tcpPort()}

# tcpPorts

!!! note "int tcpPorts(int num)"

    Find the requested number of available TCP ports, each randomly selected from the range

    **Returns** :

    * Returns a sorted set of available TCP port numbers

    **Examples** :

    SpEL : `${#tcpPorts(62335)}`

# tcpPortMin

!!! note "int tcpPortMin(int minPort)"

    Find an available TCP port randomly selected from the range

    **Returns** :

    * Returns an available TCP port number

    **Examples** :

    SpEL : `${#tcpPortMin(62335)}`

# tcpPortMinMax

!!! note "int tcpPortMinMax(int minPort, int maxPort)"

    Find an available TCP port randomly selected from the range

    **Returns** :

    * Returns 

    **Examples** :

    SpEL : `${#tcpPortMinMax(1400, 62335)}`

# tcpPortsMinMax

!!! note "int tcpPort(int num, int minPort, int maxPort)"

    Find the requested number of available TCP ports, each randomly selected from the range

    **Returns** :

    * Returns a sorted set of available TCP port numbers

    **Examples** :

    SpEL : `${#tcpPortMinMax(1400, 62335)}`

# tcpPortRandomRange

!!! note "int tcpPortRandomRange(int range)"

    Find an available TCP port randomly selected from the range

    **Returns** :

    * Returns 

    **Examples** :

    SpEL : `${#tcpPortMinMax(1420)}`

# udpPort

!!! note "int udpPort()"

    Find an available UDP port randomly selected from the range [1024, 65535].

    **Returns** :

    * Returns an available UDP port number

    **Examples** :

    SpEL : `${#udpPort()}`

# udpPorts

!!! note "int udpPorts(int num)"

    Find the requested number of available UDP ports, each randomly selected from the range [1024, 65535].

    **Returns** :

    * Returns a sorted set of available UDP port numbers

    **Examples** :

    SpEL : `${#udpPort(25)}`

# udpPortMin

!!! note "int udpPortMin(int minPort)"

    Find an available UDP port randomly selected from the range [minPort, 65535].

    **Returns** :

    * Returns an available UDP port number

    **Examples** :

    SpEL : `${#udpPort(25)}`

# udpPortMinMax

!!! note "int udpPortMinMax(int minPort, int maxPort)"

    Find an available UDP port randomly selected from the range [minPort, maxPort].

    **Returns** :

    * Returns an available UDP port number

    **Examples** :

    SpEL : `${#udpPort(250, 1544)}`

# udpPortsMinMax

!!! note "int udpPortsMinMax(int num, int minPort, int maxPort)"

    Find the requested number of available UDP ports, each randomly selected from the range [minPort, maxPort].

    **Returns** :

    * Returns a sorted set of available UDP port numbers

    **Examples** :

    SpEL : `${#udpPort(12, 250, 1544)}`