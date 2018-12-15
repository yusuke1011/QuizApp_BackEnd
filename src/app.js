const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const router = require('./router.js');

const app = express();

app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static('./src/public'));

app.use('/', router);

//3000番ポートを使用してサーバ起動
const server = app.listen(3000,() => {
    console.log('Node.js is listening to PORT:' + server.address().port);
})
