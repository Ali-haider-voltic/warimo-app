import mongoose from 'mongoose'
export async function connect() {
    try{
        mongoose.connect(process.env.MONGODB_URI)
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log("MongoDb Connect successfully")
        })
        connection.on('error',()=>{
            console.log("MongoDb connection error");
            process.exit()
        })
    }
    catch(error){
        console.log('something went wrong')
        console.log(error)
    }
    
}