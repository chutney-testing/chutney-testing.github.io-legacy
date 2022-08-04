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

    Framework-level interface defining read-write access to a temporal object, such as a date, time, offset or some combination of these.

    See [Date(String date, String... format)](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/temporal/Temporal.html) for further details

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

!!! note "currentTimeMillis()"

    Returns the current time in milliseconds as a String.

    See [System.currentTimeMillis()](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/System.html#currentTimeMillis()) for further details

    **Returns** :
    
    * The difference, measured in milliseconds, between the current time and midnight, January 1, 1970 UTC.
    * `java.time.ZonedDateTime`


!!! tip "Examples"

    SpEL without : `${T(java.util.String).valueOf(T(java.lang.System).currentTimeMillis())}`

    SpEL with    : `${#currentTimeMillis()}`
    
## now

!!! note "now()"

    Returns the current date-time using the system clock, not null

    See [now()](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/ZonedDateTime.html) for further details

    **Returns** :

    * `java.time.ZonedDateTime`

!!! tip "Examples"

    SpEL without : `${T(java.time.ZonedDateTime).now()}`

    SpEL with    : `${#now()}`

## dateFormatter

!!! note "dateFormatter (String pattern)"

    See [dateFormatter(String pattern)](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/format/DateTimeFormatter.html) for further details

    **Parameters** :

    * String pattern
    * Mandatory (:material-check:)
    * If the pattern you give is invalid, you will get an IllegalArgumentException as a throw.

    **Returns** :

    * `java.time.format.DateTimeFormatter`

!!! tip "Examples"

    SpEL without : `${T(java.time.format.DateTimeFormatter).ofPattern("pattern")}`

    SpEL with    : `${#dateFormatter("pattern")}`


## dateFormatterWithLocale

!!! note "dateFormatterWithLocale (String pattern, String locale)"

    Obtains an instance of ZonedDateTime from a local date and time.

    See [datteFormatterWithLocale(String pattern, String locale)](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/format/DateTimeFormatter.html) for further details

    **Parameters** :

    * String pattern
    * Mandatory (:material-check:)
    * String locale
    * If the pattern you give is invalid, you will get an IllegalArgumentException as a throw.

    **Returns** :

    * `java.time.format.DateTimeFormatter`

!!! tip "Examples"

    SpEL without : `${T(java.time.format).ofPattern("pattern", "locale")}`

    SpEL with    : `${#dateFormatterWithLocale("pattern", "locale")}`


## isoDateFormatter

!!! note "isoDateFormatter (String type)"

    This method will create a formatter based on a simple pattern of letters and symbols as described in the class documentation.

    See [isoDateFormatter(String type)](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/format/DateTimeFormatter.html) for further details

    **Parameters** :

    * String type
    * If no argument type is given or equals to "null", this will throw you an exception => "Unknown date time formatter type"

    **Returns** :

    * `java.time.format.DateTimeFormatter`


!!! tip "Examples"

    SpEL without : `${T(java.time.format).DateTimeFormatter()}`

    SpEL with    : `${#isoDateFormatter("type")}`


## timeAmount

!!! note "timeAmount (String text)"

    See [timeAmount(String unit)](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/temporal/TemporalAmount.html) for further details

    **Parameters** :

    * String text
   
    **Returns** :
    
    * `java.time.temporal.TemporalAmount`

!!! tip "Examples"

    SpEL without : `${T(java.time.temporal).timeAmount("text")}`

    SpEL with    : `${#timeAmount("text")}`

## timeUnit

!!! note "timeUnit (String unit)"
    
    See [timeUnit(String unit)](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/temporal/ChronoUnit.html) for further details

    **Parameters** :

    * String unit 
    * If unit is equals to "null" you will get ==> IllegalArgumentException error

    **Returns** :
    
    * `java.time.temporal.ChronoUnit` 


!!! tip "Examples"

    SpEL without : `${T(java.time.temporal).timeUnit("unit")}`

    SpEL with    : `${#timeUnit("unit")}`