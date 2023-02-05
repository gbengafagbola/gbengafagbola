//./main.js

const main = require("./main");
//...
const hashnodeProfile = JSON.parse(process.env.HASHNODE_PROFILE)
//...




function generateReadme(){

const username = `${hashnodeProfile.user.name}`

// Generate postsHTML too
const postsHTML = '' 



return `
    Hey. I am ${username}
   ${postsHTML}    
`
}

generateReadme()
