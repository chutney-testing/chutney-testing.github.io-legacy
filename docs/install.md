# Install

You can run scenarios without installing a Chutney server. This fits well within a CI or for a developer local setup.

However, building software is most often a teamwork !  
Doing so, you will need to collaborate and share scenarios, track their executions 
and allow functional and business analyst to review and be involved in testing their product.

That's why we provide a server and web UI to help us do all these things.

You can find all code and configuration below in this [example project](https://github.com/chutney-testing/chutney-project-template)

# Start a server

!!! note "Docker" 

    1. Checkout this [example project](https://github.com/chutney-testing/chutney-project-template)
    2. Start Chutney locally with `docker compose up&` ([Docker compose documentation](https://docs.docker.com/compose/)).

!!! note "Java"

    1. Download the latest release jar [chutney-local-dev-x.x.x.jar](https://github.com/chutney-testing/chutney/releases/latest).
    2. Start Chutney locally with `java -jar chutney-local-dev-x.x.x.jar`

!!! note "Intellij"

    1. Checkout [chutney](https://github.com/chutney-testing/chutney).
    2. Build the project using maven : `mvn compile [-DuseExternalNpm]`
    3. Start [Intellij run configuration](https://www.jetbrains.com/help/idea/run-debug-configuration.html) `start_local_server`

# Synchronize *your* kotlin scenario with a server

## Create a 'dumb' scenario from the UI

We check that everything works fine, and we will obtain a scenario ID.

1. Access the UI at : [https://localhost:8443/](https://localhost:8443/)
2. Log in using default credentials `admin` / `admin`
3. Go to [scenarios list page](https://localhost:8443/#/scenario) and create a scenario (click on the pencil icon :fontawesome-solid-pencil:)
4. Save it as is without editing
5. Check everything works fine by running it
6. Go back to [scenarios list page](https://localhost:8443/#/scenario) and note the scenario ID. **We will need it later for synchronization.**

## Create or update your Kotlin scenario

1. First, follow how to [write your first scenario](/getting_started/write/#write-a-scenario) to create your own scenario with Kotlin.  
2. Then, update your kotlin scenario and add the scenario ID, as follow :

``` kotlin 
val first_scenario = Scenario(id = 123456, title = "Search documents") { // (1)
    When("I visit a search engine") {
        HttpGetTask(
                target = "search_engine",
                uri = "/"
        )
    }
    Then("I am on the front page") {
        SuccessTask()
    }
}
```

1. Set the server scenario ID in the Scenario constructor

## Synchronize your scenario

To synchronize your scenario with a server,  

1. Configure your server info
``` kotlin 
import com.chutneytesting.kotlin.synchronize.synchronise
import com.chutneytesting.kotlin.util.ChutneyServerInfo

val chutneyLocalServer = ChutneyServerInfo(
    remoteServerUrl = "http://localhost:8081", remoteUserName = "admin", remoteUserPassword = "admin"
)
```

2. Execute a main to call synchronise on your scenario
``` kotlin
fun main() {
    first_scenario.synchronise(serverInfo = chutneyLocalServer, updateRemote = true)
}
```

Now your scenario should be updated on the server ! :material-rocket-launch:

## Configure your environment on the server

Now, the last step before running your scenario from the server is to setup environments and targets.

!!! note "Create an environment"

    To manage environments on a server, you can :

    * Use the UI forms,
    * Copy an existing environment file into the server configuration folder (default is `.chutney/conf/environment`),
    * Import an existing environment file, (// TODO check bug on model compatibilty Kotlin/Server)

