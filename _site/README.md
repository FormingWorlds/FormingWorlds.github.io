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

On Macs there is already an outdated ruby version installed, which interferes with this. To solve this, reinstall ruby through `brew` and symlink it in your `.zshrc` (it will print out the required commands for this at the end of the installation). Once that is done and you have `ruby` and `gem` up-to-date on your system (+ `gem install github-pages`), the command above will function as expected.

### Display the local version of the page
```
cd FormingWorlds.github.io
bundle install
bundle exec jekyll serve
````
=> Now browse to `http://localhost:4000`
