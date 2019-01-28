# Spms Apps Typescript Logger

A typescript logger based on the winston logger which works out of the box by calling the method of the log you want to get.

## Instalation

This is a Node.js module available through the npm registry.

Before installing, download and install Node.js.

Installation is done using the npm install command:

`npm install @spms-apps/ts-logger`

## Description

There are three types of logs (for now):

1. **Basic** Log
2. **Method** Log
3. **Http Request** log

All logs have a common set of properties:

| Property        |   Type   |                          Description                           |
| --------------- | :------: | :------------------------------------------------------------: |
| env             |  string  | The envirnoment where the app is running (eg: dev, qual, prod) |
| level           |  string  |           A winston log level (debug, info, warn...)           |
| message         |  string  |               A small text describing the event                |
| tags (optional) | string[] |               Optional keys to identify the log                |
| timestamp       |  string  |              The time when the log was generated               |
| type            |  string  |       The type of the log (basic, method or httpRequest)       |

The Method Log only adds one more property to the common set:

| Property |  Type  |                          Description                           |
| -------- | :----: | :------------------------------------------------------------: |
| method      | string | The name of the method where the log occured |

Finally the Http Request Log has a couple of extra properties:

| Property |  Type  |                          Description                           |
| -------- | :----: | :------------------------------------------------------------: |
| path      | string | The path of the endpoint (eg: /v4/friends) |
| httpVersion      | string | The http version |
| httpMethod      | string | The http method (eg: GET, POST...) |
| hostanme      | string | The Host field in the header |
| ip      | string | The remote address |


## Usage

To use this package you just need to import it and call the method that produces the log you want to get like so:

```
import {basicLog, methodLog, httpReqLog} from '@spms-apps/ts-logger';

basicLog(LogLevels.debug, parseFilePath(__filename), 'User x has ben created');
// Output:
// type:[basic] timestamp:[2019-01-25T23:29:38.178Z] env:[dev] level:[debug] file:[index.js] <[message]>User x has ben created<[message]>


methodLog(LogLevels.info, parseFilePath(__filename), 'User x has ben created', 'createUser');
// Output:
// type:[method] timestamp:[2019-01-25T23:29:38.180Z] env:[dev] level:[info] file:[index.js] method:[createUser] <[message]>User x has ben created<[message]>


httpReqLog(LogLevels.error, parseFilePath(__filename), requestMock);
// Output:
// type:[httpReq] timestamp:[2019-01-25T23:29:38.181Z] env:[dev] level:[error] file:[index.js] method:[GET] version:[1.1] ip:[::1] hostname:[localhost]path:[/v2/pathologies]


```

## Running the tests

All of the ts-logger tests are written with jest. They can be run with npm.

`npm run test`

## Built With

Typescript - A superset of javascript

## Versioning

We use SemVer for versioning. For the versions available, see the tags on this repository.

## Authors

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
