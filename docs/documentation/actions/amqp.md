# Basic publish

=== "Inputs"

    | Required | Name            | Type   |     Default     |
    |:--------:|:----------------|:-------|:---------------:|
    |    *     | `exchange-name` | String |                 |
    |          | `routing-key`   | String |                 |
    |          | `headers`       | Map    |                 |
    |          | `properties`    | Map    |                 |
    |    *     | `payload`       | String |                 |

=== "Outputs"

    |      Name | Type   |
    |----------:|:-------|
    | `payload` | String |
    | `headers` | String |

### Example

=== "Kotlin"
    ``` kotlin
    AmqpBasicPublishAction(
        target: "AMQP_TARGET",
        exchange-name:"amqpexchange",
        routing-key:"amqpkeyroute",
        payload:"my payload",
        headers = mapOf(
          "Content-Type" to "application/json"
        ),
        properties: mapOf(
            "properties-1",
            "properties-2"
        ),
    )
    ```

# Basic consume

=== "Inputs"

    | Required | Name          | Type        | Default |
    |:--------:|:--------------|:------------|:-------:|
    |    *     | `queue-name`  | string      |         |
    |          | `nb-messages` | integer     |         |
    |          | `selector`    | string      |         |
    |          | `timeout`     | string      |         |
    |          | `ack`         | boolean     |         |

=== "Outputs"

    |       Name | Type  |
    |-----------:|:------|
    | `body`     | String |
    | `payloads` | String |
    | `headers`  | String |

### Example

=== "Kotlin"
    ``` kotlin
    AmqpBasicConsumeAction(
        target:"AMQP_TARGET",
        queue-name: "waitingqueue",
        nb-messages: "5",
        selector:"amqp selector",
        timeout: "2000ms",
        ack: true
    )
    ```

# Basic get

=== "Inputs"

    | Required | Name         | Type   | Default |
    |:--------:|:-------------|:-------|:-------:|
    |    *     | `queue-name` | String |         |

=== "Outputs"

    |      Name | Type                                   |
    |----------:|:---------------------------------------|
    | `message` | String com.rabbitmq.client.GetResponse |
    | `body`    | String                                 |
    | `headers` | String                                 |



### Example

=== "Kotlin"
    ``` kotlin
    AmqpBasicGetAction(
        target:"AMQP_TARGET",
        queue-name: "waitingqueue"
    )
    ```

# Qpid server start

=== "Inputs"

    | Required | Name          | Type   | Default |
    |:--------:|:--------------|:-------|:-------:|
    |          | `init-config` | String |         |

=== "Outputs"

    |           Name | Type   |
    |---------------:|:-------|
    | `qpidLauncher` | String |


### Example
=== "Kotlin"
    ``` kotlin
    AmqpQpidServerStartAction(
        init-config: "amqpinitconfig"
    )
    ```

# Qpid server stop

=== "Inputs"

    | Required | Name            | Type   | Default |
    |:--------:|:----------------|:-------|:-------:|
    |          | `qpid-launcher` | String |         |

### Example

=== "Kotlin"
    ``` kotlin
    AmqpQpidServerStopAction(
        qpid-launcher: "amqpqpidlaunch"
    )
    ```

# Clean queues

=== "Inputs"

    | Required | Name          | Type   | Default |
    |:--------:|:--------------|:-------|:-------:|
    |          | `queue-names` | String |         |

### Example

=== "Kotlin"
    ``` kotlin
    AmqpCleanQueuesAction(
        target:"AMQP_TARGET",
        queue-names: ["first queue"], ["second queue"]
    )
    ```


# Create bound temporary queue

=== "Inputs"

    | Required | Name            | Type   |   Default    |
    |:--------:|:----------------|:-------|:------------:|
    |    *     | `exchange-name` | String |              |
    |          | `routing-key`   | String | "queue-name" |
    |    *     | `queue-name`    | String |              |

=== "Outputs"

    |    Name     | Type   |
    |------------:|:-------|
    | `queueName` | String |



### Teardown

Some Actions might have a teardown just like this one. If it is the case, the queue will be unbind and then deleted.

|                 Name | Arguments                                   |
|---------------------:|:--------------------------------------------|
|    amqp unbind queue | queue-exchange, exchange-name, routing-key  |
|    amqp delete queue | queue-exchange, exchange-name, routing-key  |


### Example

=== "Kotlin"
    ``` kotlin
    AmqpCreateBoundTemporaryQueueAction(
        target:"AMQP_TARGET",
        exchange-name:"amqpexchange",
        routing-key:"amqpkeyroute",
        queue-name:"waitingqueue"
    )
    ```


# Delete queue

=== "Inputs"

    | Required | Name       | Type   | Default |
    |:--------:|:-----------|:-------|:-------:|
    |    *     | queue-name | String |         |

=== "Outputs"

    |          Name | Type   |
    |--------------:|:-------|
    |   `queueName` | String |

### Example

=== "Kotlin"
    ``` kotlin
    AmqpDeleteQueueAction(
        target:"AMQP_TARGET",
        queue-name: "waitingqueue"
    )
    ```

# Unbind queue

=== "Inputs"

    | Required | Name            | Type   | Default  |
    |:--------:|:----------------|:-------|:--------:|
    |    *     | `queue-name`    | String |          |
    |          | `exchange-name` | String |          |
    |          | `routing-key`   | String |          |

### Example

=== "Kotlin"
    ``` kotlin
        AmqpUnbindQueueAction(
        target:"AMQP_TARGET",
        queue-name:"waitingqueue",
        exchange-name:"amqpexchange",
        routing-key:"amqpkeyroute"
    )
    ```
