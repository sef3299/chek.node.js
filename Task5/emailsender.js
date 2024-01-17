const  nodemailer=require('nodemailer')
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'seif.abichou20@gmail.com',
      pass: 'dsmy twkv aoju nbbb'
    }
  });
  
  var mailOptions = {
    from: 'seif.abichou20@gmail.com',
    to: 'isramadssia23@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>heyyyyy</h1>/n<p>the one who lives</p>'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });