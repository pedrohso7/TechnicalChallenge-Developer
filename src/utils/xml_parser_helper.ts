import { User } from '../app/entities/user';
import xmlParser from 'xml2json'; 
import { Address } from '../app/entities/address';


export class XmlParserHelper{ 
    protected convertXmlToObject(xmlData: string): any {
        const jsonData = xmlParser.toJson(xmlData);

        const xmlObject = JSON.parse(jsonData);

        return xmlObject.data;
    };

    protected convertToUserArray(usersList: any[]): User[]{
        let users: User[] = [];

        usersList.forEach((user: any) => {
            users.push(new User({
                externalId: user.id,
                fullName: `${user.firstName} ${user.lastName}`,
                email: user.email,
                address: 'teste',
                addressNumber: 573,
                phoneNumber: '(31) 99939-8359'
            }));
        });

        return users;
    };

    public convertToUsers(usersXmlData: string): User[] {
        const usersObject = this.convertXmlToObject(usersXmlData);

        const usersList = usersObject.usersList.item;

        return this.convertToUserArray(usersList);
    };

    public convertToAddress(addressXmlData: string): any {
        const addressObject = this.convertXmlToObject(addressXmlData);

        const address = addressObject.item[0];
        
        return new Address({
            street: address.street,
            number: parseInt(address.number['$t']),
            zipcode: address.zipcode,
            city: address.city,
            state: address.state,
            country: address.country        
        });
    };

    public convertToObject(xmlData: string): any {
        const xmlObject = this.convertXmlToObject(xmlData);
        console.log(typeof(xmlObject.item));
        if(typeof xmlObject.item === 'object')
            return xmlObject.item;
        return xmlObject.item[0];
    };
}