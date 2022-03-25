const {model, Schema} = require("mongoose");

const UserSchema = new Schema({
    fullname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    currency:{
        type: String,
        required: true
    },
    balance:{
        type: Number,
        required: false,
        default: 0
    },
    debt:{
        type: Number,
        required: false,
        default: 0
    },    
    total_earned:{
        type: Number,
        required: false,
        default: 0
    },
    total_deposit:{
        type: Number,
        required: false,
        default: 0
    },
    total_withdraw:{
        type: Number,
        required: false,
        default: 0
    },
    cot:{
        type: Number,
        required: false,
        default: 0
    },
    account_type:{
        type: String,
        required: false,
        default: "Mini"
    },
    account_status:{
        type: String,
        required: false,
        default: "Activated"
    },
    activated:{
        type: Boolean,
        require: false,
        default: false
    },
    pin:{
        type: Number,
        required: false,
        default: Math.random().toString().slice(2,7)
    },
    leverage:{
        type: String,
        required: false,
        default: "1.1"
    },
    password:{
        type: String,
        required: true
    },
    regDate:{
        type: Date,
        required: false,
        default: Date.now()
    }
});

module.exports = User = model("User", UserSchema);