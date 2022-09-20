export interface AddressProps {
    street: string
    number: number
    zipcode: string
    city: string
    state: string
    country: string
}

export class Address {
    private props: AddressProps

    constructor(props: AddressProps){
        this.props = props;
    }
    
    /* setters */
    get data(){
        return this.props;
    }
    
    get street(){
        return this.props.street;
    }

    get number(){
        return this.props.number;
    }

    get zipcode(){
        return this.props.zipcode;
    }

    get city(){
        return this.props.city;
    }

    get state(){
        return this.props.state;
    }

    get country(){
        return this.props.country;
    }

    /* Setters */
    set street(street: string){
        this.props.street = street;
    }

    set number(streetNumber: number){
        this.props.number = streetNumber;
    }

    set zipcode(zipcode: string){
        this.props.zipcode = zipcode;
    }

    set city(city: string){
        this.props.city = city;
    }

    set state(state: string){
        this.props.state = state;
    }

    set country(country: string){
        this.props.country = country;
    }
}