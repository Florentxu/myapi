const stripe = require('stripe')('sk_test_51IYBDvDclEfXj97s9pha3d6w3njB4lUcHwcrwSDTmlJORHRIENeP2A44xCdL2b3hWuLZLNMQAfyornaxdblJdL77000u2EGqoy')

exports.checkout = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Cart',
          },
          unit_amount: req.body.amount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.VUE}/success`,
    cancel_url: `${process.env.VUE}/cart`,
  });
  console.log(res)
  res.json({ id: session.id });
};
