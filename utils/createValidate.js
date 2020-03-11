function createValidate(...args)  {
    const obj = {};
    args.forEach(({name, req, error}) => obj[name] = {
            validator: function (v) {
                return req.test(v);
            },
            message: props => error
        });
    return obj;
}

module.exports = createValidate;