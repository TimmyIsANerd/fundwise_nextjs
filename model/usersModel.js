import { Schema, model, models } from 'mongoose';


// const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// const Schema = mongoose.Schema;


const userSchema = new Schema(
    {
        userId: { type: String, unique: true, required: true },
        email: { type: String, required: true, unique: true },
        active: { type: Boolean, default: false },
        password: { type: String, required: true },
        resetPasswordToken: { type: String, default: null },
        resetPasswordExpires: { type: Date, default: null },

        emailToken: { type: String, default: null },
        emailTokenExpires: { type: Date, default: null },

        accessToken: { type: String, default: null },

        referralCode: { type: String, unique: true },
        referrer: { type: String, default: null },
        userKyc: {type: Schema.Types._id, ref: 'UserKyc'},
        cashFlow: {type: Schema.Types._id, ref: 'CashFlow'}
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
        },
    }
);


const User = models.User || model('User', userSchema);


module.exports.hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        throw new Error("Hashing failed", error);
    }
};
module.exports.comparePasswords = async (inputPassword, hashedPassword) => {
    try {
        return await bcrypt.compare(inputPassword, hashedPassword);
    } catch (error) {
        throw new Error("Comparison failed", error);
    }
};



const userKycSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    phoneNumber: {type: String, unique: true},
    address: {type: String},
    city: {type: String},
    zip: { type: Number, required: true },
    state: {type: String},
    Country: {type: String},
    user: { 
        type: Schema.Types._id, 
        ref: 'User'
    }
}, {
    timestamps: true
});


const UserKyc = models.UserKyc || model('UserKyc', userKycSchema);


export {User, UserKyc};