# Synchronize *your* kotlin scenario with a server

## Create or update your Kotlin scenario

1. First, follow how to [write your first scenario](/getting_started/write/#write-a-scenario) to create your own scenario with Kotlin.
2. Then, update your kotlin scenario and add the scenario ID, as follow :

``` kotlin 
val first_scenario = Scenario(id = 123456, title = "Search documents") { // (1)
    When("I visit a search engine") {
        HttpGetAction(
                target = "search_engine",
                uri = "/"
        )
    }
    Then("I am on the front page") {
        SuccessAction()
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
