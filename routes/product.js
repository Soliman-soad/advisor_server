const Product = require('../models/Product');
const router = require('express').Router();

router.get('/', (req,res)=>{
    res.send('Product routes')
})


// all products data 
router.get('/all', async(req,res)=>{
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json(err)
    }
})


// get a single product data 
router.get('/:id', async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).json(err)
    }
})

// create new product
router.post("/",async(req,res)=>{
    const newProduct = new Product(req.body);
    try{
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct);
    }
    catch(err){
        res.status(500).json(err)
    }
})

// delete a product 
router.put('/:id/delete',async(req,res)=>{
    const deleteProduct = await Product.findById(req.params.id)

    try{
        await deleteProduct.deleteOne()
        res.status(200).json("product delete")
    }
    catch(err){
        res.status(500).json(err)
    }

})


// comments on a product
router.put('/:id/comment', async(req, res)=>{
    try{
        const product = await Product.findById(req.params.id)
        await product.updateOne({$push: {comments:{user: req.body.user, comment:req.body.comment, created:req.body.created}}})
        res.status(200).json("commented");
    }
    catch(err){
        res.status(500).json(err)
    }
})

// delete a comment 
router.put("/:id/delete/comment", async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        await product.updateOne({$pull: {comments: {user:req.body.user, comment:req.body.comment, created:req.body.created}}})
        res.status(200).json("comment deleted");
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;