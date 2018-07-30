# Learning ClojureScript

[ClojureScript](https://clojurescript.org/) is a compiler of [Clojure](learning_clojure.md) that has [interop with Javascript](https://kanaka.github.io/clojurescript/web/synonym.html)

## Figwheel

If you have developed with create-react-app, you know how easy it is to get up and running building apps with instant feedback.

Wouldn't it be nice to get Hot Module Reloading working too with Clojurescript too? Figwheel [figwheel](https://github.com/bhauman/lein-figwheel) provides HMR so that we can see our changes as soon as we save.

Let's start a new project and build this [quick start figwheel](https://github.com/bhauman/lein-figwheel/wiki/Quick-Start) app.

## Reagent & Re-frame

You have built several React & Redux projects and now wish to learn the equivalent in Clojurescript which is [Reagent](https://reagent-project.github.io/) & [Re-frame](https://github.com/Day8/re-frame).  

We will leverage the [luminus framework](http://www.luminusweb.net/) which is included in the latest version of leiningen

```
$ lein new luminus shed +postgres +cljs +reagent +re-frame
$ cd shed
$ lein run
```

You should see this screen in your browser:

Open the browser to http://localhost:3000

![alt text](progress/clojure.png)

Now stop the terminal and then commamd-t to open a new tab and from the same directory run:

```
$ lein figwheel
```

Then return to the previous tab and run: ```$ lein run``` again

You should see this screen in your browser:

![alt text](progress/clojurescript.png)

## Resources

[N00b walktrough of re-frame](http://www.multunus.com/blog/2016/02/noobs-walkthrough-re-frame-app/)

[ClojureScript Unraveled](http://funcool.github.io/clojurescript-unraveled/)

[ClojureScript + React Native](http://cljsrn.org/)

[React Native with Clojurescript](https://github.com/gphilipp/react-native-with-clojurescrip)

# Github Projects  
[ventas e-commerce](https://github.com/JoelSanchez/ventas)

[Conduit](https://github.com/jacekschae/conduit)

[re-pollsive](https://github.com/gadfly361/re-pollsive)

[Flashcards](https://github.com/alexanderjamesking/flashcards)

[etudes for clojurescript](https://github.com/jdeisenberg/etudes-for-clojurescript)
