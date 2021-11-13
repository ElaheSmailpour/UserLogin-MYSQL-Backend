const express = require("express")
const db = require("./models/index")
const app = express();
const cors=require("cors")
const userRoutes = require("./routes/userRoute")
app.listen(3010,()=>{console.log('app listened')})
app.use(express.json())
app.use(cors())
app.use(userRoutes)



db.sequelize.sync();



