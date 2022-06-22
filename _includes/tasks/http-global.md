
## Global Notes

### Security
  All the HTTP tasks uses the same security logic.
  It is defined via the **target** input properties :
  * Basic Authentication
    A basic authorization header will be included in request if **username** and associated **password** target security properties are set.
  * SSL
    A SSL context will be set if **keystore** or **truststore** target security properties are set.
    Simple properties **keystore**, **keystorePassword**, **keyPassword**, **truststore** and **truststorePassword** could be alternatively used.

### Proxy
  By default, if **http.proxyHost** system property is set, the HTTP client will use this as the default route planner.

### Outputs

All of the HTTP tasks depicted below do have the same outputs.

### Outputs

| Name    | Type - Format                               |
|:--------|:--------------------------------------------|
| status  | int                                         |
| body    | string                                      |
| headers | map (org.springframework.http.HttpHeaders)  |