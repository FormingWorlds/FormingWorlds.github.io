# Website [proteus-framework.org](https://proteus-framework.org)

## How to edit the page

Explanations for deployment and local testing are here:
https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll

Also useful for jekyll itself: https://jekyllrb.com/

The order of making changes to the website is as follows:
- Create a new branch
- Add the feature or fix
- Create a pull request
- Upon merge into `main` the website will be updated automatically

There are more tips and tricks specifically related to the used template in `_README.md`.

## How to test the page locally

### Install jekyll
```
gem install bundler jekyll
```

### Display the local version of the page
```
cd FormingWorlds.github.io
bundle install
bundle exec jekyll serve
````
=> Now browse to `http://localhost:4000`
