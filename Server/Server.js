/* const express = require('express');
const app = express();
const port = 3002;
var data;
app.post('/', (req, res) => {
  console.log(req.body.data)
  res.send("hi")
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
*/

const express = require('express')
const app = express()
var port = 69;

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.post('/', (req, res) => {
  console.log(req.body.hello)
})

app.listen(port, () =>{


})
