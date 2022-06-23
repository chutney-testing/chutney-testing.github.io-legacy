## HTTP Soap

### Inputs

| Name    | Type - Format   | Mandatory | Default | Validation |
|:--------|:----------------|:----------|:--------|:-----------|
| target  | string          | &#9745;   |         | &#9745;    |
| uri     | string          |           |         |            |
| body    | string          |           |         |            |
| username| string          |           |         |            |
| password| string          |           |         |            |
| timeout | duration string |           | 2000 ms |            |
| headers | string          |           |         |            |

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
