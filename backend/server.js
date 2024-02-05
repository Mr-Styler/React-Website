import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res, next) => {
    res.send(data.products);
});

app.get('/api/products/slug/:slug', (req, res, next) => {
    const product = data.products.find(prod => prod.slug === req.params.slug);

    if (product) {
        res.send(product);
    } else {
        res.status(404).send({Message: 'Product Not Found'})
    }
});

const port = process.env.PORT || 7777;
app.listen(port, () => {
    console.log(`server is running live`);
});