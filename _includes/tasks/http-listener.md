
## HTTP Listener

The HTTP Listener task performs an HTTP request with any requested method you give as verb that can be :
- GET
- POST
- DELETE
- PUT
- PATCH

### Outputs
 
| Name    | Type - Format   | 
|:--------|:----------------|
| requests| list com.github.tomakehurst.wiremock.verification.LoggedRequest     

### Inputs
 
| Name                      | Type - Format   | Mandatory | Default | Validation |
|:--------------------------|:----------------|:----------|:--------|:-----------|
| https-server              | WireMockServer  |           |         |            |
| uri                       | string          |           |         |            |
| verb                      | string          |           |         |            |
| expected-message-count    | string          |           |  1      |            |

### Example

* Kotlin
    ``` kotlin
    HttpListenerTask(
        https-server = "${#httpsServer}",
        uri = "https://github.com/search?q=chutney",
        verb = "GET",
        expected-message-count = "1",
    )
    ```
