# Install

You can run scenarios without any server from the code. This fits well with a CI or for pure developer users.

However, most software is built through teamwork.
In this case, we want to share scenarios, track their execution and allow functional and business people to have right of review in the testing of their product.

That's why we have developed an interface that allows us to do all these things.

You can find all code and configuration below in [example project](https://github.com/chutney-testing/chutney-project-template)

# Start a server

!!! note "Docker" 

    Clone the [example project](https://github.com/chutney-testing/chutney-project-template)
    
    Start Chutney locally by `docker compose up&` ([Docker compose documentation](https://docs.docker.com/compose/)).

!!! note "Java"

    Download the jar of the latest release [chutney-local-dev-x.x.x.jar](https://github.com/chutney-testing/chutney/releases).
    
    Start Chutney locally by `java -jar chutney-local-dev-x.x.x.jar`

!!! note "Intellij"

    Checkout [chutney](https://github.com/chutney-testing/chutney).
    
    User run configuration start_local_server

# Run a first scenario

Access the UI at the address: [https://localhost]()

Login using the default credentials `admin / admin`

On scenario page, create your first scenario in the UI by clicking on the icon

Save it as is, by clicking on the save icon

Run it by clicking on the run button and choosing the environment on which to run the scenario against (no need to choose if there is only one environment)

# Run *your* scenario

Follow [Write your first scenario](/getting_started/write/) to create a scenario or create your own

Create the environment with targets needed

!!! note "Create an environment" 
    
    You can use directly the interface to create the needed targets

    You can copy directly your existing environment file in the environment configuration folder of your Chutney server (`.chutney/conf/environment`)

Create a scenario in the UI as you did before in [install/#run-a-first-scenario]() and retrieve the id of scenario

Update your kotlin scenario to add the id of the scenario

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

1. Add the id here

Synchronize your kotlin scenario with your server

``` kotlin 
import com.chutneytesting.kotlin.synchronize.synchronise
import com.chutneytesting.kotlin.util.ChutneyServerInfo

val chutneyLocalServer = ChutneyServerInfo(
    remoteServerUrl = "http://localhost:8081", remoteUserName = "admin", remoteUserPassword = "admin"
)

fun main() {
    first_scenario.synchronise(serverInfo = chutneyLocalServer, updateRemote = true)
}
```

Your scenario is updated. Try to run it as before !


