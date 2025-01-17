const fs = require('fs');
const csv = require('csv-parser');

//delete existing files
require('./delete_file.js');

let fileName = "input_countries.csv";


console.log(`Processing countries data from ${fileName}`);

fs.readFile(fileName, "utf-8", (err, data) => {
    if (err){
        console.log(`Unable to read from ${fileName} : ${JSON.stringify(err)}`);
    }else if (data){
        //console.log(`file data : \n${data}`);
        //Procesing rows of file CSV

        const rows = data.split("\n")
        let columns = [];
        let country = "";
        let fileToWrite = "";
        let dataToWrite = "";

        //select Canada and USA
        rows.forEach(row => {
            columns = row.split(",");
            country = columns [0]; //first row is country name

            //if Canada or USA  take it

            if (country !== undefined && (country.toLowerCase() === 'canada' || country.toLowerCase() === 'united states')) {
                fileToWrite = `${country}.txt`;
                dataToWrite = `${row}\n`;


                fs.appendFile(fileToWrite, dataToWrite, 'utf-8', (writeErr) => {
                    if (writeErr){
                        console.log(`Unable to append to ${fileToWrite} : ${JSON.stringify(writeErr)}`);
                    }else{
                        console.log(`data written to ${fileToWrite}`);
                    }

                });
            }
            
        });

    }else {
        console.log(`No data available from file.`);
    }
});