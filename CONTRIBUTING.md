Writing good commit messages and making good PRs is an important aspect of open source and should not be overlooked.
Below are some guidelines which you must follow:

## Commit guidelines

1. Ensure to signoff your commits using `--signoff`.
2. Ensure that commit messages follow [these](https://www.conventionalcommits.org/en/v1.0.0/#specification) conventions.

```bash
    git commit --signoff -m "feat(components): add loader"
```

## Creating PR

1. Fork the repo(if not done already)
2. Checkout to a new branch `<github-username>/<issue-number>/<brief-issue-desc>`
3. Give an appropriate title to PR.
4. Mention the issue number in PR description.
5. Mention the issue number in PR title. e.g. `<PR title> - #<issue number>`

## After PR is merged

- Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:
```bash
    git push origin --delete name/issue-tracker/short-description
```
- Check out the master branch:
```bash
    git checkout master
```
- Delete the branch in `local` repo by using 
```bash
    git branch -D <branch_name>
```
- Update you master with latest
```
  git checkout master
  git fetch --all --prune
  git rebase upstream/master
  git push origin master
```

