=== "Inputs"

    | Required | Name     | Type                 |  Default  |
    |:--------:|:---------|:---------------------|:---------:|
    |    *     | `target`   | String             |           |
    |    *     | `uri`      | String             |           |
    |    *     | `body`     | String             |    {}     |
    |          | `username` | String             |           |
    |          | `password` | String             |           |
    |          | `timeout`  | String (Duration)  | "2000 ms" |
    |          | `headers`  | String             |           |

=== "Outputs"

    |      Name | Type            |
    |----------:|:----------------|
    |  `status` | int             |
    |    `body` | String          |
    | `headers` | [HttpHeaders](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/HttpHeaders.html) |

### Example

=== "Kotlin"
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
