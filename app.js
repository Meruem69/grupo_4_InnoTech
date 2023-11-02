const express = require(`express`);
const app = express();

const path = require(`path`);



const publicPath = path.resolve(__dirname, './public/css/style.css')
app.use( express.static(publicPath) );

app.listen(3030, () => {
    console.log(`Servidor corriendo en el puerto 3030`);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
})

app.get('/productoCar', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productoCar.html'))
})
