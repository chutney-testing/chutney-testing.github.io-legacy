!!! note "How to request a secured service"

    For all HTTP actions, authentication or secured connexion to a service is configured by setting properties on the **target**.

    * Basic Authentication:
        * To use a basic authorization header, set properties `username` and `password` on the target.

    * SSL:
        * To use an SSL context, set a `keystore` or `truststore` one the target.  
        Properties `keystore`, `keystorePassword`, `keyPassword`, `truststore` and `truststorePassword` could be alternatively used.

    * Proxy, 2 solutions: 
        * You can set a system property **http.proxyHost** or **https.proxyHost**, the HTTP client will use this as the default route planner.
        * You can set a target property `proxy`
            * Default port value is 3128.
            * Target property `proxy` override system property if set


```json title="Http target example"
{
    "name": "ghibli_movies_http_service",
    "url": "https://my.http.service:443/",
    "properties": {
        "username": "myUsername",
        "user": "myUsername", // (1)
        "userPassword": "myPassword",
        "password": "myPassword", // (2)
        "trustStore": "/home/APP/security/mytruststore.jks",
        "trustStorePassword": "myTrustStorePassword",
        "keyStore": "/home/APP/security/mykeyStore.jks",
        "keyStorePassword": "mykeyStorePassword",
        "keyPassword": "myKeyStoreKeyPassword",
        "proxy": "https://myproxy:3128"
    }
}
```

1. `username` or `user` to define user for basic authentification 
2. `userPassword` or `password` to define password for basic authentification

# Get

=== "Inputs"

    | Required | Name      | Type                                                             | Default   |
    |:--------:|:----------|:-----------------------------------------------------------------|:---------:|
    |    *     | `target`  | String                                                           |           |
    |    *     | `uri`     | String                                                           |           |
    |          | `headers` | Map<String, String\>                                             |           |
    |          | `timeout` | [Duration](/documentation/actions/other/#duration-type) (String) | "2000 ms" |

=== "Outputs"

    |      Name | Type                                                                                                                      |
    |----------:|:--------------------------------------------------------------------------------------------------------------------------|
    |  `status` | int                                                                                                                       |
    |    `body` | String                                                                                                                    |
    | `headers` | [HttpHeaders](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/HttpHeaders.html) |

### Example

=== "Kotlin"
    ``` kotlin
    HttpGetAction(
        target = "HTTP_TARGET",
        uri = "https://github.com/search?q=chutney",
        headers = mapOf(
          "Content-Type" to "application/json"
        ),
        timeout = "1 sec"
    )
    ```

# Post

=== "Inputs"

    | Required | Name      | Type                                                             |  Default   |
    |:--------:|:----------|:-----------------------------------------------------------------|:----------:|
    |    *     | `target`  | String                                                           |            |
    |    *     | `uri`     | String                                                           |            |
    |          | `body`    | String                                                           | `{}`       |
    |          | `headers` | Map<String, String\>                                             |            |
    |          | `timeout` | [Duration](/documentation/actions/other/#duration-type) (String) | "2000 ms"  |

=== "Outputs"

    |      Name | Type                                                                                                                      |
    |----------:|:--------------------------------------------------------------------------------------------------------------------------|
    |  `status` | int                                                                                                                       |
    |    `body` | String                                                                                                                    |
    | `headers` | [HttpHeaders](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/HttpHeaders.html) |

### Example

=== "Kotlin"
    ``` kotlin
    HttpPostAction(
        target = "HTTP_TARGET",
        uri = "https://github.com/search?q=chutney",
        body = "some content",
        headers = mapOf(
          "Content-Type" to "application/json"
        ),
    )
    ```

# Put

=== "Inputs"

    | Required | Name      | Type                                                             |  Default   |
    |:--------:|:----------|:-----------------------------------------------------------------|:----------:|
    |    *     | `target`  | String                                                           |            |
    |    *     | `uri`     | String                                                           |            |
    |          | `body`    | String                                                           | `{}`       |
    |          | `headers` | Map<String, String\>                                             |            |
    |          | `timeout` | [Duration](/documentation/actions/other/#duration-type) (String) | "2000 ms"  |

=== "Outputs"

    |      Name | Type                                                                                                                      |
    |----------:|:--------------------------------------------------------------------------------------------------------------------------|
    |  `status` | int                                                                                                                       |
    |    `body` | String                                                                                                                    |
    | `headers` | [HttpHeaders](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/HttpHeaders.html) |

### Example

=== "Kotlin"
    ``` kotlin
    HttpPutAction(
        target = "HTTP_TARGET",
        uri = "https://github.com/search?q=chutney",
        body = "some content",
        headers = mapOf(
          "Content-Type" to "application/json"
        ),
    )
    ```

# Delete

=== "Inputs"

    | Required | Name      | Type                                                             |  Default   |
    |:--------:|:----------|:-----------------------------------------------------------------|:----------:|
    |    *     | `target`  | String                                                           |            |
    |    *     | `uri`     | String                                                           |            |
    |          | `headers` | Map<String, String\>                                             |            |
    |          | `timeout` | [Duration](/documentation/actions/other/#duration-type) (String) | "2000 ms"  |

=== "Outputs"

    |      Name | Type                                                                                                                      |
    |----------:|:--------------------------------------------------------------------------------------------------------------------------|
    |  `status` | int                                                                                                                       |
    |    `body` | String                                                                                                                    |
    | `headers` | [HttpHeaders](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/HttpHeaders.html) |


### Example

=== "Kotlin"
    ``` kotlin
    HttpDeleteAction(
        target = "HTTP_TARGET",
        uri = "https://github.com/search?q=chutney",
        headers = mapOf(
          "Content-Type" to "application/json"
        ),
    )
    ```

# Patch

=== "Inputs"

    | Required | Name      | Type                                                             |  Default   |
    |:--------:|:----------|:-----------------------------------------------------------------|:----------:|
    |    *     | `target`  | String                                                           |            |
    |    *     | `uri`     | String                                                           |            |
    |          | `body`    | String                                                           | `{}`       |
    |          | `headers` | Map<String, String\>                                             |            |
    |          | `timeout` | [Duration](/documentation/actions/other/#duration-type) (String) | "2000 ms"  |

=== "Outputs"

    |      Name | Type                                                                                                                      |
    |----------:|:--------------------------------------------------------------------------------------------------------------------------|
    |  `status` | int                                                                                                                       |
    |    `body` | String                                                                                                                    |
    | `headers` | [HttpHeaders](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/HttpHeaders.html) |

### Example

=== "Kotlin"
    ``` kotlin
    HttpPatchAction(
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
    |          | `port`                | String | "8443"  |
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
    HttpServerStartAction(
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

    | Required | Name         | Type                                                                                                                                 | Default |
    |:--------:|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------|:-------:|
    |   *      | https-server | [WireMockServer](https://github.com/wiremock/wiremock/blob/master/src/main/java/com/github/tomakehurst/wiremock/WireMockServer.java) |         |

### Example

=== "Kotlin"
    ``` kotlin
    HttpServerStopAction(
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

    |      Name | Type                                                                                                                                                      |
    |----------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
    | requests  | List<[LoggedRequest](https://www.javadoc.io/doc/com.github.tomakehurst/wiremock/latest/com/github/tomakehurst/wiremock/verification/LoggedRequest.html)\> |    

### Example

=== "Kotlin"
    ``` kotlin
    HttpListenerAction(
        https-server = "${#httpsServer}",
        uri = "https://github.com/search?q=chutney",
        verb = "GET",
        expected-message-count = "1",
    )
    ```
