const Product = require("../models/product.model");

exports.create = (req, res) => {
    const product = new Product({
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
        img: req.body.img,
    });

    product
        .save()
        .then((data) => {
            res.send({
                product: data,
                confirmed: true,
            });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({
                error: 500,
                message: err.message || "Une erreur c'est produite lors de la création",
            });
        });
};

exports.find = (req, res) => {
    Product.find()
    .then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err.message);
    })
};

exports.findOne = (req , res) => {
    Product.findById(req.params.id)
    .then((data) =>{
        res.json(data);
    })
    .catch((err) => {
        console.log(err.message);
    })
}
