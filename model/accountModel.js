import { Schema, model, models } from 'mongoose';


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const mModel = mongoose.model;


//*Cash Flow for User and Admin Dashboard
const cashFlowSchema = new Schema({
    accountBal: longNumber,
    usdtBal: longNumber,
    user: { type: Schema.Types.id, ref: 'User' },
    deposits: [{ type: Schema.Types.id, ref: 'Deposit' }],
    withdrawals: [{ type: Schema.Types.id, ref: 'Withdrawal' }],
    account: { type: Schema.Types.id, ref: 'Account' }
});

const CashFlow = models.CashFlow || model('CashFlow', cashFlowSchema);

//* Schema for all deposits done on the platform.
const depositSchema = new Schema({
    depositAmount: { type: String, min: '5000' },
    date: { type: Date, default: Date.now },
    user: { type: Schema.Types.id, ref: 'User' },
});

const Deposit = models.Deposit || model('Deposit', depositSchema);


//* Schema for all withdrawals done on the platform.
const withdrawalSchema = new Schema({
    withdrawalAmount: { type: String, min: '5000' },
    date: { type: Date, default: Date.now },
    user: { type: Schema.Types.id, ref: 'User' },
});

const Withdrawal = models.Withdrawal || model('Withdrawal', withdrawalSchema);


//* Schema for users account details.
const accountSchema = new Schema({
    accountNumber: { type: String, require: true },
    bankName: { type: String, require: true },
    accountName: { type: String },
    user: { type: Schema.Types.id, ref: 'User' },
});

const Account = models.Account || model('Account', accountSchema);


export {CashFlow, Deposit, Withdrawal, Account};