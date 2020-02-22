// Получить все
// Получить согласно параметрам GET-запроса (products/?category=notebook&brand=Acer)
// Получить один товар согласно его ID (артикул)
// Добавить товар
// Обновить товар
// Удалить товар

// "danit.com.ua/products/?catagory=notebook&brand=Acer"
app.get("/products", (req, res)=> {
    //req.query.category === notebook
    //req.query.brand === Acer
    /*
    product.find(req.query)
    {
        category: "notebook",
        brand: "Acer"
    }
    */
});
//"danit.com.ua/products/32qwg4322"
app.get("products/:id", (req, res)=> {
    //req.params.id (id === 32qwg4322)
});
app.post("/products", (req, res)=> {
    /*
    req.body.name
    req.body.article
    req.body.price
    */
   // res.send({
       
   })
});
app.put("/products/:id", (req, res)=> {
    // res.status(200);
    const product = {
        name: req.body.name,
        logo: req.body.imgSrc
    }
    const {id} = req.params.id;
    res.send({
        status: "Success",
        result: {
            id, 
            product
        }
    });
});
app.delete("/products/:id", (req, res)=> {

});
