# GET

=== "Inputs"

    | Required | Name      | Type                 |  Default   |
    |:--------:|:----------|:---------------------|:----------:|
    |    *     | `target`  | String               |            |
    |    *     | `uri`     | String               |            |
    |          | `headers` | Map<String, String\> |            |
    |          | `timeout` | String               | "2000 ms"  |

=== "Outputs"

    |      Name | Type            |
    |----------:|:----------------|
    |  `status` | int             |
    |    `body` | String          |
    | `headers` | [HttpHeaders](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/HttpHeaders.html) |

### Example

=== "Kotlin"
    ``` kotlin
    HttpGetTask(
        target = "HTTP_TARGET",
        uri = "https://github.com/search?q=chutney",
        headers = mapOf(
          "Content-Type" to "application/json"
        ),
    )
    ```

# POST

=== "Inputs"

    | Required | Name      | Type                 |  Default   |
    |:--------:|:----------|:---------------------|:----------:|
    |    *     | `target`  | String               |            |
    |    *     | `uri`     | String               |            |
    |          | `body`    | String               | `{}`       |
    |          | `headers` | Map<String, String\> |            |
    |          | `timeout` | String               | "2000 ms"  |

=== "Outputs"

    |      Name | Type            |
    |----------:|:----------------|
    |  `status` | int             |
    |    `body` | String          |
    | `headers` | [HttpHeaders](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/HttpHeaders.html) |

### Example

=== "Kotlin"
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

# PUT

=== "Inputs"

    | Required | Name      | Type                 |  Default   |
    |:--------:|:----------|:---------------------|:----------:|
    |    *     | `target`  | String               |            |
    |    *     | `uri`     | String               |            |
    |          | `body`    | String               | `{}`       |
    |          | `headers` | Map<String, String\> |            |
    |          | `timeout` | String               | "2000 ms"  |

=== "Outputs"

    |      Name | Type            |
    |----------:|:----------------|
    |  `status` | int             |
    |    `body` | String          |
    | `headers` | [HttpHeaders](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/HttpHeaders.html) |

### Example

=== "Kotlin"
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

# DELETE

=== "Inputs"

    | Required | Name      | Type                 |  Default   |
    |:--------:|:----------|:---------------------|:----------:|
    |    *     | `target`  | String               |            |
    |    *     | `uri`     | String               |            |
    |          | `headers` | Map<String, String\> |            |
    |          | `timeout` | String               | "2000 ms"  |

=== "Outputs"

    |      Name | Type            |
    |----------:|:----------------|
    |  `status` | int             |
    |    `body` | String          |
    | `headers` | [HttpHeaders](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/HttpHeaders.html) |


### Example

=== "Kotlin"
    ``` kotlin
    HttpDeleteTask(
        target = "HTTP_TARGET",
        uri = "https://github.com/search?q=chutney",
        headers = mapOf(
          "Content-Type" to "application/json"
        ),
    )
    ```

# PATCH

=== "Inputs"

    | Required | Name      | Type                 |  Default   |
    |:--------:|:----------|:---------------------|:----------:|
    |    *     | `target`  | String               |            |
    |    *     | `uri`     | String               |            |
    |          | `body`    | String               | `{}`       |
    |          | `headers` | Map<String, String\> |            |
    |          | `timeout` | String               | "2000 ms"  |

=== "Outputs"

    |      Name | Type            |
    |----------:|:----------------|
    |  `status` | int             |
    |    `body` | String          |
    | `headers` | [HttpHeaders](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/HttpHeaders.html) |

### Example

=== "Kotlin"
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
# Mocking an HTTP Server

## Start

This action automatically registers a teardown to stop the server at the end of the scenario.

=== "Inputs"

    | Required | Name                  | Type   | Default |
    |:--------:|:----------------------|:-------|:-------:|
    |          | `port`                | String |  8443   |
    |          | `truststore-path`     | String |         |
    |          | `truststore-password` | String |         |
    |          | `keystore-path`       | String |         |
    |          | `keystore-password`   | String |         |

=== "Outputs"

    |         Name | Type                                                                                                                                 |
    |-------------:|:-------------------------------------------------------------------------------------------------------------------------------------|
    | httpsServer  | [WireMockServer](https://github.com/wiremock/wiremock/blob/master/src/main/java/com/github/tomakehurst/wiremock/WireMockServer.java) |

### Example

=== "Kotlin"
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
## Stop

=== "Inputs"

    | Required | Name         | Type           | Default |
    |:--------:|:-------------|:---------------|:-------:|
    |   *      | https-server | [WireMockServer](https://github.com/wiremock/wiremock/blob/master/src/main/java/com/github/tomakehurst/wiremock/WireMockServer.java) |         |

### Example

=== "Kotlin"
    ``` kotlin
    HttpServerStopTask(
        https-server = "${#httpsServer}",
    )
    ```

## Listen routes

This actions allows you to check wich requests have been received by a wiremock server.  
Available verbs are : `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `OPTIONS`, `HEAD`, `TRACE`, `ANY`

=== "Inputs"

    | Required | Name                     | Type                                                                                                                                    | Default |
    |:--------:|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------|:-------:|
    |    *     | `https-server`           | [WireMockServer](https://www.javadoc.io/doc/com.github.tomakehurst/wiremock/latest/com/github/tomakehurst/wiremock/WireMockServer.html) |         |
    |    *     | `uri`                    | String (regex)                                                                                                                          |         |
    |    *     | `verb`                   | String                                                                                                                                  |         |
    |          | `expected-message-count` | String                                                                                                                                  |    1    |

=== "Outputs"

    |      Name | Type                     |
    |----------:|:-------------------------|
    | requests  | List<[LoggedRequest](https://www.javadoc.io/doc/com.github.tomakehurst/wiremock/latest/com/github/tomakehurst/wiremock/verification/LoggedRequest.html)\> |    

### Example

=== "Kotlin"
    ``` kotlin
    HttpListenerTask(
        https-server = "${#httpsServer}",
        uri = "https://github.com/search?q=chutney",
        verb = "GET",
        expected-message-count = "1",
    )
    ```
