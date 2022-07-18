# AMQP

## Global Notes

## BASIC PUBLISH

### Outputs

| Name    | Type - Format                               |
|:--------|:--------------------------------------------|
| payload | string                                      |
| headers | string                                      |


### Inputs

| Name         | Type - Format   | Mandatory | Default | Validation |
|:-------------|:----------------|:----------|:--------|:-----------|
| exchange-name| string          |           |         |  &#9745;   |
| routing-key  | string          |           |         |            |
| headers      | map             |           |         |            |
| properties   | map             |           |         |            |
| payload      | string          |           |         |  &#9745;   |

### Example

* Kotlin
    ``` kotlin
    AmqpBasicPublishTask(
        target: "AMQP_TARGET",
        exchange-name:,
        routing-key:,
        payload:,
        headers:,
        properties:
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

| Name         | Type - Format   | Mandatory | Default | Validation |
|:-------------|:----------------|:----------|:--------|:-----------|
| queue-name   | string          |           |         |  &#9745;   |
| nb-messages  | integer         |           |         |            |
| selector     | string          |           |         |            |
| timeout      | string          |           |         |  &#9745;   |
| ack          | boolean         |           |         |            |

### Example

* Kotlin
    ``` kotlin
    AmqpBasicConsumeTask(
        target:"AMQP_TARGET",
        queue-name: "queuename",
        nb-messages: "5",
        selector:,
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

| Name         | Type - Format   | Mandatory | Default | Validation |
|:-------------|:----------------|:----------|:--------|:-----------|
| queue-name   | string          |           |         |  &#9745;   |

### Example

* Kotlin
    ``` kotlin
    AmqpBasicGetTask(
        target:"AMQP_TARGET",
        message: "quick message",
        body: "some body",
        headers:
    )
    ```

## QPID SERVER START

### Outputs

| Name         | Type - Format                               |
|:-------------|:--------------------------------------------|
| qpidLauncher | string                                      |

### Inputs

| Name         | Type - Format   | Mandatory | Default | Validation |
|:-------------|:----------------|:----------|:--------|:-----------|
| init-config  | string          |           |         |  &#9745;   |

### Example

* Kotlin
    ``` kotlin
    AmqpQpidServerStartTask(
        init-config:
    )
    ```

## QPID SERVER STOP

### Inputs

| Name          | Type - Format   | Mandatory | Default | Validation |
|:--------------|:----------------|:----------|:--------|:-----------|
| qpid-launcher | string          |           |         |  &#9745;   |

### Example

* Kotlin
    ``` kotlin
    AmqpQpidServerStopTask(
        qpid-launcher:
    )
    ```

## CLEAN QUEUES

### Inputs

| Name         | Type - Format   | Mandatory | Default | Validation |
|:-------------|:----------------|:----------|:--------|:-----------|
| queue-names  | string          |           |         |  &#9745;   |

### Example

* Kotlin
    ``` kotlin
    AmqpCleanQueuesTask(
        target:"AMQP_TARGET",
        queue-names: ["first queue"], ["second queue"]
    )
    ```


## CREATE BOUND TEMPORARY QUEUE

The AMQP Create Boundary Queue Task ...

### Outputs

| Name         | Type - Format                               |
|:-------------|:--------------------------------------------|
| queueName    | string                                      |
| finally      |                                             |

### Inputs

| Name         | Type - Format   | Mandatory | Default    | Validation |
|:-------------|:----------------|:----------|:-----------|:-----------|
| exchange-name| string          |  &#9745;  | queue-name |  &#9745;   |
| routing-key  | string          |           |            |            |
| queue-name   | string          |  &#9745;  |            |  &#9745;   |

### Example

* Kotlin
    ``` kotlin
    AmqpCreateBoundTemporaryQueueTask(
        target:"AMQP_TARGET",
        exchange-name:,
        routing-key:,
        queue-name:"a queue"
    )
    ```


## DELETE QUEUE

The AMQP Delete Task ...

### Outputs

| Name         | Type - Format                               |
|:-------------|:--------------------------------------------|
| queueName    | string                                      |
| finally      |                                             |

### Inputs

| Name         | Type - Format   | Mandatory | Default | Validation |
|:-------------|:----------------|:----------|:--------|:-----------|
| queue-name   | string          |           |         |  &#9745;   |

### Example

* Kotlin
    ``` kotlin
    AmqpDeleteQueueTask(
        target:"AMQP_TARGET",
        queue-name: "a queue"
    )
    ```

## UNBIND QUEUE

The AMQP Unbind Queue Task ...

### Outputs

### Inputs

| Name         | Type - Format   | Mandatory | Default | Validation |
|:-------------|:----------------|:----------|:--------|:-----------|
| queue-name   | string          |           |         |  &#9745;   |
| exchange-name| string          |           |         |            |
| routing-key  | string          |           |         |            |

### Example

* Kotlin
    ``` kotlin
        AmqpUnbindQueueTask(
        target:"AMQP_TARGET",
        queue-name:"a queue",
        exchange-name:,
        routing-key:
    )
    ```