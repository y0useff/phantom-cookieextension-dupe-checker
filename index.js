const fs = require('fs')
cookies = require('./pre-checked.json')

cookies = cookies.map(cookie => cookie.cookie)

cookies = cookies.filter((item, index) => cookies.indexOf(item) === index);

console.log(cookies);
let objArray = []
for (let i = 0; i < cookies.length; i++){
  let obj = {
    cookie: cookies[i],
    site: "YeezySupply"
  }
  objArray.push(obj)
}

fs.writeFileSync('./checked-cookies.json', JSON.stringify(objArray))

console.log("Removed Duplicates!");
