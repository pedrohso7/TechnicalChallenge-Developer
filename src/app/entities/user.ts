export interface UserProps {
    externalId: String,
    fullName: String
    email: String
    address: String
    addressNumber: Number
    phoneNumber: String
}

export class User {
    private props: UserProps

    constructor(props: UserProps){
        this.props = props;
    }
    
    /* Getters */
    get data(){
        return this.props;
    }
    
    get externalId(){
        return this.props.externalId;
    }

    get fullName(){
        return this.props.fullName;
    }

    get email(){
        return this.props.email;
    }

    get address(){
        return this.props.address;
    }

    get addressNumber(){
        return this.props.addressNumber;
    }

    get phoneNumber(){
        return this.props.phoneNumber;
    }

    /* Setters */
    set externalId(id: String){
        this.props.externalId = id;
    }

    set fullName(name: String){
        this.props.fullName = name;
    }

    set email(email: String){
        this.props.email = email;
    }

    set address(address: String){
        this.props.address = address;
    }

    set addressNumber(address: Number){
        this.props.addressNumber = address;
    }

    set phoneNumber(phone: String){
        this.props.phoneNumber = phone;
    }
}