let express=require('express')
let app=express()
let body=require('body-parser')
app.use(body.urlencoded({extended:true}))
let port=1500;
let expenses=[];
app.get('/',(req,res)=>{
    res.render('app.ejs',{expenses})

    // res.render('app.ejs',{Sno,Name,Amount,Type,Delete})
})


app.post("/ejs",(req,res)=>{
    let newExpense = {
        Name: req.body.user,  // Match with `name="user"` in form input
        Amount: req.body.amount|| 0,  // Add amount handling
        Type: req.body.Income,  // Handle type selection
    };

    expenses.push(newExpense);
    res.redirect("/ejsdemo")
})

app.post("/delete/:index", (req, res) => {
    const index = req.params.index;
    expenses.splice(index, 1); // Remove the expense at the given index
    res.redirect("/ejsdemo"); // Refresh the page
});

app.listen(port,console.log("port running",port));
