Following functions help you work with a Wiremock [LoggedRequest](https://www.javadoc.io/static/com.github.tomakehurst/wiremock/2.27.2/com/github/tomakehurst/wiremock/verification/LoggedRequest.html).

!!! note "Map<String, String> extractHeadersAsMap(LoggedRequest request)"

    Extract headers from a given Wiremock logged request.

    **Parameters** :

    * `request` : The loged request

    **Returns** : The request's headers as a map

    **Examples** :

    SpEL : `${#extractHeadersAsMap(#request)}`


!!! note "Map<String, String> extractParameters(LoggedRequest request)"

    Extract query parameters from a given Wiremock logged request.

    **Parameters** :

    * `request` : The loged request

    **Returns** : The request's query parameters as a map

    **Examples** :

    SpEL : `${#extractParameters(#request)}`
