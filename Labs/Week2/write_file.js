const fs = require('fs')

let fileName = "output_file.txt"
console.log(`Trying to write to ${fileName}`);

let dataBuffer = Buffer.from("This is a sample data to write")

// Asynchronously writes data to a file,

dataBuffer = Buffer.from("\nThis is a new data to be appended to aoutput")

//Use floag : 'a' to append to existing contecnt of file
fs.writeFile(fileName, dataBuffer, {flag: 'a'},(err)=>{
    if(err){
        console.log(`Unable to write to ${fileName}:
        ${JSON.stringify(err)}`);

    }else{
        console.log(`Data written successfully to ${fileName}`);
    }
})


dataBuffer = Buffer.from([1, 2, 3, 4, 5])
//writing synchronously to file

let err = fs.writeFileSync(fileName, dataBuffer)
if(err){
    console.log(`\nUnable to write to ${fileName}:
    ${JSON.stringify(err)}`);

}else{
    console.log(`\nSync writing completes successfully`);
}