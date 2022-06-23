
## HTTP Put

The HTTP Put task performs an HTTP request with the PUT request method.

### Inputs

| Name    | Type - Format   | Mandatory | Default | Validation |
|:--------|:----------------|:----------|:--------|:-----------|
| target  | string          | &#9745;   |         | &#9745;    |
| uri     | string          |           |         |            |
| body    | string          |           |         |            |
| headers | string          |           |         |            |
| timeout | duration string |           | 2000 ms |            |

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
