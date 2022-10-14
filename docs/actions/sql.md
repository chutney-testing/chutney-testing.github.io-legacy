This action enables you to send SQL requests to a database.

# Configuration

!!! important "Database URL"
    You should configure your target with the property `jdbcUrl` to provide the JDBC URL of your database.

!!! note "Authentication"
    You can set target properties `username` and `password` if required.

!!! note "Max fetch size"
    You can set the maximum fetch size using target property `maxFetchSize` (default to 1000).

!!! important "Other configuration"
    In order to provide more configuration you should prefix all other target properties with `dataSource.`

!!! note "Logging results"
    You can configure the maximum number of results to print in the execution report for all actions by using
    configuration property `chutney.tasks.sql.nbLoggedRow` in your project.  
    Input value `nbLoggedRow` will override the value set by configuration.

# Usage

=== "Inputs"

    | Required | Name          | Type          | Default | Note                                              |
    |:--------:|:--------------|:--------------|:-------:|:--------------------------------------------------|
    |    *     | `target`      | String        |         |                                                   |
    |    *     | `statements`  | List<String\> |         |                                                   |
    |          | `nbLoggedRow` | Integer       |   30    | Maximum number of rows to log in execution report |

=== "Outputs"

    |          Name  | Type                       | Note                                                                   |
    |---------------:|:---------------------------|:-----------------------------------------------------------------------|
    | `recordResult` | List<[Records](#records)\> | Each item in this list contains the resulting records of one statement |

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
        "SELECT * FROM movies WHERE rating > 85"
    ),
    nbLoggedRow = 5,
    outputs = mapOf(
        "numberOfBest" to "recordResult.get(0).count()".spEL(), // (1)
        "bestMoviesTitles" to "records.stream().map(row -> row.get(\"TITLE\").value).collect(T(java.util.stream.Collectors).toList())".spEL() // (2)
    )
)
```

1. Expected result is 2
2. Expected result is ["Grave of the Fireflies", "My Neighbor Totoro"]

# Records

One `Records` contains results for **one statement** and provides methods to retrieve and search them.  
Results are structured by [columns](#column) and [rows](#row).

Records provides the following attributes and methods which you can use in SpEL :

* `affectedRows`: Returns the number of affected rows. This is useful for **INSERT**, **UPDATE** or **DELETE** statements  
-> `${#records.affectedRows}`

* `count()`: Returns the number of results from a **SELECT** statement.  
-> `${#records.count()}`

* `headers`: Returns the list of columns names (List< String >)  
-> `${#records.headers}`

* `columns`: Returns a list of [Columns](#column) (List< Column >).  
    A `Column` represents  the request result headers, with a name and an index.
-> `${#records.columns}`

* `records`: The list of [rows](#row)
  -> `${#records.records}`

## Column

A `Column` represents the request result headers, with a name and an index.  
The following attributes can be uses in SpEL :

* `name`: Get a header's name (String)  
-> `${#column.name}`
* `index`: Get a column index (int)  
-> `${#column.index}`

## Row

A `Row` provides you access to a record values.  
`Row` are structured by [cells](#cell).

* `get(String header)`: Get a cell by column's name  
-> `${#row.get("TITLE")}`

* `get(int index)`: Get a cell by column's index  
-> `${#row.get(4)}`

* `get(Column column)`: Get a cell by a given column  
-> `${#row.get(#myColumn)}`

## Cell

A `Cell` represents a value in a row, for a given column.  
The following attributes can be uses in SpEL :

* `column`: Get the column of a cell.  
* -> `${#cell.column}`  
* `value`: Get the actual value of a cell (Object)
* -> `${#cell.value}`  
