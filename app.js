const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var req_att =30;
var sub1,sub2,sub3,sub4,sub5,sub6;
var count1=  0, count2=0,count3=0,count4=0,count5=0,count6=0;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');

app.get('/',function(req,res){
    
   res.render("index");
})
app.post("/",(res,req)=>{
    res.redirect("/calendar");
})
app.get('/calendar',(req,res)=>{
    
    res.render("calendar");

})

app.get("/report",(req,res)=>{
    res.render("report")
})

app.post('/calendar',(req,res)=>{
    count1  = req.body.count1;
    count2 = req.body.count2;
    count3 = req.body.count3;
    count4 = req.body.count4;
    count5 = req.body.count5;
    sub1 = req.body.sub1;
    sub2 = req.body.sub2;
    sub3 = req.body.sub3;
    sub4 = req.body.sub4;
    sub5 = req.body.sub5;
    console.log(sub1);
    if(sub1 !== undefined){
        count1++;
    }
    if(sub2 !== undefined){
        count2++;
    }
    if(sub3 !== undefined){
        count3++;
    }
    if(sub4 !== undefined){
        count4++;
    }
    if(sub5 !== undefined){
        count5++;
    }
    if(sub6 !== undefined){
        count6++;
    }
    console.log(count1 +" " + count2+" " +count3+ " "+ count4)
    res.redirect('/report');
    
})
app.get("/report",function(req,res){


    res.render("report",{count1 : count1},{count2: count2},{count3: count3},{count4: count4},{count5: count5},{count6 : count6});
})
app.listen(3000,function(){
    console.log("The server is running at port 3000");
})







// Client-Id: 764311447732-vv16jb9nf87js9jqq5jojqi1oq67mcc3.apps.googleusercontent.com
// Client Secret: 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