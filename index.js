const express = require('express');
const methodOverride = require('method-override');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(methodOverride('__method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/element_data', express.static(path.join(__dirname, 'element_data')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('main')
});

app.listen(PORT, () => {
    console.log('listening on ', PORT);
});
