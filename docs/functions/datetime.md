Following functions help you write and shorten SpEL when you need to handle time or date values.


## currentTimeMillis

!!! note "currentTimeMillis()"

    Returns a String of the difference, measured in milliseconds, between the current time and midnight, January 1, 1970 UTC.

    See [System.currentTimeMillis()](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/System.html#currentTimeMillis()) for further details

    **Returns** :

    * A String of the current time in milliseconds


!!! tip "Examples"

    SpEL without : `${T(java.util.String).valueOf(T(java.lang.System).currentTimeMillis())}`

    SpEL with    : `${#currentTimeMillis()}`


## date

!!! note "date(String date, String... format)"

    See [Date(Temporal)](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/temporal/Temporal.html) & [DateTimeFormatter.parseBest()](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/format/DateTimeFormatter.html#parseBest(java.lang.CharSequence,java.time.temporal.TemporalQuery...)) for further details

    **Parameters** :

    * String Date
        * The date you want to get a Temporal from
        * Mandatory (:material-check:)
        * ex. "27 July 2022"
    * String format (is optional), if no format is assigned, the default value for this argument will be the ISO format.
        * The format used for the date
        * ex. "dd MMMM yyyy"

    **Returns** : `java.time.temporal.Temporal`

!!! tip "Examples"

    SpEL without : `${T(java.time.format.DateTimeFormatter).ofPattern(T(java.time.format.DateTimeFormatter).ISO_INSTANT).parseBest("27 July 2022", ZonedDateTime::from, LocalDateTime::from, LocalDate::from, Instant::from)}`

    SpEL with    : `${#date("27 July 2022")}`


## dateFormatter

!!! note "dateFormatter(String pattern)"

    This method will create a formatter based on a simple pattern of letters and symbols as described in the class documentation.

    See [dateFormatter(DateTimeFormatter.ofPattern())](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/format/DateTimeFormatter.html#ofPattern(java.lang.String)) for further details

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

!!! note "dateFormatterWithLocale(String pattern, String locale)"

    This method will create a formatter based on a simple pattern of letters and symbols as described in the class documentation.

    See [dateFormatterWithLocale(DateTimeFormatter.ofPattern())](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/format/DateTimeFormatter.html#ofPattern(java.lang.String)) for further details

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

!!! note "isoDateFormatter(String type)"

    Formatter for printing and parsing date-time objects.

    See [isoDateFormatter(DateTimeFormatter)](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/format/DateTimeFormatter.html) for further details

    **Parameters** :

    * String type
    * If no argument type is given or equals to "null", this will throw you an exception => "Unknown date time formatter type"

    **Returns** :

    * `java.time.format.DateTimeFormatter`


!!! tip "Examples"

    SpEL without : `${T(java.time.format).DateTimeFormatter()}`

    SpEL with    : `${#isoDateFormatter("type")}`


## now

!!! note "now()"

    Returns the current date-time using the system clock.

    See [ZonedDateTime.now()](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/ZonedDateTime.html#now()) for further details

    **Returns** :

    * `java.time.ZonedDateTime`

!!! tip "Examples"

    SpEL without : `${T(java.time.ZonedDateTime).now()}`

    SpEL with    : `${#now()}`


## timeAmount

!!! note "timeAmount(String text)"

    See [timeAmount(TemporalAmount)](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/temporal/TemporalAmount.html) for further details

    **Parameters** :

    * String text
   
    **Returns** :
    
    * `java.time.temporal.TemporalAmount`

!!! tip "Examples"

    SpEL without : `${T(java.time.temporal).timeAmount("text")}`

    SpEL with    : `${#timeAmount("text")}`


## timeUnit

!!! note "timeUnit(String unit)"

    See [timeUnit(ChronoUnit)](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/temporal/ChronoUnit.html) for further details

    **Parameters** :

    * String unit 
    * If unit is equals to "null" you will get ==> IllegalArgumentException error

    **Returns** :
    
    * `java.time.temporal.ChronoUnit` 


!!! tip "Examples"

    SpEL without : `${T(java.time.temporal).timeUnit("unit")}`

    SpEL with    : `${#timeUnit("unit")}`
