
## HTTP GET

The HTTP Get task performs an HTTP request with the GET request method.

### Inputs

| Name    | Type - Format   | Mandatory | Default | Validation |
|:--------|:----------------|:----------|:--------|:-----------|
| target  | string          | &#9745;   |         | &#9745;    |
| uri     | string          |           |         |            |
| headers | string          |           |         |            |
| timeout | duration string |           | 2000 ms |            |


### Examples

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