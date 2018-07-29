# Learning Clojure

[Clojure](https://clojure.org/) is a dialect of Lisp that has [interop with Java](https://clojure.org/reference/java_interop)

Although the goal is to eventually deploy to Zeit, for now (until we figure that out) let's deploy to Heroku since they have created a sample ["hello world" Clojure project](https://devcenter.heroku.com/articles/getting-started-with-clojure) which makes it incredibly easy to do so.

This Heroku project uses leiningen,  [compojure](https://github.com/weavejester/compojure) and [ring](https://github.com/ring-clojure/ring).

```
$ git clone https://github.com/heroku/clojure-getting-started.git
$ cd clojure-getting-started
$ lein repl
user=> (require 'clojure-getting-started.web)
user=>(def server (clojure-getting-started.web/-main))
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

Now you can deploy the hello world to Heroku. You can either do control-d to stop the REPL or open a new tab to the same directory:

```
$ heroku login
$ heroku create
$ git push heroku master
$ heroku open
```

So I can see "hello world" - nice! - but how do I [add static resources like css and images](https://nelsonmorris.net/2015/06/01/how-does-serving-html-css-and-javascript-fit-in-a-clojure-web-app.html)?


## clojurians
[beginners](https://clojurians-log.clojureverse.org/beginners/2017-11-01)

## Podcasts
[lispcast](https://lispcast.com/)

## RSS
[elfeed-cljsrn](https://github.com/areina/elfeed-cljsrn)

## Creator of Clojure
[Rich Hickey](https://www.infoq.com/profile/Rich-Hickey)
