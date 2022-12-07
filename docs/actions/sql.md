!!! note "Configuration"
    Most of the configuration is done on the target database.

    * Database URL:  
    You should configure your target with the property `jdbcUrl` to provide the JDBC URL of your database.
    
    * Authentication:  
    You can set target properties `username` and `password` if required.
    
    * Max fetch size:  
    You can set the maximum fetch size using target property `maxFetchSize` (default to 1000).
    
    * Other configuration:  
    In order to provide more configuration you should prefix all other target properties with `dataSource.`

    ```json title="Example"
    {
        "name": "ghibli_movies_database",
        "url": "tcp://myoracle.db.server:1531/",
        "properties": {
            "jdbcUrl": "jdbc:oracle:thin:@myoracle.db.server:1531/ghibli_movies_service",
            "username": "myUsername",
            "password": "myPassword",
            "maxFetchSize": "100",
            "dataSource.driverClassName": "oracle.jdbc.OracleDriver",
            "dataSource.maximumPoolSize": "5"
        }
    }
    ```

=== "Inputs"

    | Required | Name          | Type          | Default | Note                                              |
    |:--------:|:--------------|:--------------|:-------:|:--------------------------------------------------|
    |    *     | `target`      | String        |         |                                                   |
    |    *     | `statements`  | List<String\> |         |                                                   |
    |          | `nbLoggedRow` | Integer       |   30    | Maximum number of rows to log in execution report |

=== "Outputs (when `statements` input has only one 1 statement)"

    |      Name  | Type          | Note                          |
    |-----------:|:--------------|:------------------------------|
    |     `rows` | [Rows](#rows) |                               |
    | `firstRow` | [Row](#row)   | is an alias for `rows.get(0)` |

=== "Outputs (when `statements` input has more than 1 statement)"

    |          Name  | Type                       | Note                                                                   |
    |---------------:|:---------------------------|:-----------------------------------------------------------------------|
    | `recordResult` | List<[Records](#records)\> | Each item in this list contains the resulting records of one statement |


!!! note "Logging results"
    You can configure the maximum number of results to print in the execution report for all actions by using
    configuration property `chutney.actions.sql.max-logged-rows` in your project.  
    Input value `nbLoggedRow` will override the value set by configuration.

### Example

Here is an example based one the following table : 

| ID  | TITLE                    |    YEAR    | RATING |         DIRECTOR |
|:---:|:-------------------------|:----------:|:------:|-----------------:|
|  1  | "Castle in the Sky"      | 1986-08-02 |   78   | "Hayao Miyazaki" |
|  2  | "Grave of the Fireflies" | 1988-04-16 |   94   |  "Isao Takahata" |
|  3  | "My Neighbor Totoro"     | 1988-04-16 |   86   | "Hayao Miyazaki" |

=== "Kotlin"
``` kotlin
SqlTask(
    target = "ghibli_movies_database",
    statements = listOf(
        "SELECT * FROM movies WHERE rating > 85" // (1)
    ),
    nbLoggedRow = 5, // (2)
    outputs = mapOf(
        "numberOfBest" to "rows.count()".spEL(), // (3)
        "bestMoviesTitles" to "rows.get(\"TITLE\")".spEL() // (4)
    )
)
```

1. `statements` has only one entry, so outputs `rows` and `firstRow` are available but `recordResult` is not
2. Will locally override configuration `chutney.actions.sql.max-logged-rows`
3. Expected result is 2
4. Expected result is ["Grave of the Fireflies", "My Neighbor Totoro"]

# Records

One `Records` instance contains results for **one statement** and provides methods to retrieve and search them.  
Results are structured by [columns](#column) and [rows](#row).

Following attributes and methods are available in SpEL :

* `affectedRows`: Returns the number of affected rows. This is useful for **INSERT**, **UPDATE** or **DELETE** statements  
-> `${#records.affectedRows}`

* `count()`: Returns the number of results from a **SELECT** statement.  
-> `${#records.count()}`

* `headers`: Returns the list of columns names (List< String >)  
-> `${#records.headers}`

* `columns`: Returns a list of [Columns](#column) (List< Column >). A `Column` represents  the request result headers, with a name and an index.  
-> `${#records.columns}`

* `records`: The list of [rows](#row) as List<[Row](#row)>  
  -> `${#records.records}`

* `rows()`: The list of [rows](#rows) as [Rows](#rows)  
-> `${#records.rows}`

## Rows

One `Rows` instance contains results for **one statement** and provides methods to retrieve and search them.  
Following attributes and methods are available in SpEL :

* `count()`: Returns the number of results from a **SELECT** statement.  
-> `${#rows.count()}`

* `get(int index)`: Returns the [row](#row) found at given index (starts at 0) or an empty row when not found  
-> `${#rows.get(42)}`

* `get(String header)`: Returns a list of values (`List<Object>`) for one column's name  
-> `${#rows.get("TITLE")}`

* `valuesOf(String... header)`: Returns a list of values (`List<List<Object>>`) for one or many column's name  
-> `${#rows.valuesOf("DIRECTOR", "TITLE")}`

* `asMap()`: Transforms the structure as a `List<Map<String, Object>>`  
  Where `Map<String, Object>` represents a row, `String` is a header and `Object` an actual value  
  -> `${#rows.asMap()}`

## Row

A `Row` provides you access to a record values.  

* `get(String header)`: Get the actual value (Object) by column's name  
-> `${#row.get("TITLE")}`

* `get(int index)`: Get the actual value (Object) by column's index  
-> `${#row.get(4)}`

* `get(Column column)`: Get the actual value (Object) by a given column  
-> `${#row.get(#myColumn)}`

## Column

A `Column` represents the request result headers, with a name and an index.  
The following attributes can be used in SpEL :

* `name`: Get a header's name (String)  
  -> `${#column.name}`

* `index`: Get a column index (int)  
  -> `${#column.index}`
