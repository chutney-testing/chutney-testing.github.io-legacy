### Outputs

The following HTTP tasks do have the same outputs :

- HTTP `GET`
- HTTP `POST`
- HTTP `PUT`
- HTTP `DELETE`
- HTTP `SOAP`
- HTTP `PATCH`


| Name    | Type - Format                               |
|:--------|:--------------------------------------------|
| status  | int                                         |
| body    | string                                      |
| headers | map (org.springframework.http.HttpHeaders)  |

## GET

The HTTP Get task performs an HTTP request with the `GET` request method.

### Inputs

| Name    | Type - Format   | Mandatory        | Default | Validation       |
|:--------|:----------------|:-----------------|:--------|:-----------------|
| target  | string          | :material-check: |         | :material-check: |
| uri     | string          |                  |         |                  |
| headers | string          |                  |         |                  |
| timeout | duration string |                  | 2000 ms |                  |


### Example

* Kotlin
    ``` kotlin
    HttpGetTask(
        target = "HTTP_TARGET",
        uri = "https://github.com/search?q=chutney",
        headers = mapOf(
          "Content-Type" to "application/json"
        ),
    )
    ```

## POST

The HTTP Post task performs an HTTP request with the `POST` request method.

### Inputs

| Name    | Type - Format   | Mandatory        | Default | Validation       |
|:--------|:----------------|:-----------------|:--------|:-----------------|
| target  | string          | :material-check: |         | :material-check: |
| uri     | string          |                  |         |                  |
| body    | string          |                  |         |                  |
| headers | string          |                  |         |                  |
| timeout | duration string |                  | 2000 ms |                  |

### Example

* Kotlin
    ``` kotlin
    HttpPostTask(
        target = "HTTP_TARGET",
        uri = "https://github.com/search?q=chutney",
        body = "some content",
        headers = mapOf(
          "Content-Type" to "application/json"
        ),
    )
    ```

## PUT

The HTTP Put task performs an HTTP request with the `PUT` request method.

### Inputs

| Name    | Type - Format   | Mandatory        | Default | Validation         |
|:--------|:----------------|:-----------------|:--------|:-------------------|
| target  | string          | :material-check: |         | :material-check:   |
| uri     | string          |                  |         |                    |
| body    | string          |                  |         |                    |
| headers | string          |                  |         |                    |
| timeout | duration string |                  | 2000 ms |                    |

### Example

* Kotlin
    ``` kotlin
    HttpPutTask(
        target = "HTTP_TARGET",
        uri = "https://github.com/search?q=chutney",
        body = "some content",
        headers = mapOf(
          "Content-Type" to "application/json"
        ),
    )
    ```

## DELETE

The HTTP Delete task performs an HTTP request with the `DELETE` request method.

### Inputs

| Name    | Type - Format   | Mandatory          | Default | Validation       |
|:--------|:----------------|:-------------------|:--------|:-----------------|
| target  | string          | :material-check:   |         | :material-check: |
| uri     | string          |                    |         |                  |
| headers | string          |                    |         |                  |
| timeout | duration string |                    | 2000 ms |                  |


### Example

* Kotlin
    ``` kotlin
    HttpDeleteTask(
        target = "HTTP_TARGET",
        uri = "https://github.com/search?q=chutney",
        headers = mapOf(
          "Content-Type" to "application/json"
        ),
    )
    ```

## SOAP

### Inputs

| Name    | Type - Format   | Mandatory        | Default | Validation       |
|:--------|:----------------|:-----------------|:--------|:-----------------|
| target  | string          | :material-check: |         | :material-check: |
| uri     | string          |                  |         |                  |
| body    | string          |                  |         |                  |
| username| string          |                  |         |                  |
| password| string          |                  |         |                  |
| timeout | duration string |                  | 2000 ms |                  |
| headers | string          |                  |         |                  |

### Example

* Kotlin
    ``` kotlin
    HttpSoapTask(
        target = "HTTP_TARGET",
        uri = "https://github.com/search?q=chutney",
        username = "userprivate",
        password = "userpassword",
        headers = mapOf(
          "Content-Type" to "application/json"
        ),
    )
    ```

## PATCH

The HTTP Patch task performs an HTTP request with the `PATCH` request method.

### Inputs

| Name    | Type - Format   | Mandatory        | Default | Validation       |
|:--------|:----------------|:-----------------|:--------|:-----------------|
| target  | string          | :material-check: |         | :material-check: |
| uri     | string          |                  |         |                  |
| body    | string          |                  |         |                  |
| headers | string          |                  |         |                  |
| timeout | duration string |                  | 2000 ms |                  |

### Example

* Kotlin
    ``` kotlin
    HttpPatchTask(
        target = "HTTP_TARGET",
        uri = "https://github.com/search?q=chutney",
        body = "some content",
        headers = mapOf(
          "Content-Type" to "application/json"
        ),
    )
    ```

## SERVER START

### Outputs

| Name         | Type - Format                               |
|:-------------|:--------------------------------------------|
| httpsServer  | WireMockServer                              |
| finally      | https-server-stop                           |

### Inputs

| Name                      | Type - Format   | Mandatory | Default | Validation |
|:--------------------------|:----------------|:----------|:--------|:-----------|
| port                      | string          |           |  8443   |            |
| truststore-path           | string          |           |         |            |
| truststore-password       | string          |           |         |            |
| keystore-path             | string          |           |         |            |
| keystore-password         | string          |           |         |            |
| key-password              | string          |           |         |            |

### Example

* Kotlin
    ``` kotlin
    HttpServerStartTask(
        port = "8443",
        truststore-path = "/tmp/trustore.jks",
        truststore-password = "password",
        keystore-path = "/user/admin/keystore",
        keystore-password = "keystorepassword",
        key-password = "passwordkey",
        ),
    )
    ```

## LISTENER

The HTTP Listener task performs an HTTP request with any requested method you give as verb that can be :

- `GET`
- `POST`
- `PUT`
- `DELETE`
- `SOAP`
- `PATCH`

### Outputs
 
| Name    | Type - Format                                                   | 
|:--------|:----------------------------------------------------------------|
| requests| list com.github.tomakehurst.wiremock.verification.LoggedRequest |    

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

## SERVER STOP

### Inputs

| Name          | Type - Format   | Mandatory | Default | Validation       |
|:--------------|:----------------|:----------|:--------|:-----------------|
| https-server  | WireMockServer  |           |         | :material-check: |

### Example

* Kotlin
    ``` kotlin
    HttpServerStopTask(
        https-server = "${#httpsServer}",
    )
    ```
