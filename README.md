# Mongo core connector

## Changlog

### 20181006

- refactor: 
  - db
    - accepts arg of what db to connect to
    - returns db connector as an object
  - app query
    - is async
    - returns results, separation of concers, one part to query and get results. The other to take results and process as desired.

### 20181005 : database stands alone in its own directory `./data/database/`

### 20181005 convert to async es7

### 20181005 convert to promise native es6

### 20181005 separate db from iteration functionality

### 20181005 make a connector using .env for dev. All reside in app.js, see scripts for prettier install