Following functions help you work with SOAP.

!!! note "String getSoapBody(final String login, final String password, final String body)"

    Creates WS username token, build an associated security header and inserts it as child into the given SOAP Envelope.

    **Parameters** :

    * `login` : The username to use
    * `password` : The password to use
    * `body` : The soap envelope to update

    **Returns** : The soap envelope with the security header

    **Examples** :

    SpEL : `${#getSoapBody('username', 'password', #soapEnvelope)}`
