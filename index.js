const hbs = require('express-handlebars');
const path = require ('path');
const bodyParser = require ('body-parser')
const express = require('express');
const app = express();

const routes = require('./routes/routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', routes);

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
app.set('view engine' ,'.hbs');

// app.get('/', async(req, res) => {
//     let data = await getWeather();
//     let location = data.list [0].name;
//     let country = data.list [0].sys.country;
//     let temp = data.list [0].main.temp;
//     let humidity = data.list [0].main.humidity;
//     let wind = data.list [0].wind.speed;
//     console.log(location, country, temp, humidity, wind)
//     res.render('index', {location, country, temp, humidity, wind});
// });

app.listen(3000, () =>{
    console.log('server listening on port 3000');
});