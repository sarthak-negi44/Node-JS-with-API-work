import readline from 'readline';
import fs from 'fs';
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
const fileCreater = ()=>{
rl.question("enter you filename :",(filename) =>{
rl.question("enter the content for the file :",(content)=>{
fs.writeFile(`${filename}.txt`, content,(err)=>{
    if(err){
        console.log(`error witing the file :,${err.message}`);
    }
    else{
        console.log(`file"${filename}".txt" creared successfully  !`);
    }
    rl.close();
})
})
    })
}
fileCreater();