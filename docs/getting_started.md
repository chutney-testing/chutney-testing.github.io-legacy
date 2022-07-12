# Introduction

With Chutney you can write and run functional scenarios.  
Those scenarios validate high level requirements and are not tied to your application code.

Instead, you will target I/O interfaces of your application (i.e. HTTP endpoints, Kafka topics, AMQP queues, etc.) 
without writing the same boilerplate code for respective clients, consumers, or even mock clients or producers.

To get you started, we will cover how to write scenarios with the [Chutney Kotlin DSL](https://github.com/chutney-testing/chutney-kotlin-dsl)
and run them with JUnit5.

!!! important "Requirements"

    * `java` 11 or later
    * your preferred build tool (ex. `maven`, `gradle`, etc.)
    * your preferred test engine (ex. `Junit 5.x`, `TestNG`, etc.)

# Minimal Setup

## Dependencies

Create a Kotlin project with the following dependencies :

* [com.chutneytesting:chutney-kotlin-dsl](https://search.maven.org/artifact/com.chutneytesting/chutney-kotlin-dsl)
* [org.jetbrains.kotlin:kotlin-stdlib](https://search.maven.org/artifact/org.jetbrains.kotlin/kotlin-stdlib)
* [org.junit.jupiter:junit-jupiter-api](https://search.maven.org/artifact/org.junit.jupiter/junit-jupiter-api)

=== "maven"

    ``` xml
    <dependencies>
        <dependency>
            <groupId>com.chutneytesting</groupId>
            <artifactId>chutney-kotlin-dsl</artifactId> <!--(1)-->
            <version>0.1.18</version>
        </dependency>
       <dependency>
            <groupId>org.jetbrains.kotlin</groupId>
            <artifactId>kotlin-stdlib</artifactId> <!--(2)-->
            <version>1.6.10</version>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-api</artifactId>
            <version>5.8.2</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-engine</artifactId> <!-- Optional (3) -->
            <version>5.8.2</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
    ```

    1. Required for using the Chutney Kotlin DSL
    2. Required for compiling Kotlin project
    3. Only required if you want to run your test within IntelliJ with the [gutter icon](https://www.jetbrains.com/help/idea/settings-gutter-icons.html) :fontawesome-regular-circle-play:

=== "gradle"

    ``` kotlin
    dependencies {
        implementation("com.chutneytesting:chutney-kotlin-dsl:0.1.18")

        testImplementation(kotlin("test"))
        testImplementation("org.junit.jupiter:junit-jupiter-api:5.8.2")
        testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:5.8.2")
    }
    ```

## Kotlin

In order to build your Kotlin project, you may need to add the following configuration with maven :

=== "maven"

    ``` xml
    <build>
        <sourceDirectory>${project.basedir}/src/main/kotlin</sourceDirectory>
        <testSourceDirectory>${project.basedir}/src/test/kotlin</testSourceDirectory>

        <plugins>
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
        </plugins>
    </build>
    ```

----
# Write your first scenario

## Define your test environment

### Declare a target

Under `src/main/kotlin` create a package (ex. `com.chutneytesting.getstart`) and create a Kotlin file (ex. `Environments.kt`) with the following content :

``` kotlin title="Environments.kt"
package com.chutneytesting.getstart

import com.chutneytesting.kotlin.dsl.ChutneyTarget

val google = ChutneyTarget(
        name = "search_engine",
        url = "https://www.google.fr"
)
```

* Here we use the Chutney Kotlin DSL to declare a `target`.
* The target name `search_engine` is used as a reference in your scenarios 
* The `google` variable is a reference to set a target in an `environment`

### Declare an environment

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
* As you can see, we reference the target `google` using the variable name.
* The environment `name` and `description` can be anything meaningful to you. The name will be shown in the execution report.
* The variable name `www` is a reference to set the environment on running tests

## Write a scenario

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
                validations = mapOf("request accepted" to "status == 200".spEL())
        )
    }
    Then("I am on the front page") {
        SuccessTask()
    }
}
```

* Here we use the Chutney Kotlin DSL to declare a `Scenario`.
* The scenario title `Search documents` will be shown in the execution report.
* As you can see, there are 2 steps `When I visit a search engine` and `Then I am on the front page`
* The first step will execute an HTTP GET call on the target name `search_engine` on the uri `/`
* The first step has one validation named `request accepted` which verify the response code status to be 200.
* The validation syntax is a [Spring Core SpEL expression](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#expressions)

!!! tip "Et voilà !"
    You have succesfully written your first scenario using Chutney.  
    Now, you will see how to run it ! :material-rocket-launch:

----
# Run your scenario

Now, in order to run your first scenario, you need to configure your project and build tool according to your preference.

Chutney Kotlin DSL comes with a `Launcher` class you can use the way you want. You are free to run your scenarios _when_ and
_anywhere_ you want (be it in a `main` if you wish).

Chutney Kotlin DSL provides also a JUnit 5 Runner with annotations.

In the following sections :

* you will see how to use the `Launcher` in a standard test, attached to the `integration` phase and run using the maven failsafe plugin.
* you will see how to use the JUnit 5 Runner and annotations.


## Run with Launcher class

### Write a test

Under `src/test/kotlin` create a package (ex. `com.chutneytesting.getstart`) and create a Kotlin file (ex. `SearchFeat.kt`) with the following content :

``` kotlin title="SearchFeat.kt"
package com.chutneytesting.getstart

import com.chutneytesting.kotlin.launcher.Launcher
import org.junit.jupiter.api.Test

class SearchFeat {
    @Test
    fun `search on the world wide web`() {
        Launcher().run(search_scenario, www)
    }
}
```

* As you can see, this is a simple JUnit test.
* We use the `Launcher` to run the scenario `search_engine` on the environment `www`

### Configure your build tool

In your build tool configuration, add the following content :

=== "maven"

    ``` xml
    <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-failsafe-plugin</artifactId>
        <configuration>
            <includes>
                <include>**/*Feat.*</include>
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

=== "gradle"

    ``` kotlin
    tasks.test {
        filter {
            includeTestsMatching("*Feat")
        }
        useJUnitPlatform()
    }
    ```

----
### Run it !

Now you can simply run `mvn verify` or `./gradlew test`. 

If you are using Maven, the console will output the resulting execution :

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

## Run with Chutney JUnit5 Engine

In order to use the JUnit5 engine, we have to make some changes.

### Declare environment

The JUnit5 engine does not take environment definition from Kotlin but instead from JSON files.

If it doesn't exist yet, create a folder `.chutney` in your project root folder.  
Then, create a file `WWW.json` with the following content :

``` json
{
    "name" = "World Wide Web",
    "description" = "The World Wide Web",
    "targets": [
        {
            "name" = "search_engine",
            "url" = "https://www.google.fr"
        }
    ]
}
```

### Write a test

Create a Kotlin file (ex. `Junit5SearchFeat.kt`) with the following content :

``` kotlin title="SearchFeat.kt"
package com.chutneytesting.getstart

import com.chutneytesting.kotlin.dsl.ChutneyScenario
import com.chutneytesting.kotlin.junit.api.ChutneyTest

class Junit5SearchFeat {

    @ChutneyTest(environment = "WWW")
    fun testMethod(): ChutneyScenario {
        return search_scenario
    }
}
```



