import express from "express";
import bodyParser from "body-parser";
import { dirname} from "path";
import { fileURLToPath } from "url";

const dirName = dirname(fileURLToPath(import.meta.url));
// console.log(dirName);
const app = express();
const port = 3000;

let userIsAuthorised = false;

app.use(bodyParser.urlencoded({
    extended: true
}));

function passwordCheck(req, res, next){
    const password = req.body["password"];
    if(password === "iamGood"){
        userIsAuthorised = true;
    }
    next();
}
app.use(passwordCheck);


app.get("/", (req, res) =>{
    res.sendFile(`${dirName}/public/index.html`);
});

app.post("/check", (req, res) =>{
    if(userIsAuthorised){
        res.sendFile(`${dirName}/public/secret.html`);
    } else {
        res.sendFile(`${dirName}/public/index.html`);
    }
});


app.listen(port, (req, res)=>{
    console.log(`Listeing on port ${port}`);
});

