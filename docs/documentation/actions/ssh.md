!!! note "Target Authentication"

    You can either use basic authentication or use a private key and a passphrase. 

    ```json title="target example"
    {
        "name": "my_target",
        "url": "tcp://my.target:4242",
        "properties": {
            "username": "myUsername", // (1)
            "password": "myPassword", // (2)
            "privateKey": "/path/to/the/private/key", // (3)
            "privateKeyPassphrase": "myPrivateKeyPassphrase" // (4)
        }
    }
    ```

    1. Valid properties are `username` or `user`. Set this for basic authentication
    2. Valid properties are `userPassword` or `password`. Set this for basic authentication
    3. Path to private key file on the machine running Chutney
    4. Valid properties are `privateKeyPassword` or `privateKeyPassphrase`. Set this for basic authentication

# SCP

## Download

=== "Inputs"

    | Required | Name          | Type                                                             | Default |
    |:--------:|:--------------|:-----------------------------------------------------------------|:-------:|
    |    *     | `target`      | String                                                           |         |
    |    *     | `source`      | String                                                           |         |
    |    *     | `destination` | String                                                           |         |
    |          | `timeout`     | String ([Duration](/documentation/actions/other/#duration-type)) | `5 sec` |

SCP download has no outputs

### Example

=== "Kotlin"

``` kotlin
ScpDownloadAction(
    target = "myTarget",
    source = "/absolute/path/to/the/source/file", // (1)
    destination = "/absolute/path/to/the/destination/file", // (2)
    timeout = "42 ms"
)
```

1. The absolute path of the file to download from the target machine
2. The absolute path of the destination file on the machine running Chutney

## Upload

=== "Inputs"

    | Required | Name          | Type                                                             | Default |
    |:--------:|:--------------|:-----------------------------------------------------------------|:-------:|
    |    *     | `target`      | String                                                           |         |
    |    *     | `source`      | String                                                           |         |
    |    *     | `destination` | String                                                           |         |
    |          | `timeout`     | String ([Duration](/documentation/actions/other/#duration-type)) | `5 sec` |

SCP upload has no outputs

### Example

=== "Kotlin"

``` kotlin
ScpUploadAction(
    target = "myTarget",
    source = "/absolute/path/to/the/source/file", // (1)
    destination = "/absolute/path/to/the/destination/file", // (2)
    timeout = "42 ms"
)
```

1. The absolute path of the source file on the machine running Chutney
2. The absolute path of the destination file on the target machine


# SFTP

## Download

=== "Inputs"

    | Required | Name          | Type                                                             | Default |
    |:--------:|:--------------|:-----------------------------------------------------------------|:-------:|
    |    *     | `target`      | String                                                           |         |
    |    *     | `source`      | String                                                           |         |
    |    *     | `destination` | String                                                           |         |
    |          | `timeout`     | String ([Duration](/documentation/actions/other/#duration-type)) | `5 sec` |

SFTP download has no outputs

### Example

=== "Kotlin"

``` kotlin
SftpDownloadAction(
    target = "myTarget",
    source = "/absolute/path/to/the/source/file", // (1)
    destination = "/absolute/path/to/the/destination/file", // (2)
    timeout = "42 ms"
)
```

1. The absolute path of the file to download from the target machine
2. The absolute path of the destination file on the machine running Chutney

## FileInfo

=== "Inputs"

    | Required | Name      | Type                                                             | Default |
    |:--------:|:----------|:-----------------------------------------------------------------|:-------:|
    |    *     | `target`  | String                                                           |         |
    |    *     | `file`    | String                                                           |         |
    |          | `timeout` | String ([Duration](/documentation/actions/other/#duration-type)) | `5 sec` |

=== "Outputs"

    |               Name | Type                                                                                                       |
    |-------------------:|:-----------------------------------------------------------------------------------------------------------|
    |     `CreationDate` | [LocalDateTime](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/LocalDateTime.html) |
    |       `lastAccess` | [LocalDateTime](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/LocalDateTime.html) |
    | `lastModification` | [LocalDateTime](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/LocalDateTime.html) |
    |             `type` | String                                                                                                     |
    |      `owner:group` | String                                                                                                     |

### Example

=== "Kotlin"

``` kotlin
SftpFileInfoAction(
    target = "myTarget",
    file = "/path/to/file", // (1)
    timeout = "42 ms"
)
```

1. The file path on the target machine

## ListDir

=== "Inputs"

    | Required | Name        | Type                                                             | Default |
    |:--------:|:------------|:-----------------------------------------------------------------|:-------:|
    |    *     | `target`    | String                                                           |         |
    |    *     | `directory` | String                                                           |         |
    |          | `timeout`   | String ([Duration](/documentation/actions/other/#duration-type)) | `5 sec` |

=== "Outputs"

    |    Name | Type          |
    |--------:|:--------------|
    | `files` | List<String\> |

### Example

=== "Kotlin"

``` kotlin
SftpListDirAction(
    target = "myTarget",
    directory = "/path/to/directory", // (1)
    timeout = "42 ms"
)
```

1. The directory path on the target machine

## Upload

=== "Inputs"

    | Required | Name          | Type                                                             | Default |
    |:--------:|:--------------|:-----------------------------------------------------------------|:-------:|
    |    *     | `target`      | String                                                           |         |
    |    *     | `source`      | String                                                           |         |
    |    *     | `destination` | String                                                           |         |
    |          | `timeout`     | String ([Duration](/documentation/actions/other/#duration-type)) | `5 sec` |

SCP upload has no outputs

### Example

=== "Kotlin"

``` kotlin
SftpUploadAction(
    target = "myTarget",
    source = "/absolute/path/to/the/source/file", // (1)
    destination = "/absolute/path/to/the/destination/file", // (2)
    timeout = "42 ms"
)
```

1. The absolute path of the source file on the machine running Chutney
2. The absolute path of the destination file on the target machine

# SSH

## Client

=== "Inputs"

    | Required | Name       | Type   | Default   | Values               |
    |:--------:|:-----------|:-------|:---------:|:---------------------|
    |    *     | `target`   | String |           |                      |
    |    *     | `commands` | String |           |                      |
    |          | `channel`  | String | `COMMAND` | `COMMAND` or `SHELL` |

=== "Outputs"

    |    Name   | Type                                   |
    |----------:|:---------------------------------------|
    | `results` | List<[CommandResult](#commandresult)\> |

### Example

=== "Kotlin"

``` kotlin
SshClientAction(
    target = "myTarget",
    commands = listOf("{\"command: \"whoami\", timeout:\"10 s\"\"}"),
    channel = SSH_CLIENT_CHANNEL.COMMAND
)
```

1. Syntax is either a list of String or a List of Command in JSON (ex. {command: "xxx", timeout:"10 s"})  
   You can set a timeout for each command, format is a [Duration](/documentation/actions/other/#duration-type)  
   Default timeout value is 5 seconds

### CommandResult

A `CommandResult` represents the output of one command.  
The following attributes can be used in SpEL :

* `command`: Get the command ([Command](#command))  
  -> `${#results.get(0).command}`
* `exitCode`: Get the command exit code (int)  
  -> `${#results.get(0).exitCode}`
* `stdout`: Get the standard output of the command (String)  
  -> `${#results.get(0).stdout}`
* `stderr`: Get the error output of the command (String)  
  -> `${#results.get(0).stderr}`

### Command

The following attributes can be used in SpEL :

* `command`: Get the actual command (String)  
  -> `${#command.command}`
* `timeout`: Get the command timeout ([Duration](/documentation/actions/other/#duration-type))  
  -> `${#command.timeout}`


