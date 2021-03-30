const Joi = require('joi');

const userSchemaValidation = (req, res, next) => {
    const userValidationSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        tel: Joi.string().required(),
        email: Joi.string().email(),
        address: Joi.object().keys({
            street: Joi.string().required(),
            city: Joi.string().required(),
            ccode: Joi.string().required(),
            country: Joi.string().required()
        }),
        password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$')).required()
    });
    const validation = userValidationSchema.validate(req.body);
    // console.log(validation);
    if (validation.error) {
        res.send({
            error: validation.error
        })
    }
    next();
}
module.exports = userSchemaValidation;