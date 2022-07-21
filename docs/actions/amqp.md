# AMQP

## BASIC PUBLISH

### Outputs

| Name    | Type - Format                               |
|:--------|:--------------------------------------------|
| payload | string                                      |
| headers | string                                      |


### Inputs

| Name         | Type - Format   | Mandatory       | Default | Validation       |
|:-------------|:----------------|:----------------|:--------|:-----------------| 
| exchange-name| string          | :material-check:|         | :material-check: |
| routing-key  | string          |                 |         |                  |
| headers      | map             |                 |         |                  |
| properties   | map             |                 |         |                  |
| payload      | string          | :material-check:|         | :material-check: |

### Example

* Kotlin
    ``` kotlin
    AmqpBasicPublishTask(
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

## BASIC CONSUME

### Outputs

| Name     | Type - Format                               |
|:---------|:--------------------------------------------|
| body     | string                                      |
| payloads | string                                      |
| headers  | string                                      |

### Inputs

| Name         | Type - Format   | Mandatory       | Default | Validation         |
|:-------------|:----------------|:----------------|:--------|:-------------------|
| queue-name   | string          | :material-check:|         |  :material-check:  |
| nb-messages  | integer         |                 |         |                    |
| selector     | string          |                 |         |                    |
| timeout      | string          |                 |         |  :material-check:  |
| ack          | boolean         |                 |         |                    | 

### Example

* Kotlin
    ``` kotlin
    AmqpBasicConsumeTask(
        target:"AMQP_TARGET",
        queue-name: "waitingqueue",
        nb-messages: "5",
        selector:"amqp selector",
        timeout: "2000ms",
        ack: true
    )
    ```

## BASIC GET

### Outputs

| Name    | Type - Format                               |
|:--------|:--------------------------------------------|
| message | string com.rabbitmq.client.GetResponse      |
| body    | string                                      |
| headers | string                                      |

### Inputs

| Name         | Type - Format   | Mandatory       | Default | Validation         |
|:-------------|:----------------|:----------------|:--------|:-------------------|
| queue-name   | string          | :material-check:|         |  :material-check:  |

### Example

* Kotlin
    ``` kotlin
    AmqpBasicGetTask(
        target:"AMQP_TARGET",
        queue-name: "waitingqueue"
    )
    ```

## QPID SERVER START

### Outputs

| Name         | Type - Format                               |
|:-------------|:--------------------------------------------|
| qpidLauncher | string                                      |

### Inputs

| Name         | Type - Format   | Mandatory | Default | Validation         |
|:-------------|:----------------|:----------|:--------|:-------------------|
| init-config  | string          |           |         |  :material-check:  |

### Example

* Kotlin
    ``` kotlin
    AmqpQpidServerStartTask(
        init-config: "amqpinitconfig"
    )
    ```

## QPID SERVER STOP

### Inputs

| Name          | Type - Format   | Mandatory | Default | Validation         |
|:--------------|:----------------|:----------|:--------|:-------------------|
| qpid-launcher | string          |           |         |  :material-check:  |

### Example

* Kotlin
    ``` kotlin
    AmqpQpidServerStopTask(
        qpid-launcher: "amqpqpidlaunch"
    )
    ```

## CLEAN QUEUES

### Inputs

| Name         | Type - Format   | Mandatory | Default | Validation         |
|:-------------|:----------------|:----------|:--------|:-------------------|
| queue-names  | string          |           |         |  :material-check:  |

### Example

* Kotlin
    ``` kotlin
    AmqpCleanQueuesTask(
        target:"AMQP_TARGET",
        queue-names: ["first queue"], ["second queue"]
    )
    ```


## CREATE BOUND TEMPORARY QUEUE

### Outputs

| Name         | Type - Format                               |
|:-------------|:--------------------------------------------|
| queueName    | string                                      |
| finally      |                                             |

### Inputs

| Name         | Type - Format   | Mandatory         | Default    | Validation          |
|:-------------|:----------------|:------------------|:-----------|:--------------------|
| exchange-name| string          |  :material-check: |            |  :material-check:   |
| routing-key  | string          |                   | queue-name |                     |
| queue-name   | string          |  :material-check: |            |  :material-check:   |

### Teardown

Some tasks might have a teardown just like this one. If it is the case, the queue will be unbind and then deleted.

| Name                 | Arguments                                   |
|:---------------------|:--------------------------------------------|
| amqp unbind queue    | queue-exchange, exchange-name, routing-key  |
| amqp delete queue    | queue-exchange, exchange-name, routing-key  |


### Example

* Kotlin
    ``` kotlin
    AmqpCreateBoundTemporaryQueueTask(
        target:"AMQP_TARGET",
        exchange-name:"amqpexchange",
        routing-key:"amqpkeyroute",
        queue-name:"waitingqueue"
    )
    ```


## DELETE QUEUE

### Outputs

| Name         | Type - Format                               |
|:-------------|:--------------------------------------------|
| queueName    | string                                      |
| finally      |                                             |

### Inputs

| Name         | Type - Format   | Mandatory       | Default | Validation         |
|:-------------|:----------------|:----------------|:--------|:-------------------|
| queue-name   | string          | :material-check:|         |  :material-check:  |

### Example

* Kotlin
    ``` kotlin
    AmqpDeleteQueueTask(
        target:"AMQP_TARGET",
        queue-name: "waitingqueue"
    )
    ```

## UNBIND QUEUE

### Inputs

| Name         | Type - Format   | Mandatory         | Default         | Validation          |
|:-------------|:----------------|:------------------|:----------------|:--------------------|
| queue-name   | string          |  :material-check: |                 |  :material-check:   |
| exchange-name| string          |                   |                 |                     |
| routing-key  | string          |                   |                 |                     |

### Example

* Kotlin
    ``` kotlin
        AmqpUnbindQueueTask(
        target:"AMQP_TARGET",
        queue-name:"waitingqueue",
        exchange-name:"amqpexchange",
        routing-key:"amqpkeyroute"
    )
    ```
