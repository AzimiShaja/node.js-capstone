import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { url } from "inspector";
import { error } from "console";

inquirer
.prompt([{
    message: "Type your url:",
    name: "URL"
}])
.then((ans) =>{
    const url = ans.URL;
    let qr_svg = qr.image(url);

    qr_svg.pipe(fs.createWriteStream('myQr.png'));

    fs.writeFile('url.txt', url, (error) =>{
        if (error) throw error;

        console.log("JOB done");
    });
})
.catch((error) =>{
    if(error){

    } else {

    }
});
