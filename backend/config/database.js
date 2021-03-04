const mongoose = require('mongoose');

const connectDatabase = ()=>{
	mongoose.connect(process.env.MONGO_DB,{
		useNewUrlParser:true,
		useUnifiedTopology:true,
		useCreateIndex: true
	}).then(con=>{
		console.log(`MongoDb database connected with HOST: ${con.connection.host}` )
	})
}

module.exports = connectDatabase;