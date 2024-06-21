const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/contact', (req, res) => {
    // Handle contact form submission
    const { name, email, message } = req.body;
    // Add your form processing logic here
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
