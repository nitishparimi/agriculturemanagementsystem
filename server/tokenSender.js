const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'nitishparimi8@yahoo.com',
        pass: '3002@N17o'
    },
    debug: true,
    logger: true
});

const token = jwt.sign({
		data: 'Token Data'
	},'ourSecretKey', { expiresIn: '10m' }
);	

const mailConfigurations = {

	// It should be a string of sender/server email
	from: 'nitishparimi8@yahoo.com',

	to: 'nitishparimi8@gmail.com',

	// Subject of Email
	subject: 'Email Verification',
	
	// This would be the text of email body
	text: `Hi! There, You have recently visited
		our website and entered your email.
		Please follow the given link to verify your email
		http://localhost:9000/verify/${token}
		Thanks`
	
};

transporter.sendMail(mailConfigurations, function(error, info){
	if (error) throw Error(error);
	console.log('Email Sent Successfully');
	console.log(info);
});
