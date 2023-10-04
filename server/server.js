const express = require('express')
const { MongoClient } = require('Mongodb')
const cors = require('cors')
const { response } = require('express')
const jwt = require('jsonwebtoken');

const app = express()
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://nitish:anjali@cluster0.cyw7uez.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect();
const db = client.db("s17");
const col = db.collection("c211");

app.get('/',(_request,response) => {
    response.send('This is a server')
})

app.post('/insert',(request, response) => {
    console.log(request.body);
    col.insertOne(request.body);
    response.send(request.body);
})



app.get('/check',(req,res)=>{
    
      async function find(){
      try{
        const result=await col.findOne({email:req.query.un})
        if(result == null)
        {
          res.send("FAIL")
        }
        else{
          if(req.query.pw === result.pw)
          {
            res.send("PASS")
          }
          else
          {
            res.send("FAIL")
          }
  
        }
        
      }
      finally{}  
    }
    find().catch(console.dir)
  })



  app.get('/verify/:token', (req, res)=>{
    const {token} = req.params;
  
    // Verifying the JWT token 
    jwt.verify(token, 'ourSecretKey', function(err, decoded) {
        if (err) {
            console.log(err);
            res.send("Email verification failed, possibly the link is invalid or expired");
        }
        else {
            res.send("Email verifified successfully");
        }
    });
  });
  
  app.listen(9000, (error) =>{
      if(!error)
          console.log("Server is Successfully Running, and App is listening on port "+ 9000)
      else
          console.log("Error occurred, server can't start", error);
      }
  );



console.log("server started") //hi


