# Actions

[^1]: [Here, you can see the code for all actions.](https://github.com/chutney-testing/chutney/tree/master/task-impl/src/main/java/com/chutneytesting/task)


Chutney provides a set of capabilities, or `Actions`, you can use in your scenarios.
They replace all the boilerplate code you would have to write and maintain for executing your scenarios.
You can see them as a set of small generic clients. [^1]

For example, instead of writing your own HTTP client for doing a POST request, you just have to use the [HttpPost](/actions/http/#post) action
and give it the minimum amount of information as inputs (i.e. targeted service, URI, body and headers).

All actions are structured the same way with **inputs**, **outputs**, **validations** and **teardown**.

## Inputs

Inputs are the minimum information needed to run the action.  
For example, if you want to perform an HTTP GET request, you should give, at least, the targeted service and an URI.  
Obviously, you should be familiar with the technology behind each action you use, and we stick to the proper vocabulary (i.e. _body_ for HTTP, _payload_ for Kafka etc.)

!!! note
    Some input values are required and checked for correctness. While other values might not be required, or we provide a default value.

!!! note
    All actions performing a request on a remote service need to know the `Target`. While other action, like validating XML data, don't need a target.

## Outputs

Outputs contain the data collected after performing an action.
These data are set in the execution context and can be accessed and used later in another action.  
Each action provide a set of default outputs. But they are generic and may contain much more information than what you actually need.

!!! note
    The execution context holds outputs in a key/value map, where the key is a string and the value is typed.

!!! warning
    Since the execution context is a map, default outputs are overridden if you run the same action more than once in the scenario or if outputs have the same name (key).

!!! important
    We strongly recommend you to define your own outputs for setting relevant data in the execution context.

### How to use outputs

Let's say you are doing an HTTP GET request. By default, this action has 3 outputs: `status`, `body`, `headers`, but you want to capture a specific value from the response body.

In order to do so, you need to use an [expression](/todo) and Chutney [functions](/todo), so we recommend you to read about them for further details.

Let's see a simple example where you want to get a list of movie titles rated above 85/100.

```json title="Response body"
{
    "movies": [
        {
            "title": "Castle in the Sky",
            "director": "Hayao Miyazaki",
            "rating": 78
        },
        {
            "title": "Grave of the Fireflies",
            "director": "Isao Takahata",
            "rating": 94
        },
        {
            "title": "My Neighbor Totoro",
            "director": "Hayao Miyazaki",
            "rating": 86
        }
    ]
}
```

The best way to filter and extract the relevant data from a JSON document is to use a JSONPath expression.  
Here is the one for our example : `$.movies[?(@.rating > 85)].title`

In order to process it, you would need to write code using a JSONPath library and then tell Chutney to run your custom code.  
Chutney provides a way to run custom code during scenario execution using [Spring Expression](/todo).

Here is a raw expression you could write : `${T(com.jayway.jsonpath.JsonPath).parse(#body).read("$.movies[?(@.rating > 85)].title")}`  
Fortunately, Chutney also provides [Functions](/todo) for common tasks, which helps you write SpEL.  
In this case you can use the `json` function and the resulting SpEL would become : `${#json(#body, '$.movies[?(@.rating > 85)].title')}`

Now that you know what this cryptic expression is and does, let's see the full HTTP GET action with outputs :

=== "Kotlin"

    ``` kotlin
    HttpGetTask(
        target = "ghibli_movie_service",
        uri = "/all?offset=0&limit=3",
        outputs = mapOf(
            "bestMovies" to "${#json(#body, '$.movies[?(@.rating > 85)].title')}"
        )
    )
    ```

=== "JSON"

    ``` json
    {
        "type": "http-get",
        "target": "ghibli_movie_service",
        "inputs": {
            "uri": "/all?offset=0&limit=3"
        },
        "outputs": {
            "bestMovies": "${#json(#body, '$.movies[?(@.rating > 85)].title')}"
        }
    }
    ```

After executing this action, the execution context will contain the following outputs :

| Key        | Type                                 |
|:-----------|:-------------------------------------|
| body       | String                               |
| status     | Integer                              |
| headers    | org.springframework.http.HttpHeaders |
| bestMovies | List<String>                         |

Your relevant data can be accessed from another SpEL using `#bestMovies` and since it is a List you can call methods on it, like so : `${#bestMovies.get(0)}`  
`#body`, `#status` and `#headers` are also available but are very likely to be overridden by a following step while you have full control over the use of the `#bestMovies` key.

## Validation

Validations are a list of checks you want to perform in order to validate a step.
By default, a step will _fail_ when an error occurs, but we cannot verify the semantic of the result.  
Asserting a step depends on your feature and requirements.

For example, if an HTTP GET request returns a status code 500, the step is _technically_ complete and succeed.  
But, you may want to fail the step if the status is different than 200.

Each validation has a name and evaluates to a boolean, using [expressions](/todo) and [functions](/todo). 

=== "Kotlin"

    ``` kotlin
    HttpGetTask(
        target = "ghibli_movie_service",
        uri = "/all?offset=0&limit=3",
        outputs = mapOf(
            "bestMovies" to "${#json(#body, '$.movies[?(@.rating > 85)].title')}"
        ),
        validations = mapOf(
            "request_succeed" to "${#status == 200}",
            "found_2_movies" to "${#bestMovies.size() == 2}"
        )
    )
    ```

=== "JSON"

    ``` json
    {
        "type": "http-get",
        "target": "ghibli_movie_service",
        "inputs": {
            "uri": "/all?offset=0&limit=3"
        },
        "outputs": {
            "bestMovies": ${#json(#body, '$.movies[?(@.rating > 85)].title')}
        },
        validations = {
            "request_succeed": "${#status == 200}",
            "found_2_movies": "${#bestMovies.size() == 2}"
        }
    }
    ```

## Teardown

// TODO
