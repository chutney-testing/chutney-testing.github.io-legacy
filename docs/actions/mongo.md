!!! important "Target Configuration"
    For all actions, the target should have a property `databaseName`


# Count

=== "Inputs"

    | Required | Name         | Type    |  Default   |
    |:--------:|:-------------|:--------|:----------:|
    |    *     | `target`     | String  |            |
    |    *     | `collection` | String  |            |
    |    *     | `query`      | String  |            |

=== "Outputs"

    |    Name | Type   |
    |--------:|:-------|
    | `count` | long   |

### Example

=== "Kotlin"
``` kotlin
MongoCountTask(
    target = "mongo_target",
    collection = "myCollection",
    query = "my query"
)
```

# Delete

=== "Inputs"

    | Required | Name         | Type    |  Default   |
    |:--------:|:-------------|:--------|:----------:|
    |    *     | `target`     | String  |            |
    |    *     | `collection` | String  |            |
    |    *     | `query`      | String  |            |

=== "Outputs"

    |           Name | Type   |
    |---------------:|:-------|
    | `deletedCount` | long   |

### Example

=== "Kotlin"
``` kotlin
MongoDeleteTask(
    target = "mongo_target",
    collection = "myCollection",
    query = "my query"
)
```

# Find

=== "Inputs"

    | Required | Name         | Type    | Default |
    |:--------:|:-------------|:--------|:-------:|
    |    *     | `target`     | String  |         |
    |    *     | `collection` | String  |         |
    |    *     | `query`      | String  |         |
    |          | `limit`      | Integer |   20    |

=== "Outputs"

    |        Name | Type          |
    |------------:|:--------------|
    | `documents` | List<String\> |

### Example

=== "Kotlin"
``` kotlin
MongoFindTask(
    target = "mongo_target",
    collection = "myCollection",
    query = "my query",
    limit = 42
)
```

# Insert

=== "Inputs"

| Required | Name         | Type    | Default |
|:--------:|:-------------|:--------|:-------:|
|    *     | `target`     | String  |         |
|    *     | `collection` | String  |         |
|    *     | `document`   | String  |         |

!!! note
    No output

### Example

=== "Kotlin"
``` kotlin
MongoInsertTask(
    target = "mongo_target",
    collection = "myCollection",
    document = "my document"
)
```

# List

=== "Inputs"

    | Required | Name     | Type   | Default |
    |:--------:|:---------|:-------|:-------:|
    |    *     | `target` | String |         |

=== "Outputs"

    |              Name | Type          |
    |------------------:|:--------------|
    | `collectionNames` | List<String\> |

### Example

=== "Kotlin"
``` kotlin
MongoListTask(
    target = "mongo_target"
)
```

# Update

=== "Inputs"

    | Required | Name           | Type          | Default |
    |:--------:|:---------------|:--------------|:-------:|
    |    *     | `target`       | String        |         |
    |    *     | `collection`   | String        |         |
    |    *     | `filter`       | String        |         |
    |    *     | `update`       | String        |         |
    |          | `arrayFilters` | List<String\> |         |

=== "Outputs"

    |        Name     | Type |
    |----------------:|:-----|
    | `modifiedCount` | long |

### Example

=== "Kotlin"
``` kotlin
MongoUpdateTask(
    target = "mongo_target",
    collection = "myCollection",
    filter = "myFilter",
    update = "update"
)
```
