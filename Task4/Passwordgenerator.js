const passwordgenerate=require('password-generate');
function passwordgenerator(){
    const password=passwordgenerate.generate({
        length:10,
        numbers:true,
        uppercase:false,
    })
  console.log(password) 
};
passwordgenerator();
