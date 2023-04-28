import mongoose from "mongoose";
import validator from "validator";


// Defining Schema:

const userSchema = new mongoose.Schema({
    email:{
        type: String, require: true, unique: true, validate: (value) => {
            if (!validator.isEmail(value)){
                throw Error("Email is not in Proper Format")
            }
        }
    },
    phoneNumber: {
        type: Number, require: true,
        validate: (value) => {
            return (/^\d{10}$/.test(value.toString()))
        },
    },
    password: {
        type: String, require: true, validate: (value) => {
            return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value))
        }
    }
})

// Compiling Schema:

const userModel = mongoose.model("userModel", userSchema)

export default userModel