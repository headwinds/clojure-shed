

# dependencies

* [clojure](https://blog.venanti.us/why-clojure/)
* [compojure](https://github.com/weavejester/compojure/wiki)
* [ring](https://github.com/ring-clojure/ring/wiki)
* [environ](https://yobriefca.se/blog/2014/04/29/managing-environment-variables-in-clojure/)

Total 6

see project.clj which lists:
```
:dependencies [[org.clojure/clojure "1.6.0"]
               [compojure "1.4.0"]
               [ring/ring-json "0.3.1"]
               [ring/ring-jetty-adapter "1.4.0"]
               [environ "1.0.0"]
               [org.clojure/java.jdbc "0.6.1"]]
```  

## Getting started

```
$ lein repl
$ user=> (require 'app.web)
$ user=> (def server (app.web/-main))
```     

## Reload the REPL

```
???
```      

## Sample Post Request

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
