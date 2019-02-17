## React Clicky Game

A simple game made using React JS

# Deploying to Githbub Pages (After `create-react-app` locally)

1. **Create an _empty_ repository in GitHub**

   - Empty means without a `README.md` file, a `.gitignore` file, a `LICENSE` file, or any other files

2. **Install `gh-pages` package as a "dev-dependency"**
   `npm install gh-pages --save-dev`

3. **Add some properties to `package.json` file**

   - `"homepage": "https://{username}.github.io/{repo-name}`
   - Add the following to the last items in `scripts` property:
     `"predeploy": "npm run build"`
     `"deploy": "gh-pages -d build"`

4. **Add your local project to GitHub**

   - `git remote add origin {github-repo-link}`

5. **Deploy to GitHub pages**

   - `npm run deploy`

6. **Remember to also push your local repo to GitHub**
