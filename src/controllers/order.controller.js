const Order = require("../models/order.model");

exports.createOrder = (req, res) => {
    const order = new Order({
        total: req.body.total,
        user: req.body.user,
        products: req.body.products,
    });

    order
        .save()
        .then((data) => {
            User.findByIdAndUpdate(res.body.user,{orders: data._id}).then(() => {res.send({
                order: data,
                confirmed: true,
            });
        })
    })
    .catch((err) => {
        console.log(err.message);
        res.status(500).send({
            error: 500,
            message: err.message || "Une erreur c'est produite lors de la création"
        });
    });
}

exports.getOrder = (req, res) => {
    Order.findById(req.params.id)
    .populate('user')
    .populate('products')
    .then((data) =>{
        console.log(data);
        // console.log(Order.user.firstName);
        res.json(data);
    }).catch((err) =>{
        console.log(err.message);
    })
}

exports.getOrders = (req, res) => {
    Order.find()
    .populate('user')
    .populate('products')
    .then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err.message);
    })
}