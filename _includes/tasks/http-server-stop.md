## HTTP Server Stop

### Inputs

| Name          | Type - Format   | Mandatory | Default | Validation |
|:--------------|:----------------|:----------|:--------|:-----------|
| https-server  | WireMockServer  |           |         | &#9745;    |

### Example

* Kotlin
    ``` kotlin
    HttpServerStopTask(
        https-server = "${#httpsServer}",
    )
    ```
