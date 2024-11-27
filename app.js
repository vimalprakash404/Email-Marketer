const  express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const router = require('./src/routes');


const port = 3000|| process.env.PORT;

app.use(bodyParser.json());


dotenv.config();


require("./db/connection");



app.use("/api", router)

app.set("port" , port);







app.listen(port , () => console.log(`server is running on port ${port}`));  
