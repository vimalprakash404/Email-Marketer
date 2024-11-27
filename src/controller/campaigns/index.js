const CampaignModel =  require('../../models/Campaign');
const EmailServiceClass =  require('../email');
const EmailService =  new EmailServiceClass();
const {body , validationResult} =  require('express-validator');

class Campaign  {


    sendValidator = [
        body("name").notEmpty().withMessage('name is required'),
        body("subject").notEmpty().withMessage('subject is required'),
        body("recipients").notEmpty().withMessage('recipients is required'),
        body("content").notEmpty().withMessage('content is required'),
    ]
    

    async send(req , res){
        try {
            const error = validationResult(req);
            if(!error.isEmpty()){
                return res.status(400).send(error);
            }
            const campaign =  new CampaignModel(req.body);
            const mailOption  =  {
                from :  process.env.MAIL_USER,
                to :  campaign.recipients , 
                subject : campaign.subject,
                html : campaign.content
            }
            const result = await EmailService.sendEmail(mailOption);
            campaign.sentAt =  new Date();
            campaign.save();
            return res.status(200).json({campaign , result});
        }
        catch(error){
            console.log(error);
            return res.status(500).send(error);
        }

    }

    getAll(req , res){
        try { 
            const campaigns =  CampaignModel.find();
            return res.status(200).send(campaigns);
        }
        catch(error )  {
            console.error("server error" , error);  
            return res.status(500).send(error);
        }
    }
}



module.exports =  new Campaign();
