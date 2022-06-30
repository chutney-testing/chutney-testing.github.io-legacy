# Introduction

With Chutney you can write and run functional scenarios.  
Those scenarios validate high level requirements and are not coupled to your application code.

Instead, you will target I/O interfaces of your application (i.e. HTTP endpoints, Kafka topics, AMQP queues, etc.) 
without writing the same boilerplate code for respective clients, consumers, or even mock clients or producers.

[Part 1](getting_started_1.md) will cover how to write scenarios with the [Chutney Kotlin DSL](https://github.com/chutney-testing/chutney-kotlin-dsl)
and run them with JUnit5. **This is enough to use Chutney**.  
[Part 2](getting_started_2.md) will cover how to install and configure a Chutney server
in order to schedule test runs, keep execution history and browse your execution reports.

# Project Setup

!!! important "Requirements"

    * `java` 11 or later
    * your preferred build tool (ex. `maven`, `graddle`, etc.)

## Dependencies

Create a Kotlin project with the following dependencies :

* [com.chutneytesting:chutney-kotlin-dsl](https://search.maven.org/artifact/com.chutneytesting/chutney-kotlin-dsl)
* [org.junit.jupiter:junit-jupiter-api](https://search.maven.org/artifact/org.junit.jupiter/junit-jupiter-api)
* [org.jetbrains.kotlin:kotlin-stdlib](https://search.maven.org/artifact/org.jetbrains.kotlin/kotlin-stdlib)


=== "maven"

    ``` xml
    <dependencies>
        <dependency>
            <groupId>com.chutneytesting</groupId>
            <artifactId>chutney-kotlin-dsl</artifactId>
            <version>0.1.18</version>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-api</artifactId>
            <version>5.8.2</version>
            <scope>test</scope>
        </dependency>
       <dependency>
            <groupId>org.jetbrains.kotlin</groupId>
            <artifactId>kotlin-stdlib</artifactId>
            <version>1.6.10</version>
        </dependency>
        <!-- Optional (1) --> 
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-engine</artifactId>
            <version>5.8.2</version>
        </dependency>
    </dependencies>
    ```

    1. Only required if you want to run your test within IntelliJ with the [gutter icon](https://www.jetbrains.com/help/idea/settings-gutter-icons.html) :fontawesome-regular-circle-play:

=== "graddle"

    ``` kotlin
    dependencies {
        
    }
    ```

## Kotlin compilation

=== "maven"

    ``` xml
    <plugin>
        <groupId>org.jetbrains.kotlin</groupId>
        <artifactId>kotlin-maven-plugin</artifactId>
        <version>1.6.10</version>
        <executions>
            <execution>
                <id>compile</id>
                <phase>compile</phase>
                <goals>
                    <goal>compile</goal>
                </goals>
            </execution>
            <execution>
                <id>test-compile</id>
                <goals>
                    <goal>test-compile</goal>
                </goals>
            </execution>
        </executions>
    </plugin>
    ```

=== "graddle"

    ``` kotlin
    // TODO
    ```



# Define your test environment

## Declare a target

Under `src/main/kotlin` create a package (ex. `com.chutneytesting.getstart`) and create a Kotlin file (ex. `Environments.kt`) with the following content :

``` kotlin title="Environments.kt"
package com.chutneytesting.getstart

import com.chutneytesting.kotlin.dsl.ChutneyTarget

val google = ChutneyTarget(
        name = "search_engine",
        url = "https://www.google.fr"
)
```

* Here we use the Chutney Kotlin DSL to declare `target`.
* You will add `google` to an `environment` in the next step
* You will reference the target in a scenario by using its name `search_engine` 

## Declare an environment

Now you can declare an `environment` within the same file, add the following content :

``` kotlin title="Environments.kt"
val www = ChutneyEnvironment(
        name = "The World Wide Web",
        description = "The World Wide Web",
        targets = listOf(
                google
        )
)
```

* Here we use the Chutney Kotlin DSL to declare an `environment`.
* We reference the target `google`.
* The environment `name` and `description` can be anything meaningful to you
* You will reference the environment in an executable test by using its variable name `www`

# Write a Chutney scenario

Under `src/main/kotlin`, in the same package or another, create a Kotlin file (ex. `Scenarios.kt`) with the following content :

``` kotlin title="Scenarios.kt"
package com.chutneytesting.getstart

import com.chutneytesting.kotlin.dsl.HttpGetTask
import com.chutneytesting.kotlin.dsl.Scenario
import com.chutneytesting.kotlin.dsl.SuccessTask
import com.chutneytesting.kotlin.dsl.spEL

val search_scenario = Scenario(title = "Search documents") {
    When("I visit a search engine") {
        HttpGetTask(
                target = "search_engine",
                uri = "/",
                validations = mapOf("http 200" to "status == 200".spEL())
        )
    }
    Then("I am on the front page") {
        SuccessTask()
    }
}
```

* Here we use the Chutney Kotlin DSL to declare a `Scenario`.

# Run it !

## Configure your integration test phase

Now, in order to run your first scenario, you need to configure your project and build tool according to your preference.  
You should note that Chutney scenarios are run as integration tests.

Here is a configuration example :

=== "maven"

    ``` xml
    <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-failsafe-plugin</artifactId>
        <configuration>
            <includes>
                <include>**/*Test.*</include>
            </includes>
        </configuration>
        <executions>
            <execution>
                <goals>
                    <goal>integration-test</goal>
                    <goal>verify</goal>
                </goals>
            </execution>
        </executions>
        <dependencies>
            <dependency>
                <groupId>org.junit.jupiter</groupId>
                <artifactId>junit-jupiter-engine</artifactId>
                <version>5.8.2</version>
            </dependency>
        </dependencies>
    </plugin>
    ```

=== "graddle"

    ``` kotlin
    // TODO
    ```

## Write a test for running your Chutney scenario

Under `src/test/kotlin` create a package (ex. `com.chutneytesting.getstart`) and create a Kotlin file (ex. `FirstTest.kt`) with the following content :

``` kotlin title="FirstTest.kt"
package com.chutneytesting.getstart

import com.chutneytesting.kotlin.launcher.Launcher
import org.junit.jupiter.api.Test

class FirstTest {

    @Test
    fun `search on the world wide web`() {
        Launcher().run(search_scenario, www)
    }
}
```

* Here, this is a simple JUnit test in which we use the Chutney Launcher to run the scenario `search_engine` on the environment `www`

## Run it !

Now you can simply run `mvn verify`. 

In the console output you will see the resulting execution :

``` sh
[SUCCESS] scenario: "Search documents" on environment The World Wide Web # (1)
[SUCCESS] I visit a search engine [default]  # (2)
>> Validation [http 200] : OK # (3)
http-get { uri: "/"} # (4)
on { search_engine: https://www.google.fr } # (5)
[SUCCESS] I am on the front page [default]
success { }
```

1. Scenario succeed and was run on environment "The World Wide Web"
2. Step `I visit a search engine` succeed and was performed with the `default` strategy
3. Step validation on the HTTP status succeed
4. Information about which action was performed and with which parameters
5. Information about the target on which the action was performed

!!! info "IntelliJ integration"

    If you want to be able to run your test directly within IntelliJ with the [gutter icon](https://www.jetbrains.com/help/idea/settings-gutter-icons.html) :fontawesome-regular-circle-play:,  
    don't forget to add direct dependency on `junit-jupiter-engine` like mention in the [dependencies section](#dependencies)

## With Chutney JUnit Engine

## With Chutney Launcher


