const nodemailer =  require('nodemailer');


class EmailController {
    transporter  = nodemailer.createTransport({
        host: "smtp.gmail.com" ,
        port: process.env.MAIL_PORT,
        secure : false , 
        auth: {
            user: "vimalprakash3322@gmail.com",
            pass: "icrgmmcabnahvnyt"
        },
    } );

    async sendEmail(emailOptions) {
        const errors  = [] ; 
        const  success =  [] ; 

       try { 
        await this.transporter.sendMail(emailOptions);
        success.push(emailOptions.to);
       }
       catch(error) { 
        console.log(error);
        errors.push({recipient : emailOptions.to  , error : error.message});
       }

        return {success , errors};
    }



}


module.exports = EmailController ;