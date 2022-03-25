const router = require("express").Router();
const User = require("../model/User");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const path = require("path");

router.get("/login", (req,res) => {
    try{
        return res.render("login", {pageTitle: "Login", layout: "layout3"});
    }catch(err){
        return res.redirect("/");
    }
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/login');
});


router.get("/register", (req,res) => {
    try{
        return res.render("signup", {pageTitle: "Signup", layout: "layout3"});
    }catch(err){
        return res.redirect("/");
    }
});


router.post('/register', async (req,res) => {
    try{
        const {username, fullname, email, phone, country, currency, leverage, account_type, password, password2} = req.body;
        const user = await User.findOne({email, username});
        const user1 = await User.findOne({username});
        if(user || user1){
            console.log("here")
            return res.render("signup", {...req.body, error_msg: "A User with that email or username already exists", pageTitle: "Signup", layout: "layout3"});
        } else{
            if(!username || !fullname || !email || !phone || !country || !currency || !leverage || !account_type || !password || !password2){
                return res.render("signup", {...req.body, error_msg: "Please fill all fields", pageTitle: "Signup", layout: "layout3"});
            }
            if(password !== password2){
                return res.render("signup", {...req.body, error_msg: "Both passwords are not thesame", pageTitle: "Signup", layout: "layout3"});
            }
            if(password2.length < 6 ){
                return res.render("signup", {...req.body, error_msg: "Password length should be min of 6 chars", pageTitle: "Signup", layout: "layout3"});
            }            
            const newUser = {
                username, 
                fullname, 
                email, 
                phone, 
                country, 
                currency, 
                leverage, 
                account_type, 
                password
            };
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(password2, salt);
            newUser.password = hash;
            const _newUser = new User(newUser);
            await _newUser.save();
            req.flash("success_msg", "Register success, you can now login");
            return res.redirect("/login");                    
        }
    }catch(err){
        console.log(err)
    }
})



module.exports = router;