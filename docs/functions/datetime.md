# Global Notes

Spel Function annotated @SpelFunction is a way to write functions in a more simple method.

It allows you to :

* Write java code that will be executed as soon as you read it, just like a script.
* You made them easier to call them back when you need.
* When you use a SpelFunction, a **#** is used before the word, meaning that it is checking if the following word is known (function or variable)

Everything that will be stated after a **$** and between two braces, will be interpreted (SpEL expression).

* Example : ${#jsonSerialize(myObject)}


# DATE TIME FUNCTION

The following functions help you use ... :

* [\#date](#date)
* [\#currentTimeMillis](#currenttimemillis)
* [\#now](#now)
* [\#dateFormatter](#dateformatter)
* [\#dateFormatterWithLocale](#dateformatterwithlocale)
* [\#isoDateFormatter](#isodateformatter)
* [\#timeAmount](#timeamount)
* [\#timeUnit](#timeunit)

## date

!!! note "date(String date, String... format)"

    ce que ça fait  
    Framework-level interface defining read-write access to a temporal object, such as a date, time, offset or some combination of these.

    See [docs.oracle.com](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/temporal/Temporal.html) for further details

    **Parameters** :

    * String Date
        * The date you want to get a Temporal from
        * Mandatory (:material-check:)
        * ex. "27 July 2022"
    * String format (is optional), if no format is assigned, the default value for this argument will be the ISO format.
        * The format used for the date
        * ex. "dd MMMM yyyy"

    **Returns** :

    `java.time.temporal.Temporal`  


!!! tip "Examples"

    SpEL without : `${T(java.time.format.DateTimeFormatter).ofPattern(T(java.time.format.DateTimeFormatter).ISO_INSTANT).parseBest("27 July 2022", ZonedDateTime::from, LocalDateTime::from, LocalDate::from, Instant::from)}`

    SpEL with    : `${#date("27 July 2022")}`


## currentTimeMillis

### Return

Returns the current time in milliseconds. Note that while the unit of time of the return value is a millisecond, the granularity of the value depends on the underlying operating system and may be larger.

* The difference, measured in milliseconds, between the current time and midnight, January 1, 1970 UTC.
* Type of parameter : long
* Type of return : string

### Arguments

* String currentTimeMillis

### Examples

* currentTimeMillis : 

## ZonedDateTime now

Obtains an instance of ZonedDateTime from a local date and time.

### Return

* Obtains the current date-time from the system clock in the default time-zone.
* Returns the current date-time using the system clock, not null

* Clock (systemDefaultZone)

### Arguments

* 
### Example

## dateFormatter

### Return

* This method will create a formatter based on a simple pattern of letters and symbols as described in the class documentation.
* The formatter based on the pattern, not null

### Arguments

* String pattern : is mandatory (:material-check:)
* If the pattern you give is invalid, you will get an IllegalArgumentException as a throw.

### Example

## dateFormatterWithLocale

### Return


### Arguments

* String pattern : is mandatory (:material-check:)
* String locale
* If the pattern you give is invalid, you will get an IllegalArgumentException as a throw.

### Example


## isoDateFormatter

### Return

* 


### Arguments

* String type
* If no argument type is given or equals to "null", this will throw you an exception => "Unknown date time formatter type"

### Example

* type = "INSTANT"
    * return DateTimeFormatter.ISO_INSTANT;


## TemporalAmount

### Return


### Arguments

* String text

### Example
