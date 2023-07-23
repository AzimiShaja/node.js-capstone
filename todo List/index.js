import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 5500;


let i = 0;
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req , res ) => {
    res.render("index.ejs");
});
const data =  {
    todoList: [],
}

app.post("/submit", (req, res) => {
    let name = req.body["todo"];

   
    data.todoList.push(name);

    // console.log(data.todoList.length);

    res.render("index.ejs", data);
});

app.get("/work", (req,res) => {

    res.render("work.ejs");
});
  

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
})