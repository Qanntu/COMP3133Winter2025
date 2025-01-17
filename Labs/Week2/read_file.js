const fs = require('fs')

console.log(`Trying to read file input_file.txt`);

let filename = "input_file.txt"

//Asynchronously reads the entire contents of a file

fs.readfile(filename, (err, data)=>{
    if(err){
        console.log(`Error while reading ${filename} :
        ${JSON.stringify(err)}`);
    }else{
        if(data){
            console.log(`Data from ${filename}: \n${data}`);
        }else{

            console.log(`No data recieved from ${filename}`);

            }
    }
})


console.log(`Complete reading file ${filename}`);

//Synchronous read operation

console.log(`\nTrying to read ${filename} synchronously`);

let fileData =fs.readFileSync(filename)
console.log(`fileData : ${fileData}`);


console.log(`\nComplete reading ${filename} synchronously`);

//Use readFile within asyn function
const readFileData = async() =>{
    try{
        const data = await fs.promises.readFile(filename)
        console.log(`\ndata from file : ${data}`);
    }catch(error){
        console.log(`\nError while reading file : ${JSON.stringify(err)}`)
    }
}

readFileData()