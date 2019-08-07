# [zhewe.me](http://zhewe.me/) #

[![Build Status](https://travis-ci.org/Winbobob/winbobob.github.io.svg?branch=source)](https://travis-ci.org/Winbobob/winbobob.github.io)

> :gem:My personal website and blog >> http://zhewe.me/


## Setup

```
sudo npm install -g gulp bower browser-sync
sudo gem install bundler
bundle install
bower install
npm install
```

### Using Jekyll

```
jekyll server
```

Access, [localhost:4000](http://localhost:4000/)


### Using Gulp

```
gulp
```
or

```
gulp serve
```


### Create a posts and page using Rake tasks

```
rake post title="TITLE OF THE POST"
rake page name="about.md"
rake category title="Programing"
rake tag title="Jekyll"
```

### File Structure

```
.
├── bower.json
├── config.rb
├── _config.yml
├── deploy.sh
├── Gemfile
├── Gemfile.lock
├── gulp
│   ├── config.json
│   └── tasks
├── gulpfile.js
├── LICENSE
├── package.json
├── Rakefile
├── README.md
├── source
│   ├── 404.html
│   ├── about.html
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── images
│   │   └── js
│   ├── _assets
│   │   ├── fonts
│   │   ├── images
│   │   ├── js
│   │   └── sass
│   ├── categories
│   ├── CNAME
│   ├── timeline.html
│   ├── _data
│   │   ├── categories.yml
│   │   └── tags.yml
│   ├── feed.xml
│   ├── _includes
│   │   ├── article.html
│   │   ├── footer.html
│   │   ├── header.html
│   │   ├── head.html
│   │   ├── pagination.html
│   │   ├── post
│   │   │   ├── post-comments.html
│   │   │   ├── post-content.html
│   │   │   ├── post-footer.html
│   │   │   ├── post-header.html
│   │   │   └── post-share.html
│   │   ├── search-modal.html
│   │   └── social.html
│   ├── index.html
│   ├── _layouts
│   │   ├── category.html
│   │   ├── compress.html
│   │   ├── default.html
│   │   ├── error404.html
│   │   ├── home.html
│   │   ├── page.html
│   │   ├── post.html
│   │   └── tag.html
│   ├── _plugins
│   │   ├── ext.rb
│   │   ├── strip.rb
│   │   └── youtube.rb
│   ├── _posts
│   ├── blogs
│   │   └── index.html
│   ├── robots.txt
│   ├── search.json
│   ├── sitemap.xml
│   └── tags
└── travisGemfile
```
> All folders starting with underscore, such as `_assets` will not be included in final site.

 - File `bower.json` maintains the bower dependencies.
 - Script `config.rb` sets the paths of assets and other global configurations.
 - YAML file `_config.yml` stores the global information of admin user.
 - Script `deploy.sh` is called by `.travis.yml` and is used to force push the content in `source` branch to `master` branch.
 - File `Gemfile` and `Gemfile.lock` maintains the ruby dependencies.
 - Folder `gulp` and script `gulpfile.js`: see [gulp repo](https://github.com/gulpjs/gulp)
 - File `package.json` maintains the npm dependencies.
 - Script `Rakefile` sets several frequently-used functionalities, such as creating new catrgory, creating new tag (mentioned above).
 - Folder `source` stores all the source code.
  - Folder `assets` and `_assets` stores the css, fonts, images and javascripts of the site. And `_assets` will not be included in the final site.
  - Folder `categories` stores all kinds of categories. You can add new categories by using `rake` command.
  - Folder `tags` stores all kinds of tags. You can add new tags by using `rake` command.
  - File `CNAME` stores the domain name.
  - File `index.html` is the default starting page of the site.
  - File `about.html` stores self-introduce content.
  - File `contract.html` is the contract page.
  - Folder `blogs` stores blog pages.
  - Folder `_data` stores the information of catrgories and tags in YAML file.
  - Folder `_includes` and `_layouts` stores files related to site master template.
  - Folder `_plugins` stores some customed plugins, such as YouTube video embedded script.
  - Folder `_posts` stores all post pages.  You can add new posts by using `rake` command.
  - File `search.json` is used for seach posts.
  - File `feed.xml` is for RSS subscribe.
  - File `robots.txt`: Web site owners use the /robots.txt file to give instructions about their site to web robots; this is called The [Robots Exclusion Protocol](http://www.robotstxt.org/robotstxt.html).

## Contributing

1. Fork it
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

It is free under the [open-source MIT license](/LICENSE).
