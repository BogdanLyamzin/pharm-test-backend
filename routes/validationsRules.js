const validationRules = require("../configs/validationRules");

module.exports = (server) => {
    server.get("validationrules/?email=true&article=true", (req, res)=> {
        const obj = {}
        for(let [key, value] of Object.entries(req.query)) {
            if(validationRules[key] && value) {
                obj[key] = validationRules[key];
            }
        }
        if(!req.query) {
            obj = validationRules;
        }
        res.send({
            status: "Success",
            result: obj
        })
    });
};