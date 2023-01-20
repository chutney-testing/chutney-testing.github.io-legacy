!!! important "Selector By values"

    Selenium actions selecting an elements require a selector and specifying the selection type.  
    See Selenium [by](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/By.html){:target="_blank"} documentation for further details.  
    Chutney provides the following values :
    
    * "id" 
    * "name"
    * "className"
    * "cssSelector"
    * "xpath"
    * "zk"

    ??? info "About ZK"
    
        [ZK](https://www.zkoss.org/){:target="_blank"} is an open source Java framework for building web and mobile apps.  
        When using ZK, element IDs are gerenated and managed by the framework. Thus, impossible to know beforehand.  
        But you can get HTML IDs by calling ZK at runtime [with JS using the widget's ID](https://www.zkoss.org/wiki/ZK_Developer%27s_Reference/Testing/Testing_Tips){:target="_blank"}.  
        So, Chutney provides it for you.


!!! important "About the webdriver"

    webdriver comes from the one started by the action ...

# Click

Performs a click on an element. Element is expected to be clickable.  
See [WebElement.click()](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebElement.html#click()){:target="_blank"}
and [ExpectedConditions.elementToBeClickable()](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/support/ui/ExpectedConditions.html#elementToBeClickable(org.openqa.selenium.By)){:target="_blank"} for further details.

It takes a screenshot in case of error.

=== "Inputs"

    | Required | Name         | Type    | Default | Note |
    |:--------:|:-------------|:--------|:-------:|:----:|
    |    *     | `web-driver` | String  |         |      |
    |    *     | `selector`   | String  |         |      |
    |    *     | `by`         | String  |         |      |
    |          | `wait`       | Integer |   1s    |  1s  |


### Example

=== "Kotlin"
    ``` kotlin
    ```

# Close

This action close the current window, quitting the browser if it's the last window currently open.  
See [WebDriver.close()](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriver.html#close()){:target="_blank"} for further details.

=== "Inputs"

    | Required | Name         | Type   | Default |
    |:--------:|:-------------|:-------|:-------:|
    |    *     | `web-driver` | String |         |


### Example

=== "Kotlin"
    ``` kotlin
    ```

# DriverInit

This action instantiate a webdriver

!!! important
    Firefox is the default browser and `browser` input should be empty, but you should provide `browserPath` input.  
    For using IE, put "Internet Explorer" as `browser` input, `browserPath` is not required when using IE.

    ??? note "IE running options"
        IE runs with the following options :

        - "AcceptInsecureCertificates": true
        - "disable-popup-blocking": true
        - "enablePersistentHover": true
        - "ensureCleanSession": true
        - "ignoreProtectedModeSettings": true
        - "ignoreZoomSetting": false
        - "introduceInstabilityByIgnoringProtectedModeSettings": true
        - "javascriptEnabled": true
        - "nativeEvents": true
        - "unexpectedAlertBehaviour": "accept"

=== "Inputs"

    | Required | Name          | Type     | Default |  Accepted Value   |
    |:--------:|:--------------|:---------|:-------:|:-----------------:|
    |    *     | `driverPath`  | String   |         |                   |
    |    *     | `browserPath` | String   |         |                   |
    |          | `browser`     | String   | Firefox | Internet Explorer |

=== "Outputs"

    |      Name   | Type                                                                                                              |
    |:-----------:|:------------------------------------------------------------------------------------------------------------------|
    | `webDriver` | [WebDriver](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriver.html){:target="_blank"} |

### Finally Action

Performs the action [Quit](#quit) when the scenario ends.

### Example

=== "Init with Firefox"

    ``` kotlin
    ```

=== "Init with IE"
    
    ``` kotlin
    ```

