// Git
// git is a version control system used to track changes in your files.
// Git commits are checksumed usiing sha-1, meaning no corrupt files go unoticed without users knowledge
// Three states of Git
// -modified
// file changed, but it has not been commited
// staging
// files that are marked to go into the next commit snapshot by using git add .
// commit state
// data safely stored in the local database
// 
// to start version/track control
// git init
// creates new project
// your project should never be inside another project folder in order to avoid inverse tree tracking issues
//
// stage our files for a commit
// git add

// use git status to check on file staging

// to commit your files, use git commit -m " Your message here"

// to create a new branch use git branch <new branch name>

or
// to create new branch and switch to it use git checkout -b <branch name>
// to see all history use git log <branch name>

// to delete a branch, use git branch -D <branch name>

// my boss stinks and I dont like him

// to remove an unstaged commit, use git reset <file name>
// to remove an entire commit, use git reset --hard <commit hash BEfore the ones you want removed>

// to add remote branch
// check if any exist using git remote -v
// if none exist, and you've created a repo on Github
// run git remote add <name_of_remote_stream> <github_repo_url

// to push github
// git push <name _of_remoteStream> <branch_of_branch>
// you must sit on the branch you are pushing to