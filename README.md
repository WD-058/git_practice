# git_practice

We are going to work in teams to create each team 3 different games: rock-paper-sciessors, english to pig latin translator and caesar cipher.
To do this, the whole class will work on a repository:

- Each group will have its own folder in the repository to work on their code.
- Each folder will have three files, one named after each game.
- Each group will create their own dev branch: dev1, dev2, dev3, dev4
- Individual branches will be:
  - Created off of the teams dev branch.
  - Named "feature/name of the game + group number" -> Example: feature/caesarCipher1
  - Merged with the team dev branch on github only through a pull request

## Instructions to use the repository

1. Clone the repository if you haven't -> https://github.com/WD-058/git_practice.git
2. Create a local dev branch from main and switch to it.
3. Pull the code from "origin/dev" into that same dev branch.
4. Create your team branch off that new dev branch (dev1, dev2, etc).
   - One team member has to push their local team branch (dev1, dev2, etc) onto the repository
   - The other team member have to pull the code from that branch onthe their local team branch that they have just created.
5. Create a protection rule in Github for your team branch, so it can only be merge int it by:
   - Creating a pull request
   - Having 2 approvals from the other teammates
6. Create an individual branch off the team branch:
   - Name it "feature/ name of the game + team number" (feature/caesarCiper1)
   - Develope your code in there.
   - Push that branch into the remote once the game is done and create a pull request to merge it with the team branch.
7. Once all the games have been merged into the team branch then create a pull request to merge the team branch into the dev branch.
