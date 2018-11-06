# Lesson 1 Clojure

Learn how to make a few Clojure service calls and see how one can transform lists using map, filter, find, and reduce on the server.

# dependencies

* [clojure](https://blog.venanti.us/why-clojure/)
* [compojure](https://github.com/weavejester/compojure/wiki)
* [ring](https://github.com/ring-clojure/ring/wiki)
* [environ](https://yobriefca.se/blog/2014/04/29/managing-environment-variables-in-clojure/)

see project.clj which lists them and their version numbers.

## Getting started

```
$ lein repl
$ user=> (require 'app.web)
$ user=> (def server (app.web/-main))
```     
   

## Deploy to Heroku

Copy this lesson into a new directory outside of this git repo so that it has it own git repo. We don't want to have nested repos.

This order is important:

```
heroku login
git init
git add .
git commit -m "first commit"
heroku create
git push heroku master
heroku ps:scale web=1
heroku open
```
Then open your browser whatever url it created ie: https://glacial-badlands-20785.herokuapp.com/

## Sample Route Handler & Request

handler
```
(POST "/map-colonists-to-agency" request
  (let [agency-name (or  (get-in request [:params :name])
                    (get-in request [:body :name])
                    "SpaceX")]
```

Within this request, you can see the `:body` map which is a nested map with the `:name` property containing "NASA". If it failed to find the name, it would default to "SpaceX".

request
```
{
:ssl-client-cert nil,
:protocol HTTP/1.1,
:cookies {},
:remote-addr 0:0:0:0:0:0:0:1,
:params {},
:flash nil,
:route-params {},
:headers {origin http://localhost:5000, host localhost:5000, user-agent Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36, content-type application/json; charset=UTF-8, content-length 15, referer http://localhost:5000/no-referrer, connection keep-alive, accept */*, accept-language en-US,en;q=0.9, accept-encoding gzip, deflate, br, cache-control max-age=0},
:server-port 5000,
:content-length 15,
:form-params {},
:compojure/route [:post /map-colonists-to-agency],
:session/key nil,
:query-params {},
:content-type application/json; charset=UTF-8,
:character-encoding UTF-8,
:uri /map-colonists-to-agency,
:server-name localhost,
:query-string nil,
:body {:name NASA},
:multipart-params {},
:scheme :http,
:request-method
:post,
:session {}
}
```  
