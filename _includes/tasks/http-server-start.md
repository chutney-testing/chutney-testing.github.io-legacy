## HTTP Server Start

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
