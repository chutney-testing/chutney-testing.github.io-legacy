# TcpPort

!!! note "int tcpPort()"

    Find an available TCP port randomly selected from the range

    **Returns** :

    * Returns an available TCP Port number

    **Examples** :

    SpEL : `${#tcpPort()}



!!! note "int tcpPorts(int num)"

    Find the requested number of available TCP ports, each randomly selected from the range

    **Returns** :

    * Returns a sorted set of available TCP port numbers

    **Examples** :

    SpEL : `${#tcpPorts(62335)}`



!!! note "int tcpPortMin(int minPort)"

    Find an available TCP port randomly selected from the range

    **Returns** :

    * Returns an available TCP port number

    **Examples** :

    SpEL : `${#tcpPortMin(62335)}`



!!! note "int tcpPortMinMax(int minPort, int maxPort)"

    Find an available TCP port randomly selected from the range

    **Returns** :

    * Returns 

    **Examples** :

    SpEL : `${#tcpPortMinMax(1400, 62335)}`



!!! note "int tcpPort(int num, int minPort, int maxPort)"

    Find the requested number of available TCP ports, each randomly selected from the range

    **Returns** :

    * Returns a sorted set of available TCP port numbers

    **Examples** :

    SpEL : `${#tcpPortsMinMax(1400, 62335)}`



!!! note "int tcpPortRandomRange(int range)"

    Find an available TCP port randomly selected from the range

    **Returns** :

    * Returns 

    **Examples** :

    SpEL : `${#tcpPortRandomRange(1420)}`

# UdpPort

!!! note "int udpPort()"

    Find an available UDP port randomly selected from the range [1024, 65535].

    **Returns** :

    * Returns an available UDP port number

    **Examples** :

    SpEL : `${#udpPort()}`


!!! note "int udpPorts(int num)"

    Find the requested number of available UDP ports, each randomly selected from the range [1024, 65535].

    **Returns** :

    * Returns a sorted set of available UDP port numbers

    **Examples** :

    SpEL : `${#udpPorts(25)}`



!!! note "int udpPortMin(int minPort)"

    Find an available UDP port randomly selected from the range [minPort, 65535].

    **Returns** :

    * Returns an available UDP port number

    **Examples** :

    SpEL : `${#udpPortMin(25)}`



!!! note "int udpPortMinMax(int minPort, int maxPort)"

    Find an available UDP port randomly selected from the range [minPort, maxPort].

    **Returns** :

    * Returns an available UDP port number

    **Examples** :

    SpEL : `${#udpPortMinMax(250, 1544)}`



!!! note "Integer udpPortsMinMax(int num, int minPort, int maxPort)"

    Find the requested number of available UDP ports, each randomly selected from the range [minPort, maxPort].

    **Returns** :

    * Returns a sorted set of available UDP port numbers

    **Examples** :

    SpEL : `${#udpPortsMinMax(12, 250, 1544)}`



!!! note "int udpPortRandomRange(int range)"

    Find an available UDP port randomly selected from the range [minPort, maxPort].

    **Returns** :

    * Returns an available UDP port number

    **Examples** :

    SpEL : `${#udpPortRandomRange(152)}`



!!! note "int udpPortsRandomRange(int num, int range)"

    Find the requested number of available UDP ports, each randomly selected from the range [minPort, maxPort].s

    **Returns** :

    * Returns a sorted set of available UDP port numbers

    **Examples** :

    SpEL : `${#udpPortRandomRange(152)}`

# randomNetworkMask

!!! note "String randomNetworkMask()"

    

    **Returns** :

    * 

    **Examples** :

    SpEL : `${#randomNetworkMask()}`