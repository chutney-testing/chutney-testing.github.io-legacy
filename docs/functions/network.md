# TcpPort

!!! note "int tcpPort()"

    Find an available TCP port randomly selected from the range [1024, 65535].

    **Returns** :

    * Returns an available TCP Port number

    **Examples** :

    SpEL : `${#tcpPort()}`



!!! note "Integer tcpPorts(int num)"

    Find the requested number of available TCP ports, each randomly selected from the range [1024, 65535].

    **Returns** :

    * Returns a sorted set of available TCP port numbers

    **Examples** :

    SpEL : `${#tcpPorts(2000)}`



!!! note "int tcpPortMin(int minPort)"

    Find an available TCP port randomly selected from the range [minPort, 65535].

    **Returns** :

    * Returns an available TCP port number

    **Examples** :

    SpEL : `${#tcpPortMin(4455)}`



!!! note "int tcpPortMinMax(int minPort, int maxPort)"

    Find an available TCP port randomly selected from the range [minPort, maxPort].

    **Returns** :

    * Returns an available TCP port number

    **Examples** :

    SpEL : `${#tcpPortMinMax(1400, 62335)}`



!!! note "Integer tcpPortsMinMax(int num, int minPort, int maxPort)"

    Find the requested number of available TCP ports, each randomly selected from the range [minPort, maxPort].

    **Returns** :

    * Returns a sorted set of available TCP port numbers

    **Examples** :

    SpEL : `${#tcpPortsMinMax(420, 500, 1000)}`



!!! note "int tcpPortRandomRange(int range)"

    Find an available TCP port randomly selected from the range [minPort, maxPort].

    **Returns** :

    * Returns an available TCP port number 

    **Examples** :

    SpEL : `${#tcpPortRandomRange(120)}`

!!! note "Integer tcpPortsRandomRange(int num, int range)"

    Find the requested number of available TCP ports, each randomly selected from the range [minPort, maxPort].

    **Returns** :

    * Returns a sorted set of available TCP port numbers

    **Examples** :

    SpEL : `${#tcpPortsRandomRange(120, 230)}`

# UdpPort

!!! note "int udpPort()"

    Find an available UDP port randomly selected from the range [1024, 65535].

    **Returns** :

    * Returns an available UDP port number

    **Examples** :

    SpEL : `${#udpPort()}`


!!! note "Integer udpPorts(int num)"

    Find the requested number of available UDP ports, each randomly selected from the range [1024, 65535].

    **Returns** :

    * Returns a sorted set of available UDP port numbers

    **Examples** :

    SpEL : `${#udpPorts(2500)}`



!!! note "int udpPortMin(int minPort)"

    Find an available UDP port randomly selected from the range [minPort, 65535].

    **Returns** :

    * Returns an available UDP port number

    **Examples** :

    SpEL : `${#udpPortMin(2331)}`



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

    SpEL : `${#udpPortsMinMax(342, 250, 1544)}`



!!! note "int udpPortRandomRange(int range)"

    Find an available UDP port randomly selected from the range [minPort, maxPort].

    **Returns** :

    * Returns an available UDP port number

    **Examples** :

    SpEL : `${#udpPortRandomRange(152)}`



!!! note "Integer udpPortsRandomRange(int num, int range)"

    Find the requested number of available UDP ports, each randomly selected from the range [minPort, maxPort].

    **Returns** :

    * Returns a sorted set of available UDP port numbers

    **Examples** :

    SpEL : `${#udpPortsRandomRange(152, 12)}`

# RandomNetworkMask

!!! note "String randomNetworkMask()"

    Constructs a string builder with no characters in it and an initial capacity of 16 characters.

    **Returns** :

    * Returns a string containing the characters in this sequence in the same order as this sequence.

    **Examples** :

    SpEL : `${#randomNetworkMask()}`

# HostIpMatching

!!! note "String hostIpMatching(String regex)"

    Represents a Network Interface made up of a name, and a list of IP addresses assigned to this interface.

    **Returns** :

    * Returns the IP address string in textual presentation.

    **Examples** :

    SpEL : `${#hostIpMatching(127.0.*)}`