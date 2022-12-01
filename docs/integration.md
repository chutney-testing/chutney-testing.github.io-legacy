When using Chutney to test your applications, you may need proprietary drivers, clients or use an obscure protocol not implemented by Chutney.

**In order to do this, you have to make your own custom package.**

For example, if you use JMS with Oracle WebLogic, you have to package Chutney with the Oracle WebLogic client as a runtime dependency.  
Another use case is when you need an Action for something we don't provide, we are open to requests but if it's proprietary and cannot be open, then you have to implement your own Action and package Chutney with it.

Moreover,  
If you intend to use a shared Chutney server, you may need to integrate to an external database or authentication system.  
In order to do this, some configurations require to be done with Spring, so you have to make your own Chutney package.

This page will guide you on how to :

- Use Chutney with proprietary drivers or clients
- Use Chutney with an external database and authentication system
- Configure logs, SSL/TLS, sessions, metrics, etc.

!!! important "Quick technical insight"

    * Chutney server is a [Spring Boot](https://docs.spring.io/spring-boot/docs/2.7.x/reference/html/index.html) application running with [Undertow](https://undertow.io/) and based on a standard Spring stack (mvc, webflux, security)
    * Chutney UI is an [Angular](https://angular.io/) web application
    * Chutney is packaged as a [Spring Boot executable jar](https://docs.spring.io/spring-boot/docs/2.7.x/reference/html/executable-jar.html#appendix.executable-jar)
    * Chutney follows Angular and Spring Boot lastest versions and corresponding dependencies

!!! note "Packaging example"
    Maven module [local-dev](https://github.com/chutney-testing/chutney/tree/master/packaging/local-dev) shows one way of packaging Chutney.  
    Use it as an example to make your own package, custom to your needs.

# How to make your own Chutney package

Use [Spring Boot Build Tool Plugins](https://docs.spring.io/spring-boot/docs/2.7.x/reference/html/build-tool-plugins.html#build-tool-plugins) to package Chutney as an executable jar.

=== "maven"
    ``` xml
    <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
        <version>2.7.5</version>
        <configuration>
            <executable>true</executable>
            <layout>ZIP</layout>
            <mainClass>com.chutneytesting.ServerBootstrap</mainClass>
            <finalName>chutney-${project.artifactId}-${chutney.version}</finalName>
        </configuration>
        <executions>
            <execution>
                <goals>
                    <goal>repackage</goal>
                </goals>
            </execution>
        </executions>
    </plugin>
    ```

Declare a BOM dependency on Chutney parent.

=== "maven"
    ``` xml
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>com.chutneytesting</groupId>
                <artifactId>chutney-parent</artifactId>
                <version>${chutney.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    ```

Add Chutney server and UI as dependencies.

=== "maven"
    ``` xml
    <dependency>
        <groupId>com.chutneytesting</groupId>
        <artifactId>server</artifactId>
        <scope>runtime</scope>
    </dependency>
    <dependency>
        <groupId>com.chutneytesting</groupId>
        <artifactId>ui</artifactId>
        <scope>runtime</scope>
    </dependency>
    ```

Then, add dependency for your chosen database.

=== "maven"
    ``` xml
    <dependency> <!-- (1) -->
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
    </dependency>
    <dependency> <!-- (2) -->
        <groupId>org.postgresql</groupId>
        <artifactId>postgresql</artifactId>
    </dependency>
    ```

    1. If you want to use H2 as Chutney main database
    2. If you want to use PostgreSQL as Chutney main database

Also, you should add any dependencies you would need to run your scenarios.  
This may depend on the underlying Chutney actions you are using.  

=== "maven"
    ``` xml
    <dependency> <!-- (1) -->
        <groupId>com.oracle</groupId>
        <artifactId>ojdbc6</artifactId>
        <version>x.x.x</version>
        <scope>runtime</scope>
    </dependency>
    <dependency> <!-- (2) -->
        <groupId>weblogic</groupId>
        <artifactId>wlthinclient</artifactId>
        <version>x.x.x</version>
        <scope>runtime</scope>
    </dependency>
    ```

    1. Example for using [SQL actions](/actions/sql) and query an Oracle database
    2. Example for using [JMS actions](/actions/jms) with a WebLogic server

Finally, add your own [Actions](/actions/introduction) and [Functions](/functions/classpath)

=== "maven"
    ``` xml
    <dependency>
        <groupId>com.my.company</groupId>
        <artifactId>chutney-extensions</artifactId>
        <version>x.x.x</version>
        <scope>runtime</scope>
    </dependency>
    ```

# Configuration

In addition to java dependencies,
you may have to provide your own configuration for your database, authentication system, user roles and permissions, logs etc.

Configuration is done by setting [Spring Boot](https://docs.spring.io/spring-boot/docs/2.7.x/reference/html/application-properties.html#appendix.application-properties) or [Chutney](#chutney-specifics) properties.

In order to do this, you have to edit the default Spring Boot configuration file **application.yml**.

!!! warning "Handling secrets"
    How to handle secrets in configuration files varies a lot and depends on your CI/CD so this documentation does not cover this topic.  
    One example, if you use [Ansible](https://docs.ansible.com/ansible/latest/index.html), you can package a subset of configuration files, select and filter them during deployment, so they will be included in the runtime classpath of the application.

## Database

[Liquidbase](https://www.liquibase.org/) is used to manage Chutney RDBMS schema.  
You can find corresponding changelog [here](https://github.com/chutney-testing/chutney/blob/master/server/src/main/resources/changelog/db.changelog-master.xml).

!!! note
    Chutney has been tested with H2 and PostgreSQL databases.

To configure your datasource, use the property `spring.datasource`

=== "H2 (memory)"
    ``` yaml
    spring:
        datasource:
            url: jdbc:h2:mem:dbName
    ```
    !!! note
        You can find an example in maven module [local-dev](https://github.com/chutney-testing/chutney/tree/master/packaging/local-dev), which uses an embedded H2 with filesystem persistence.

=== "PostgreSQL (SSL two way)"
    ``` yaml
    spring:
        datasource:
            url: jdbc:postgresql://host:port/dbName?ssl=true&sslmode=verify-ca&sslfactory=org.postgresql.ssl.DefaultJavaSSLFactory&currentSchema=mySchema
            username: user
    ```

## Authentication & Permissions

!!! important
    Maven module [local-dev](https://github.com/chutney-testing/chutney/tree/master/packaging/local-dev) shows :
    
    * How to use in memory authentication and roles, see the **mem-auth** profile.
    * How to use a custom LDAP authentication (for example purpose, it uses an embedded LDAP server).

Chutney uses Spring Security for :

* Basic authentication
* Enforce authentication and check authorization on API (ex. admin rights Spring Boot [Actuator](#spring-boot-actuator) endpoints)
* Configuring in memory users and roles with a Spring profile [mem-auth](link) if needed


??? note "How to use in memory Spring profile **mem-auth** "
    * Activate the profile

    ``` yaml
    spring:
        profiles:
            active:
              - mem-auth
    ```

    * Declare users and roles

    ``` yaml
    chutney:
      security:
        users:
          -
            id: user
            name: user
            firstname: user
            lastname: user
            mail: user@user.com
            password: user-password-bcrypt
            roles: # (1)!
              - role-with-admin-in-it
    ```
    
    1. Optional, if the role include the characters 'admin', ignoring case, all permissions will be granted to that user.

!!! warning
    If you create a role name including characters 'admin' (ignoring case), all permissions will be granted to users with this role.

If you want to add another authentication mechanism, you should follow the [Spring security architecture](https://spring.io/guides/topicals/spring-security-architecture).

!!! important "Authentication requirements"
    The principal build by the authentication mechanism must be an instance of the Chutney [UserDto](https://github.com/chutney-testing/chutney/blob/master/server/src/main/java/com/chutneytesting/security/api/UserDto.java).
    // I don't understand what you meant

User roles and permissions are configured either with Web app form or by editing the file.

One could use the existing [AuthenticationService](https://github.com/chutney-testing/chutney/blob/master/server/src/main/java/com/chutneytesting/security/domain/AuthenticationService.java) Chutney Spring Bean to retrieve Chutney roles by user id and grant associated authorities. // I don't understand what you mean, is it useful ? provide a real use case for showing why and how it could be done

!!! note "How to manage permissions"
    * A user can only have one role
    * Chutney permissions are defined in the [Authorization](https://github.com/chutney-testing/chutney/blob/master/server-core/src/main/java/com/chutneytesting/server/core/domain/security/Authorization.java) class.
    * The static **grantAuthoritiesFromUserRole** method of [UserDetailsServiceHelper](https://github.com/chutney-testing/chutney/blob/master/server/src/main/java/com/chutneytesting/security/infra/UserDetailsServiceHelper.java) class could be used to have the same authentication process than **mem-auth** profile, i.e. if the user has a role name containing the characters 'admin', ignoring case, user will be given all authorities available, else he will be given the authorities associated by the role retrieved by the AuthenticationService.

## Logs

Chutney is dependent on [SLF4J](https://www.slf4j.org/) API logging library.

At runtime, the Chutney server use the [Logback](https://logback.qos.ch/) SLF4J implementation and bridges all legacy API (JCL, LOG4J and JUL).

!!! important "Attention point"
    As the server bridges all legacy apis, one must be careful to not include one of libraries redirecting SLF4J logging calls to legacy API :

    * jcl-over-slf4j
    * log4j-over-slf4j and slf4j-reload4j
    * jul-to-slf4j

    Read [Bridging legacy APIs](https://logback.qos.ch/manual/configuration.html) for detail description.

A [Logback configuration](https://logback.qos.ch/manual/configuration.html) must be package in the packaging project, in classpath root.

??? note "Logback configuration examples"

    === "Standard output"
        ``` xml
        <configuration>
            <appender name="stdout" class="ch.qos.logback.core.ConsoleAppender">
                <encoder>
                    <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
                </encoder>
            </appender>
    
            <root level="WARN">
                <appender-ref ref="stdout"/>
            </root>
        </configuration>
        ```

    === "Rolling file"
        ``` xml
        <configuration>
            <appender name="total" class="ch.qos.logback.core.rolling.RollingFileAppender"> 
                <file>total.log</file>
                <encoder>
                    <pattern>%d | %logger{16} | %level | %msg%n</pattern>
                </encoder>
                <rollingPolicy class="ch.qos.logback.core.rolling.FixedWindowRollingPolicy">
                    <fileNamePattern>total.%i.log</fileNamePattern>
                    <minIndex>1</minIndex>
                    <maxIndex>50</maxIndex>
                </rollingPolicy>
                <triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy">
                    <maxFileSize>50MB</maxFileSize>
                </triggeringPolicy>
            </appender>
    
            <root level="WARN">
                <appender-ref ref="total"/>
            </root>
        </configuration>
        ```

## Spring Boot Server

We discuss here some [Spring Boot server configuration](https://docs.spring.io/spring-boot/docs/2.7.x/reference/html/application-properties.html#appendix.application-properties.server).

### TLS / SSL

Chutney server enforces the use of secure calls on any incoming requests.

!!! note "Server HTTPS configuration"
    ``` yaml
    server:
        port: 443
        ssl:
            keystore: # keystore path
            key-store-password: # keystore password
            key-password: # key password
            trust-store: # truststore path
            trust-store-password: # truststore password
    ```

Chutney Server provides the **undertow-https-redirect** Spring profile to redirect unsecured request to the right secured port.

??? note "Using **undertow-https-redirect** Spring profile"

    * Activate the profile

    ``` yaml
    spring:
        profiles:
            active:
              - undertow-https-redirect
    ```

    * Configure the HTTP listener

    ``` yaml
    server:
        http:
            port: 80 # (1)!
            interface: 0.0.0.0 # (2)!
    ```

    1. HTTP port to use.
    2. Interface to bind to.

### Compression

Spring Boot allows to configure compression on HTTP responses payloads.

Chutney Server stores scenarios executions reports and send them over the network, therefore it could be useful to use this configuration.

!!! note "Server compression configuration"
    ``` yaml
    server:
        compression:
            enabled: true
            mime-types: text/html,text/xml,text/plain,text/css,text/javascript,application/javascript,application/json # (1)!
            min-response-size: 1024 # (2)!
    ```

    1. The mime-types that should be compressed.
    2. The minimum content length required for compression.

### Session management

Spring Boot allows to configure session management.

!!! note "Server session configuration (via cookie)"
    ``` yaml
    server:
        servlet:
            session:
                timeout: 240m # (1)!
                tracking-modes: cookie
            cookie:
                http-only: true # (2)!
                secure: true # (3)!
    ```
    
    1. The session timeout. Here, 4 hours.
    2. Forbids Javascript to access the cookie.
    3. Only for HTTPS requests.

## Spring Boot Actuator

Spring Boot, with the Actuator module, provides some [production-ready features](https://docs.spring.io/spring-boot/docs/2.7.x/reference/html/actuator.html#actuator).

Chutney Server includes the Actuator module which then could be configured in the packaging.

!!! note "Actuator configuration examples"

    === "Total deactivation"
        ``` yaml
        management:
            server:
                port: -1
            endpoints:
                enabled-by-default: false
                web:
                    exposure:
                        exclude: "*"
                jmx:
                    exposure:
                        exclude: "*"
        ```

    === "Web activation simple example"
        ``` yaml
        management:
            endpoints:
                web:
                    exposure:
                        include: "*"
            endpoint:
                health:
                    show-details: always
        ```

!!! warning
    Chutney enforces **ADMIN_ACCESS** authority on all default web base path Actuator endpoints.

## Chutney specifics

Below are the properties which can be specified to configure Chutney.

| Name                                                    | Description                                                                                                       | Default value               |
|:--------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------|:----------------------------|
| chutney.configuration-folder                            | Local directory path to data and configuration files                                                              | ~/.chutney/conf             |
| chutney.environment.configuration-folder                | Local directory path to environments data files                                                                   | ~/.chutney/conf/environment |
| chutney.jira.configuration-folder                       | Local directory path to jira data files                                                                           | ~/.chutney/conf/jira        |
| chutney.server.editions.ttl.value                       | Time to live value of unclosed scenario's editions                                                                | 6                           |
| chutney.server.editions.ttl.unit                        | Time to live time unit of unclosed scenario's editions                                                            | HOURS                       |
| chutney.server.execution.async.publisher.ttl            | Time to live in seconds of a finished observable scenario execution                                               | 5                           |
| chutney.server.execution.async.publisher.debounce       | Window time in milliseconds in which a running observable scenario execution ignores new associated engine report | 250                         |
| chutney.server.campaigns.executor.pool-size             | Pool size of campaigns' executor                                                                                  | 20                          |
| chutney.server.scheduled-campaigns.fixed-rate           | Fixed time period for scheduled campaigns execution checking                                                      | 60000                       |
| chutney.server.scheduled-campaigns.executor.pool-size   | Pool size of scheduled campaigns' executor                                                                        | 20                          |
| chutney.server.agent.name                               | Default name of local agent                                                                                       |                             |
| chutney.server.agent.hostname                           | Default hostname of local agent                                                                                   |                             |
| chutney.server.agent.network.connection-checker-timeout | Socket timeout in milliseconds for agent networking management actions                                            | 1000                        |
| chutney.engine.executor.pool-size                       | Pool size of scenarios' executor                                                                                  | 20                          |
| chutney.engine.delegation.user                          | Username of engine's delegation service HTTP client                                                               |                             |
| chutney.engine.delegation.password                      | Password of engine's delegation service HTTP client                                                               |                             |
| chutney.actions.sql.max-logged-rows                     | Max logged rows in report for SQL action                                                                          | 30                          |
| chutney.component.orient.path                           | Local directory path to component data                                                                            | ~/.chutney/orient           |
| chutney.component.orient.dBProperties.dbName            | Database name of component data                                                                                   | chutney_component_db        |
| chutney.component.orient.contextConfiguration           | Database configuration map of component data                                                                      |                             |


# Metrics

Chutney leans on Spring Boot [Actuator](#spring-boot-actuator) [Micrometer](https://micrometer.io/) auto-configuration and includes by default a dependency on [Prometheus](https://micrometer.io/docs/registry/prometheus).

Therefore, one could find in the associated registry some [default metrics](https://docs.spring.io/spring-boot/docs/2.7.x/reference/html/actuator.html#actuator.metrics.supported) : JVM, System, Datasource, Loggers, Executors and Spring MVC metrics.

Moreover, Chutney server populates following metrics and associated Micrometer tags :

* **scenario_execution_count** counter (execution status, scenario id, scenario tags) is incremented after a scenario execution.
* **scenario_execution_timer** timer (execution status, scenario id, scenario tags) is recorded after a scenario execution.
* **scenario_in_campaign_gauge** gauge (campaign id, execution status) counts the scenario execution status after a campaign execution.
* **campaign_execution_count** counter (campaign id, campaign title, execution status) is incremented after a campaign execution..
* **campaign_execution_timer** timer (campaign id) is recorded after a campaign execution.

!!! warning
    How the metrics are collected outside Chutney server will not be discussed here. One could think of :
    
    * Use the Actuator Prometheus endpoint to get the metrics with the appropriate format.
    * Use push solution (Prometheus Pushgateway or custom).
