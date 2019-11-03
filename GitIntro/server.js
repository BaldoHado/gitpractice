const express = require('express')
const app = express()
// hi i am editing this file for javascript
// const = constant

console.log("On branch test")
app.get('/', (req, res) => res.send('Hello World!'))

console.log("creating diff!!")

app.listen(3000, () => console.log('Example app listening on port 3000!'))
