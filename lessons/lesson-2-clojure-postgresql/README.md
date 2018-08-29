

# dependencies

* [clojure](https://blog.venanti.us/why-clojure/)
* [compojure](https://github.com/weavejester/compojure/wiki)
* [ring](https://github.com/ring-clojure/ring/wiki)
* [postgreSQL](https://www.infoworld.com/article/3240064/sql/why-old-school-postgresql-is-so-hip-again.html)
* [environ](https://yobriefca.se/blog/2014/04/29/managing-environment-variables-in-clojure/)
* [hiccup](https://github.com/weavejester/hiccup)

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
