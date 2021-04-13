
const fs = require('fs');
const fetch = require('node-fetch');

 fetch('http://jsonplaceholder.typicode.com/posts')
.then(response => response.text())
.then((data) => {
  
fs.writeFile('./result/posts.txt',`${data}`,function(err){
  if (err) throw err
console.log('File created')
})

})
