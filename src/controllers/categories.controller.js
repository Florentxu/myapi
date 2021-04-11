const Category = require("../models/categories.model");

exports.create = (req, res) => {
    const category = new Category({
        title: req.body.title
    });

    category.save()
    .then((data) =>{
        res.send({
            category: data,
            confirmed: true,
        });
    })
    .catch((err) =>{
        console.error(err.message);
        res.status(500).send({
            error: 500,
            message: err.message || "Une erreur c'est produite lors de la création",
        })
    })
}

exports.update = (req, res) => {
    Category.findOneAndUpdate(
        { _id: req.params.id },
        {
            title: req.body.title,
        }
    )
    .then((data) => {
        res.json({
            message :" categorie modifié",
            data: data
        });
    }).catch((err) => {
        console.log(err.message);
    })
}

exports.find = (req, res) => {
    Category.find()
    .then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err.message);
    })
};

exports.findOne = (req , res) => {
    Category.findById(req.params.id)
    .then((data) =>{
        res.json(data);
    })
    .catch((err) => {
        console.log(err.message);
    })
};