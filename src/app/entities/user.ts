export interface AppointmentProps {
    fullName: String
    email: String
    address: String
    addressNumber: Number
    phoneNumber: String
}

export class User {
    private props: AppointmentProps

    constructor(props: AppointmentProps){
        this.props = props;
    }
    
    /* Getters */
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