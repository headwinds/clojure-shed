# clojure-shed
* learn how to build a simple API to store stuff securely using Clojure, Clojurescript, Leiningen, Docker, Crypto, and PostgreSQL deployed to Zeit or Heroku
* fantasize about colonizing mars

## Learning process

If this repo is meant to teach, it needs to support incremental learning and break up the project into smaller projects which gradually introduce new libraries. The first example project has 6 libraries, and then each subsequent example will add no more than 4 libraries.

## Examples

* level 1 clojure docker-compose - in-progress
* level 2 clojure docker-compose PostgreSQL - in-progress 
* level 3 clojure clojurescript docker PostgreSQL - to do

## Requirements

- install [clojure](https://clojure.org/)     
- install [java](https://java.com/en/download/)      
- install [leiningen](https://leiningen.org/)      

If you are on a Mac, it's best to install each with [brew](https://brew.sh/)     

- review my guide to [learning Clojure](https://github.com/headwinds/clojure-shed/tree/master/docs/learning_clojure.md)
- review my guide to [learning Clojurescript](https://github.com/headwinds/clojure-shed/tree/master/docs/learning_clojurescript.md)

## Getting Started

*coming soon*

Goal: this project should be easy to build
complete: nope

```
docker-compose up
```


## Deploy with Docker

*coming soon*

Edit the docker file to ensure that it builds the uberjar

```
lein uberjar
```

#### Zeit - hopefully coming soon - skip to Heroku

```
$ now
```

I need help here - I've deployed a Python API to Zeit via docker and it should - in theory - be a similar process.

If you have any advice, let's discuss it in this [Zeit docker issue](https://github.com/headwinds/clojure-shed/issues) thread.

#### Heroku

For more information about using Clojure on Heroku, see these Dev Center articles:

- [Getting Started with Clojure on Heroku](https://devcenter.heroku.com/articles/getting-started-with-clojure)
- [Clojure on Heroku](https://devcenter.heroku.com/categories/clojure)

## Credit

I wanted to learn how to put together a Clojure & Clojurescript project so I basically started by dismantling [yogthos memory-lane](https://github.com/yogthos/memory-hole) to build this project.
