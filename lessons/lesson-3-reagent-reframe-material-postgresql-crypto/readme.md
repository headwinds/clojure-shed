# Lesson 3

Unlike major sports, eSports is still a phenomenon on the fringe. Unless you play the games, you probably aren't aware of the live tournaments, the millions in prize money, and the players who dedicate their lives to the game.

In this lesson, we will work with this cryptography library, [lock-key](https://github.com/clavoie/lock-key), which basically relies on the [Java implementation](https://stackoverflow.com/questions/10221257/is-there-an-aes-library-for-clojure) of AES, to encrypt Dota 2 tactics which only team mates can decrypt.  

* [Reagent](https://github.com/reagent-project/reagent)
* [Re-frame](https://github.com/Day8/re-frame)
* [Material UI](https://material-ui.com/)
# [Caesium](https://github.com/lvh/caesium)
# [PostgreSQL, DBeaver, & Heroku](http://thebar.cc/connecting-dbeaver-to-a-heroku-postgres-database/)

![screenshot](gallery.png)

## Getting Started

```
lein figwheel
```

In dev, there is a big API problem between communication between figwheel and the ring server. We need to figure out [figwheel can start the ring server](https://github.com/bhauman/lein-figwheel/tree/master/examples/using-ring-handler) which seems straight forward.

## Demo

[live demo](https://intense-eyrie-34041.herokuapp.com/)

## Contributing

This is great opportunity to learn Reagent, Re-frame and Material-UI as a group.

Please use the demo-template.cljs to create your component demo and it the list in sidebar.cljs file.

## Deployment to Heroku

Copy this example folder into a new directory outside of this git repo so that it has it own git repo. We don't want to have nested repos. A future improvement would to have a build script that would automatically move it.

!! Copy and paste this folder into a new directory outside of this project repo !!


1. View the project the browser which also compiles necessary files that are later built in the uberjar

```
lein figwheel
```

2. Create the uberjar

```
lein with-profile -dev,+production uberjar
```

3. Deploy to Heroku

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

Note: because you moved this into a new directory, you shouldn't have a problem but if you happen to have github repo too you will need to add heroku. After you do the step `heroko create` you will need to add the heroku path `heroku git:remote -a radiant-falls-68370` replacing that radiant-falls-68370 with whatever heroku spit out for you.

Then open your browser whatever url it created ie: https://glacial-badlands-20785.herokuapp.com/

## Dev Credit

* [using a ring handler with figwheel](https://github.com/bhauman/lein-figwheel/tree/master/examples/using-ring-handler)
* [lock-key](https://github.com/clavoie/lock-key)
* [buddy](https://github.com/funcool/buddy)
* [caesium](https://github.com/lvh/caesium)
* [Exploring Java AES encryption algorithm with Clojure](http://jyliao.blogspot.com/2010/08/exploring-java-aes-encryption-algorithm.html)

## Dota2 Credit

* [Dota 2 Guide Competitive Positions](https://imperium.news/dota-2-guide-competitive-positions/)
* [Normal Person's Guide to Watching Dota2](https://www.polygon.com/2016/8/8/12401068/dota-2-watching-guide)
* [Dota 2 Logo](https://www.flaticon.com/free-icon/dota-2_588267)
