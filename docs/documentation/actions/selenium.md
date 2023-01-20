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
