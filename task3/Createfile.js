const fs= require('fs');
fs.rightFile('welcom.txt','hello node',(error)=>{
    if (error) throw error
    console.log("the file is saved")
})
fs.readFile('hello.txt',(error)=>{
    if (error) throw error
    console.log(data.toString())
})