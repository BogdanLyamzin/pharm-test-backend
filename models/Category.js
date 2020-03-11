const {
    Schema,
    model,
    Types
} = require("mongoose");

const category = {
    parentID: null,
    name: {
        ru: "Ноутбук",
        ua: "Ноутбук",
        eng: "Notebook"
    },
    description: {

    }
};

const Category = new Schema({
    parentID: {
        
    },
    names: [String],
    name: "",
    description: {
        
    },
    img: {
        
    }
});
