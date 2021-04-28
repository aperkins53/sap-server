require('dotenv').config();
let express = require('express');
let app = express();
let sequelize = require('./db');

let user = require('./controllers/usercontroller');
let car = require('./controllers/carcontroller');
let part = require('./controllers/partcontroller');

sequelize.sync();
app.use(require('./middleware/headers'));

app.use(express.json());

app.use('/user', user);
app.use('/car', car);
app.use('/part', part);

app.use(require('./middleware/validate-session'));

app.listen(3000, function(){
    console.log('App is listening on port 3000');
})