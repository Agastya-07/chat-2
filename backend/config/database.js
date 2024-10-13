import mongoose from "mongoose";

const connectdb = async() => {
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('Database connected hehe')
    }).catch((error)=>{
        console.log(error)
    })
}

export default connectdb