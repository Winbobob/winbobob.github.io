# [nandomoreira.me](http://nandomoreira.me/)

[![Build Status](https://travis-ci.org/nandomoreirame/nandomoreirame.github.io.svg)](https://travis-ci.org/nandomoreirame/nandomoreirame.github.io)

> My personal website where I talk about front-end development like HTML5, CSS3, JavaScript and Wordpress, PHP and more.

---

## Contributing ##

1. Fork it
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

---

## Setup ##

```
sudo npm i -g gulp bower browser-sync
sudo gem install bundler
bundle install
npm install
```

---


### Using Jekyll ###

```
jekyll server
```

Access, [localhost:4000](http://localhost:4000/)

---

### Using Gulp ###

```
gulp
```
or

```
gulp serve
```


### Create a posts and page using Rake tasks ###

```
$ rake post title="TITLE OF THE POST"
$ rake page name="about.md"
$ rake category title="Programing"
$ rake tag title="Jekyll"
```

## License ##

It is free under the [open-source MIT license](/LICENSE).
