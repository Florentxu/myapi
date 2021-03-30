const Product = require("../models/product.model");

exports.create = (req, res) => {
    const product = new Product({
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
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

exports.update = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        {
            price: req.body.price,
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            img: req.body.img,
        }
    )
    .then((data) => {
        res.json({
            message :" produit modifier",
            data: data
        });
    }).catch((err) => {
        console.log(err.message);
    })
}

exports.delete = (req, res) => {
    Product.deleteOne(
        { _id: req.params.id }
    )
    .then((data) => {
        res.json({
            message :" produit supprimer",
            _id: req.params.id 
        });
    }).catch((err) => {
        console.log(err.message);
    })
}

exports.find = (req, res) => {
    Product.find()
        .then((data) => {
            res.json(data);
        }).catch((err) => {
            console.log(err.message);
        })
};

exports.findOne = (req, res) => {
    Product.findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err.message);
        })
}
