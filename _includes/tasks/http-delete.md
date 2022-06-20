
## HTTP Delete

The HTTP Delete task performs an HTTP request with the DELETE request method.

### Inputs

| Name    | Type - Format   | Mandatory | Default | Validation |
|:--------|:----------------|:----------|:--------|:-----------|
| target  | string          | &#9745;   |         | &#9745;    |
| uri     | string          |           |         |            |
| headers | string          |           |         |            |
| timeout | duration string |           | 2000 ms |            |
| body    | string          |           |         |            |


### Examples

* Kotlin
    ``` kotlin
    HttpDeleteTask(
        target = "HTTP_TARGET",
        uri = "https://github.com/search?q=chutney",
        body = "some content",
        headers = mapOf(
          "Content-Type" to "application/json"
        ),
    )
    ```
