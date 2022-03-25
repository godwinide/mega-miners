const router = require("express").Router();

router.get("/", (req,res) => {
    try{
        return res.render("index", {pageTitle: "Welcome", req});
    }
    catch(err){
        return res.redirect("/");
    }
});

router.get("/about", (req,res) => {
    try{
        return res.render("about", {pageTitle: "About Us", layout: 'layout', req});
    }
    catch(err){
        return res.redirect("/");
    }
});

router.get("/contact", (req,res) => {
    try{
        return res.render("contact", {pageTitle: "Contact Us", layout: false, req});
    }
    catch(err){
        return res.redirect("/");
    }
});



module.exports = router;