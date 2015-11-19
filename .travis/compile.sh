#!/usr/bin/env bash
set -e # halt script on error

bundle exec travis-lint
bundle exec jekyll build
bundle exec htmlproof ./_site --check-favicon --verbose --check-html

# config
# echo "Git config"
# git config --global user.email "nandomoreira.me@gmail.com"
# git config --global user.name "Fernando Moreira"

# # deploy
# echo "Deploy"
# git init
# git add --all
# git commit -m "Deploy to GitHub Pages"
# git push --force --quiet "https://${GH_TOKEN}@github.com/${REPO}" master