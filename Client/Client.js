const axios = require('axios')
var a;
var url = "http://localhost:69/" //Change this to the url of your server

let config = {
  headers: { //Put headers and meta info here main payload should be put inside the axios.post command below
    "user-agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0",
    host: 'www.friv.com'
  }
}


//send the request to the server
axios.post(url, {
  Test: 'test'
}, config)
