const fs = require('fs')
const cookies = require('./pre-checked.json')

let cookiesremoved = 0
for (let i = 0; i < cookies.length; i++){
  for (let item of cookies){
    if (cookies[i].cookie == item.cookie) {
      cookies.splice(i, 1)
      cookiesremoved += 1
    }
  }
}
fs.writeFileSync('./checked-cookies.json', JSON.stringify(cookies))

console.log(`removed ${cookiesremoved} cookies`);
