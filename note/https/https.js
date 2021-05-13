const https = require('https')
const fs = require("fs");

var options = {
    key: fs.readFileSync('./demo.key'),
    cert: fs.readFileSync('./demo.pem')
};

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
}).listen(3011, function () {
    console.log('Https server listening on port ' + 3011);
});