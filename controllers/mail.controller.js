const mailModel = require('../models/mail.models');
const subscribeModel = require('../models/subscribe.models')

module.exports = {
    setAppointment:async(params) =>{
        const result = await mailModel.create({
            firstName:params.firstName,
            lastName:params.lastName,
            email:params.email
        });
        return result;

    },
    subscribe:async(params) =>{
        const result = await subscribeModel.create({
            email:params.email
        })
        return result;
    }
}