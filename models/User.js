const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    budgets:{
        Various_departments:{
            type: Number,
            default: 0,
        },
        transportation:{
            type: Number,
            default: 0,
        },
        staff_electricity:{
            type: Number,
            default: 0,
        },
        solar_elecricity:{
            type: Number,
            default: 0,
        },
        rental_electricity:{
            type: Number,
            default: 0,
        },
        insurance:{
            type: Number,
            default: 0,
        },
        mess:{
            type: Number,
            default: 0,
        },
        hostel:{
            type: Number,
            default: 0,
        },
        sponsered_or_consultancy:{
            type: Number,
            default: 0,
        },
        scolarship:{
            type: Number,
            default: 0,
        },
        services:{
            type: Number,
            default: 0,
        }
    },
    transactions:[{
        date: String,
        description: String,
        category: String,
        amount: String
        
    }], 
    spendingSoFar:{
        type: Number,
        default: 0,
    },
    toSpendThisMonth:{
        type: Number,
        default: 0,
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;
