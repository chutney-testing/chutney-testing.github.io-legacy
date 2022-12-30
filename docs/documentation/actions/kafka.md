!!! important "Target Configuration"
    For all actions, a target should be defined and have a `name` and a valid `url`.

=== "Json"
    ```json title="Kafka target example"
    {
      "name": "my_kafka_target"
      "url": "tcp://localhost:60962"
    }
    ```

# Publish
Use this action to publish a message to a Kafka topic.

=== "Inputs"

    | Required | Name         | Type                             |  Description                                             |
    |:--------:|:-------------|:---------------------------------|:--------------------------------------------------------:|
    |    *     | `target`     | {name: string, url: string}      | Kafka target                                             |
    |    *     | `topic`      | String                           | Topic where the message will be published                |
    |    *     | `headers`    | Map <String, String>             | Headers to be sent with the request                      |
    |    *     | `payload`    | String                           | Message to be published                                  |
    |          | `properties` | Map <String, String>             | [Configurations](https://github.com/apache/kafka/blob/trunk/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java#:~:text=CONFIG%20%3D%20new,TRANSACTIONAL_ID_DOC){:target="_blank"} for Kafka producer. |

=== "Outputs"

    |    Name   | Type     | Description                           |
    |:----------|:---------|:--------------------------------------|
    | `payload` | String   | Sent message                          |
    | `headers` | String   | Headers to be sent with the request   |

### Example

=== "Kotlin"
``` kotlin
KafkaBasicPublishTask(
    target = "my_kafka_target",
    topic = "my.queue",
    headers = mapOf(
        "contentType" to "application/json",
        "season" to "1"
    ),
    payload = """
                {
                  "title": "Castle in the Sky",
                  "director": "Hayao Miyazaki",
                  "rating": 78
                }
               """.trimIndent()
)
```

# Consume
Use this action to consume a message from a Kafka topic.

=== "Inputs"

    | Required | Name              | Type                             | Default                        |  Description                                           |
    |:--------:|:------------------|:---------------------------------|:-------------------------------|:-------------------------------------------------------|
    |    *     | `target`          | {name: string, url: string}      |                                | Kafka target                                           |
    |    *     | `topic`           | String                           |                                | Topic from where the message will be consumed          |
    |    *     | `group`           | String                           |                                | Group id of the consumer                               |
    |          | `properties`      | Map <String, String>             |                                | [Configurations](https://github.com/apache/kafka/blob/trunk/clients/src/main/java/org/apache/kafka/clients/producer/ProducerConfig.java#:~:text=CONFIG%20%3D%20new,TRANSACTIONAL_ID_DOC){:target="_blank"} for Kafka producer. |
    |          | `header-selector` | String                           |                                | Header Selector                                         |
    |          | `selector`        | String                           |                                | Message Selector [json paths](https://github.com/json-path/JsonPath){:target="_blank"} or [xml paths](https://www.w3schools.com/xml/xml_xpath.asp){:target="_blank"} |
    |          | `nb-messages`     | Integer                          | 1                              | How many messages to be consumed                       |
    |          | `content-type`    | String                           | `application/json`             | To be consumed message's content type                  |
    |          | `timeout`         | [duration](/documentation/actions/other/#duration-type) | `60 sec`                       | In how many time Kafka target must return the message  |
    |          | `ackMode`         | [AckMode](https://docs.spring.io/spring-kafka/api/org/springframework/kafka/listener/ContainerProperties.AckMode.html) {:target="_blank"} | target's ackMode, else `BATCH` | The offset commit behavior   |

=== "Outputs"

    |    Name    | Type     | Description                           |
    |:-----------|:---------|:--------------------------------------|
    | `body`     | String   | Consumed messages                     |
    | `payloads` | List     | Consumed messages payloads            |
    | `headers`  | List     | Consumed messages headers             |

### Example

=== "Kotlin"
``` kotlin
KafkaBasicConsumeAction(
    target = "my_kafka_target",
    topic = "my.queue",
    group= "my.group",
    timeout= "10 sec",
    selector= "\$..[?(\$.payload.title==\"Castle in the Sky\")]",
    headerSelector= "\$..[?(\$.headers.season=='1')]",
    contentType= "application/json"
)
```

# Embedded Kafka server

## Start
This action start an embedded Kafka broker.
It automatically registers a teardown to stop the server at the end of the scenario.

=== "Inputs"

    | Required | Name         | Type                | Default                            |
    |:--------:|:-------------|:--------------------|:-----------------------------------|
    |          | `port`       | String              |                                    |
    |          | `topics`     | List<String>        | Topics to be created in the broker |
    |          | `properties` | Map<String, String> | Broker properties |

=== "Outputs"

    |       Name    | Type                                                                                                                                     |
    |:------------- |:-----------------------------------------------------------------------------------------------------------------------------------------|
    | `kafkaBroker` | [EmbeddedKafkaBroker](https://docs.spring.io/spring-kafka/api/org/springframework/kafka/test/EmbeddedKafkaBroker.html){:target="_blank"} |

### Example

=== "Kotlin"
``` kotlin
KafkaBrokerStartAction(
            topics = listOf(
                "my.queue"
            )
)
```
## Stop
This action stop the given embedded Kafka broker. It's implicitly declared by the start action and will be executed at the end of the scenario.

=== "Inputs"

    | Required | Name         | Type                                                                                                                                     | Default                            |
    |:--------:|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|
    |    *     | `broker`     | [EmbeddedKafkaBroker](https://docs.spring.io/spring-kafka/api/org/springframework/kafka/test/EmbeddedKafkaBroker.html){:target="_blank"} |                                    |

=== "Outputs"
    No output

# All in one basic example:
* Create target as described [here](/documentation/actions/kafka/#:~:text=Kafka%20target%20example). 
* Scenario example:

=== "Kotlin: doesn't work" 
``` Kotlin
Scenario(title = "Kafka actions basic usage") {
    Given("I start my broker") {
        KafkaBrokerStartTask(
            port =  "60962",
            topics = listOf(
                "my.queue"
            )
        )
    }
    And("I publish my favorite movie") {
        KafkaBasicPublishTask(
            target = "my_kafka_target",
            topic = "my.queue",
            headers = mapOf(
                "contentType" to "application/json",
                "season" to 1
            ),
            payload = """
                        {
                          "title": "Castle in the Sky",
                          "director": "Hayao Miyazaki",
                          "rating": 78
                        }
                       """.trimIndent()
        )
    }

    When ("I request my favorite movie") {
        KafkaBasicConsumeAction(
            target = "my_kafka_target",
            topic = "my.queue",
            group = "my.group",
            timeout = "10 sec",
            selector = "\$..[?(\$.payload.title==\"Castle in the Sky\")]",
            headerSelector = "\$..[?(\$.headers.season==1)]",
            contentType = "application/json"
        )
    }

    Then ("I got it") {
        AssertAction(
            asserts = listOf(
                ""
            )
        )
    }
}  
```
