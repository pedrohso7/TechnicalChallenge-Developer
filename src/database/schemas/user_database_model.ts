const mongoose = require('../mongo');

interface UserDatabaseModelProps {
    databaseModel: any
}

export class UserDatabaseModel {
    private props: UserDatabaseModelProps

    constructor(){
        const userSchema = new mongoose.Schema({
            fullName: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                unique: true,
                required: true,
                lowercase: true,
            },
            address: {
                type: String,
                required: true,
            },
            addressNumber: {
                type: Number,
                required: true,
            },
            phoneNumber: {
                type: String,
                required: true,
            },
        });
        this.props = {
            databaseModel: mongoose.model('user', userSchema)
        }
    }

    get databaseModel(){
        return this.props.databaseModel;
    }
}