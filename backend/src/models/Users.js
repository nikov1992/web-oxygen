import {Schema , model} from "mongoose"

const User = new Schema({
    Name: {
        type: String,
        required: true,
        trim: true, /// esto al final lo que hace borra los espacios
    },
    Surname: {
        type: String,
        trim: true,
    },

    Email: {
        type: String,
        trim: true,
        unique: false, //UNIQUE EMAIL
    },

    Company: {
        type: String,
        trim: true
    },

    Country:{
        type: String,
        trim: true
    },

    Pass: {
        type: String,
        trim: true,
    },

    Pass2: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true,  // when user is created
    versionKey: false , // esto es para evitar los __v de mongoose / nodemon
});

// createdAt
// updatedAt

//export schema named User
export default model('Users',User)



