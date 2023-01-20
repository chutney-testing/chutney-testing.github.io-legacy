!!! important "About `by` input"

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


!!! important "About `web-driver` input"

    Most actions requires a `web-driver` input. It's value comes from the output off the action [DriverInit](#driverInit).  
    So the most probable value for it would come from the execution context : `${#webDriver}` (or `"webDriver".spEL()` if using Kotlin DSL)

# Click

Performs a click on an element. Element is expected to be clickable.  
See [WebElement.click()](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebElement.html#click()){:target="_blank"}
and [ExpectedConditions.elementToBeClickable()](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/support/ui/ExpectedConditions.html#elementToBeClickable(org.openqa.selenium.By)){:target="_blank"} for further details.

It takes a screenshot in case of error.

=== "Inputs"

    | Required | Name         | Type    | Default |  Note   |
    |:--------:|:-------------|:--------|:-------:|:-------:|
    |    *     | `web-driver` | String  |         |         |
    |    *     | `selector`   | String  |         |         |
    |    *     | `by`         | String  |         |         |
    |          | `wait`       | Integer |   1     | seconds |


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

# Driver Init

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

    ??? note "FF running options"
        FF runs with the following options :

        - Headless: true
        - Log level: FATAL

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


# Get

This action load a new web page in the current browser window.  
See [WebDriver.get(String url)](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriver.html#get(java.lang.String)){:target="_blank"} for further details.


=== "Inputs"
    
    // TODO explain selector input

    | Required | Name         | Type    | Note                                           |
    |:--------:|:-------------|:--------|:----------------------------------------------:|
    |    *     | `web-driver` | String  |                                                |
    |          | `selector`   | String  |                                                |
    |    *     | `value`      | String  | The URL to load. Must be a fully qualified URL |

=== "Outputs"

    |     Name    | Type   | Note                                                                                                                                                                                                                                                                    |
    |:-----------:|:-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | `outputGet` | String | This value can be used to switch to this window using action [SwitchTo](#switch-to).<br> See [WebDriver.getWindowHandle()](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriver.html#getWindowHandle()){:target="_blank"} for further details. |



### Example

=== "Kotlin"
``` kotlin
```

# GetAttribute

Get the value of the given attribute of the element.  
See [WebElement.getAttribute()](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebElement.html#getAttribute(java.lang.String)){:target="_blank"} for further details.

=== "Inputs"

    | Required | Name         | Type    | Default |  Note   |
    |:--------:|:-------------|:--------|:-------:|:-------:|
    |    *     | `web-driver` | String  |         |         |
    |    *     | `selector`   | String  |         |         |
    |    *     | `by`         | String  |         |         |
    |          | `wait`       | Integer |   1     | seconds |
    |          | `attribute`  | String  | "value" |         |

=== "Outputs"

    |         Name           | Type   |
    |:----------------------:|:-------|
    | `outputAttributeValue` | String |

### Example

=== "Kotlin"
``` kotlin
```

# GetText

This action returns the visible (i.e. not hidden by CSS) text of an element, including sub-elements.  
See [WebElement.getText()](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebElement.html#getText()){:target="_blank"} for further details.

=== "Inputs"

    | Required | Name         | Type    | Default |  Note   |
    |:--------:|:-------------|:--------|:-------:|:-------:|
    |    *     | `web-driver` | String  |         |         |
    |    *     | `selector`   | String  |         |         |
    |    *     | `by`         | String  |         |         |
    |          | `wait`       | Integer |   1     | seconds |

=== "Outputs"

    |      Name       | Type   | Note                                                      |
    |:---------------:|:-------|-----------------------------------------------------------|
    | `outputGetText` | String | Returns the value of attribute "value" when text is empty |

### Example

=== "Kotlin"
``` kotlin
```

# Hover and click

Moves the mouse to the middle of the element then performs a click.  
See [Actions.moveToElement()](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/interactions/Actions.html#moveToElement(org.openqa.selenium.WebElement)){:target="_blank"} and [Click](#click) for further details.

=== "Inputs"

    | Required | Name         | Type    | Default |  Note   |
    |:--------:|:-------------|:--------|:-------:|:-------:|
    |    *     | `web-driver` | String  |         |         |
    |    *     | `selector`   | String  |         |         |
    |    *     | `by`         | String  |         |         |
    |          | `wait`       | Integer |   1     | seconds |

### Example

=== "Kotlin"
``` kotlin
```

# Quit

This action quits the driver, closing every associated window.  
See [WebDriver.quit()](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriver.html#quit()){:target="_blank"} for further details.

=== "Inputs"

    | Required | Name         | Type   | Default |
    |:--------:|:-------------|:-------|:-------:|
    |    *     | `web-driver` | String |         |


### Example

=== "Kotlin"
``` kotlin
```

# Remote Driver Init

!!! note
    `browser` input values :

    - "chrome"
    - "internet explorer"
    - "firefox"

??? note "Internet Explorer running options"
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

??? note "Firefox running options"
    Firefox runs with the following options :

    - Headless: false
    - Log level: FATAL

??? note "Chrome running options"
    Chrome runs with the following options :

    - start-maximized: true

=== "Inputs"

    | Required | Name      | Type          | Default | Note                               |
    |:--------:|:----------|:--------------|:-------:|------------------------------------|
    |    *     | `hub`     | String        |         | The URL of the remote Selenium Hub |
    |          | `browser` | String        | firefox |                                    |

=== "Outputs"

    |      Name   | Type                                                                                                              |
    |:-----------:|:------------------------------------------------------------------------------------------------------------------|
    | `webDriver` | [WebDriver](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/WebDriver.html){:target="_blank"} |


### Finally Action

Performs the action [Quit](#quit) when the scenario ends.

### Example

=== "Kotlin"
``` kotlin
```

# Screenshot

Takes a screenshot, available in the execution report as a Base64 String.  
See [TakesScreenshot.getScreenshotAs()](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/TakesScreenshot.html#getScreenshotAs(org.openqa.selenium.OutputType)){:target="_blank"}
and [OutputType.BASE64](https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/OutputType.html#BASE64){:target="_blank"} for further details.

=== "Inputs"

    | Required | Name         | Type    |
    |:--------:|:-------------|:--------|
    |    *     | `web-driver` | String  |


### Example

=== "Kotlin"
``` kotlin
```

# Scroll to

Scroll the page to make the element visible and align to the top.  
See [Element.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView){:target="_blank"} for further details.

=== "Inputs"

    | Required | Name         | Type    | Default |  Note   |
    |:--------:|:-------------|:--------|:-------:|:-------:|
    |    *     | `web-driver` | String  |         |         |
    |    *     | `selector`   | String  |         |         |
    |    *     | `by`         | String  |         |         |
    |          | `wait`       | Integer |   1     | seconds |

### Example

=== "Kotlin"
``` kotlin
```
