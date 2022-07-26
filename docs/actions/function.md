# FUNCTION

## Global Notes

Spel Function annotated @SpelFunction is a way to write functions in a more simple method.

It allows you to :

* Write java code that will be executed as soon as you read it, just like a script.
* You made them easier to call them back when you need.
* When you use a SpelFunction, a **#** is used before the word, meaning that it is checking if the following word is known (function or variable)

Everything that will be stated after a **$** and between two braces, will be interpreted (SpEL expression).

* Example : ${#jsonSerialize(myObject)}




## DATE TIME FUNCTION


### Outputs

Framework-level interface defining read-write access to a temporal object, such as a date, time, offset or some combination of these.

* More at (https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/temporal/Temporal.html).

| Name     | Type - Format                               |
|:---------|:--------------------------------------------|
| temporal | ISO, ANSII                                  |

### Inputs


| Name    | Type - Format   | Mandatory        | Default    | Validation       |
|:--------|:----------------|:-----------------|:-----------|:-----------------|
| Date    | string          |                  |            |                  |
| format  | optional        |                  | ISO        |                  |

<!-- * Type of return : java.time.temporal.Temporal
* Arguments : String date, optional format -->


## JSON FUNCTION

## XPATH FUNCTION

## XML FUNCTION

## STRING REPLACE FUNCTION

## GENERATE FUNCTION

## WIREMOCK FUNCTION

## NULLABLE FUNCTION

## MICROMETER FUNCTION

## NETWORK FUNCTION

## CLASSPATH FUNCTION

## ESCAPE FUNCTION