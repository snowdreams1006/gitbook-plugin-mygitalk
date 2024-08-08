#! /bin/bash

# # prepare for generate docs
# cd docs

# # re-generate docs
# rm -rf _book/ && gitbook build

# # copy to docs
# cp -rf _book/ .

# # prepare for push 
# cd ..


# pull latest 
git pull

# add commits
git add .
# commit 
git commit -m "auto deploy website"
# push to github and others
git push

# status latest 
git status