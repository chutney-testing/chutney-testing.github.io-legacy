
## HTTP GET

The HTTP Get task performs an HTTP request with the GET request method.

### Inputs

| Name    | Type - Format   | Mandatory | Default | Validation |
|:--------|:----------------|:----------|:--------|:-----------|
| target  | string          | &check;   |         | &check;    |
| uri     | string          |           |         |            |
| headers | string          |           |         |            |
| timeout | duration string |           | 2000 ms |            |

### Outputs

| Name    | Type - Format                               |
|:--------|:--------------------------------------------|
| status  | int                                         |
| body    | string                                      |
| headers | map (org.springframework.http.HttpHeaders)  |


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

* YAML
    ``` yaml
    description: Github research
      implementation:
        type: http-get
        target: HTTP_TARGET
        inputs:
          uri: "https://github.com/search?q=chutney"
          headers:
            Content-Type: application/json
          timeout: 2 sec
    ```
