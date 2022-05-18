const mongoose = require ('mongoose');
const app = require('./app');
const port = 3700;  
mongoose.promise = global.promise;
       app.listen(port,()=>{
              console.log("server up");
          }) 