# Assertions

## Assert
This action takes a list of assertions written using [SpEL](https://docs.spring.io/spring-framework/docs/5.3.23/reference/html/core.html#expressions-language-ref){:target="_blank"} and validates they are all true.
=== "Inputs"

    | Required | Name            | Type        |     Default     |
    |:--------:|:----------------|:------------|:----------------|
    |    *     | `asserts`       | List of Map |                 |

=== "Outputs"
    No outputs

### Example
=== "Kotlin"
    ``` kotlin
    AssertAction(
        asserts = listOf(
            "\${#status==200}"
        )
    )
    ```

## Json assert
assert that json nodes have expected values.

=== "Inputs"

    | Required | Name            | Type                |     Default     |                        Description                           |
    |:--------:|:----------------|:--------------------|:----------------|:-------------------------------------------------------------|
    |    *     | `document`      | String              |                 | json's string representation                                 |
    |    *     | `expected`      | Map<String, Object> |                 | Keys contain [json paths](https://github.com/json-path/JsonPath){:target="_blank"} used to extract json node's data. <br/> Values contain expected nodes values or [assertions functions](/actions/assertions/#assertions-functions). |

=== "Outputs"
    No outputs

### Example
=== "Kotlin"
    ``` kotlin
    JsonAssertAction(
        document = """
                    {
                        "something": {
                            "value": my_value
                        }
                    }
                   """,
        expected = mapOf(
            "$.something.value" to "my_value"
        )
    )
    ```

## Xml assert
assert that xml nodes have expected values.

=== "Inputs"

    | Required | Name            | Type        |     Default     |                        Description                           |
    |:--------:|:----------------|:------------|:----------------|:-------------------------------------------------------------|
    |    *     | `document`      | String      |                 | xml's string representation                                  |
    |    *     | `expected`      | Map         |                 | keys contain [xml paths](https://www.w3schools.com/xml/xml_xpath.asp){:target="_blank"} used to extract xml node's data.<br/> Values contain expected nodes values or [assertions functions](/actions/assertions/#assertions-functions).|

=== "Outputs"
    No outputs

### Example
=== "Kotlin"
    ``` kotlin
    XmlAssertAction(
        document =  """
                    <root>
                       <node1 at1=\"val3\">
                           <leaf1>val1</leaf1>
                           <leaf2>5</leaf2>
                           <leaf3><![CDATA[val2]]></leaf3>
                       </node1>
                    </root>
                    """,
        expected = mapOf(
            "/root/node1/leaf1" to "val1",
            "//leaf2" to 5,
            "//node1/leaf3" to "val2",
            "//node1/@at1" to "val3"
        )
    )
    ```
## Assertions functions
placeholders used by [xml-assert](/actions/assertions/#xml-assert) and [json-assert](/actions/assertions/#json-assert) actions to assert actual values.

| Placeholder      | Description                                            | Example                                             |
|:-----------------|:-------------------------------------------------------|:----------------------------------------------------|
| `$isNull`        | must be null                                           | `"$isNull"`                                         |
| `$isNotNull`     | must be not null                                       | `"$isNotNull"`                                      |
| `$contains`      | must contains given value                              | `"$contains:abcde"`                                 |
| `$isBeforeDate`  | must be before given date                              | `"$isBeforeDate:2010-01-01T11:12:13.1230Z"`         |
| `$isAfterDate`   | must be after given date                               | `"$isAfterDate:1998-07-14T02:03:04.456Z"`           |
| `$isEqualDate`   | must be equal to given date                            | `"$isEqualDate:2000-01-01T11:11:12.123+01:00"`      |
| `$matches`       | must match given regex                                 | `"$matches:\\d{4}-\\d{2}-\\d{2}"`                   |
| `$isLessThan`    | must be less than given number                         | `$isLessThan:42000`                                 |
| `$isGreaterThan` | must be greater than given number                      | `$isGreaterThan:45`                                 |
| `$isEmpty`       | string or array must be empty                          | `"$isEmpty"`                                        |
| `$lenientEqual`  | must be equal to given json using lenient compare mode | `"$lenientEqual:{\"object\": {\"att\": \"val\"}}"`  |
| `$value[index]`  | array's element at index must have expected value      | `"$value[0]:three"`                                 |



# Validations
!!! Step validation 
    For functional validations, it's recommended to use above actions.
    For technical validations, it's possible to do them on scenario step [validation](/actions/introduction/#validation).

## Json validation
validate json structure using a given schema.
=== "Inputs"

    | Required | Name            | Type        |     Default     |                 Description          |
    |:--------:|:----------------|:------------|:----------------|:-------------------------------------|
    |    *     | `json`          | String      |                 | json's string representation         |
    |    *     | `schema`        | String      |                 | json schema                          |

=== "Outputs"
    No outputs

### Example
=== "Kotlin"
    ``` kotlin
    JsonValidationAction(
        json = """
               {
                   "id": 1,
                   "name": "mouse",
                   "price": 12
               }
               """,
        schema = """
                 {
                     "${'$'}schema": "http://json-schema.org/draft-04/schema#",
                     "title": "Product",
                     "description": "A product from the catalog",
                     "type": "object",
                     "properties": {
                         "id": {
                             "description": "The unique identifier for a product",
                             "type": "integer"
                         },
                         "name": {
                             "description": "Name of the product",
                             "type": "string"
                         },
                         "price": {
                             "type": "number",
                             "minimum": 0,
                             "exclusiveMinimum": true
                         }
                     },
                     "required": ["id", "name", "price"]
                 }
                """
    )
    ```
## Xml validation
validate xml structure using a given schema.

=== "Inputs"

    | Required | Name            | Type        |     Default     |                 Description          |
    |:--------:|:----------------|:------------|:----------------|:-------------------------------------|
    |    *     | `xml`           | String      |                 | xml's string representation          |
    |    *     | `xsd`           | String      |                 | xsd schema path                      |

=== "Outputs"
    No outputs


### Example
=== "Kotlin"
    ``` kotlin
    XsdValidationAction(
        xml = """
              <?xml version=\"1.0\"?>
              <Employee xmlns=\"https://www.chutneytesting.com/Employee\">
                  <name>my Name</name>
                  <age>29</age>
                  <role>Java Developer</role>
                  <gender>Male</gender>
              </Employee>
              """,
        xsdPath = "/xsd_samples/employee.xsd"
    )
    ```

??? note "xsd files content:"

    === "employee.xsd"

        ``` xml
            <?xml version="1.0" encoding="UTF-8"?>
            <schema xmlns="http://www.w3.org/2001/XMLSchema"
                targetNamespace="https://www.chutneytesting.com/Employee"
                xmlns:empns="https://www.chutneytesting.com/Employee"
                xmlns:gedns="https://www.chutneytesting.com/Gender"
                elementFormDefault="qualified">
                <import namespace="https://www.chutneytesting.com/Gender" schemaLocation="./gender.xsd" />
                <element name="Employee" type="empns:EmployeeType"></element>
                <complexType name="EmployeeType">
                    <sequence>
                        <element name="name" type="string"></element>
                        <element name="age" type="int"></element>
                        <element name="role" type="string"></element>
                        <element name="gender" type="gedns:Gender"></element>
                    </sequence>
                </complexType>
            </schema>
        ```
    
    === "gender.xsd"
    
        ``` xml
            <?xml version="1.0" encoding="UTF-8"?>
            <schema xmlns="http://www.w3.org/2001/XMLSchema"
                   targetNamespace="https://www.chutneytesting.com/Gender"
                   xmlns:gedns="https://www.chutneytesting.com/Gender"
                  elementFormDefault="qualified">
                <simpleType name="Gender">
                    <restriction base="string">
                        <enumeration value="Male" />
                        <enumeration value="Female" />
                    </restriction>
                </simpleType>
            </schema>
        ```


!!! note "xsd schema can be loaded from different paths"

    | prefix          | description                                                      | example                                               |
    |:----------------|:-----------------------------------------------------------------|:------------------------------------------------------|
    | empty           | load xsd from classpath. It can load also from a jar in classpath| `xsdPath = "/xsd_samples/employee.xsd"`               |
    | `classpath:`    | load xsd from classpath. It can load also from a jar in classpath| `xsdPath = "classpath:/xsd_samples/employee.xsd"`     |
    | `file:`         | load xsd from file system                                        | `xsdPath = "file:C:/my_data/xsd_samples/employee.xsd"`|
    


# Comparison
## Compare
compare two strings using a comparison mode.

=== "Inputs"

    | Required | Name            | Type        |     Default     |    Description         |
    |:--------:|:----------------|:------------|:----------------|:-----------------------|
    |    *     | `actual`        | String      |                 | actual string value    |
    |    *     | `expected`      | String      |                 | expected string value  |
    |    *     | `mode`          | String      |                 | comparison mode        |

=== "Outputs"
    No outputs


### Example
=== "Kotlin"
    ``` kotlin
    CompareAction(
        actual = "chutney",
        expected = "chutney",
        mode = "EQUALS" // case insensitive
    ) 
    ```
!!! note "mode can be"

    | mode                             |          description                   |
    |:---------------------------------|:---------------------------------------|
    | `equals`                         | actual and expected are equals         |
    | `not equals` / `not-equals`      | actual and expected are not equals     |
    | `contains`                       | actual contains expected               |
    | `not-contains` / `not contains`  | actual doesn't contain expected        |
    | `greater-than` / `greater than`  | actual is greater than expected        |
    | `less-than` / `less than`        | actual is less than expected           |

## Json compare
compare two json inputs(the whole content or only some nodes) using a comparison mode.

=== "Inputs"

    | Required | Name            | Type        |     Default      |    Description                                                                              |
    |:--------:|:----------------|:------------|:-----------------|:--------------------------------------------------------------------------------------------|
    |    *     | `document1`     | String      |                  | first json                                                                                  |
    |    *     | `document2`     | String      |                  | second json                                                                                 |
    |    *     | `comparingPaths`| Map         | Map.of("$", "$") | to be compared nodes [json paths](https://github.com/json-path/JsonPath){:target="_blank"}  |
    |    *     | `mode`          | String      |  STRICT          | comparison mode                                                                             |

=== "Outputs"
    No outputs


### Example
=== "Kotlin"
    ``` kotlin
        JsonCompareAction(
            document1 = """
                    {
                        "something": {
                            "value": 3
                        },
                        "something_else": {
                            "value": 5
                        },
                        "a_thing": {
                            "type": "my_type"
                        }
                    }
                    """,
            document2 = """
                    {
                        "something_else": {
                            "value": 5
                        },
                        "a_thing": {
                            "type": "my_type"
                        }
                    }
                    """,
            comparingPaths = mapOf(
                "$.something.value" to "$.something_else.value",
                "$.a_thing" to "$.a_thing"
            ),
            mode = JsonCompareMode.STRICT
        )
    ```
!!! note "available modes"

    | mode       |          description                                                                                     |
    |:-----------|:---------------------------------------------------------------------------------------------------------|
    | `STRICT`   | strict comparison                                                                                        |
    | `LENIENT`  | even if the document1 contains extended fields (which document2 doesn't have), the test will still pass  |

