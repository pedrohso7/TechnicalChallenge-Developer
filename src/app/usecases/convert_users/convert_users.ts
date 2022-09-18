import { User } from '../../entities/user';
import xmlParser from 'xml2json'; 

interface  ConvertUsersParams {
    usersData: string
}

type ConvertUsersResponse = User[]

export class ConvertUsers{ 
    convertArray(usersList: any[]): User[]{
        let users: User[] = [];

        usersList.forEach((user: any) => {
            users.push(new User({
                fullName: `${user.firstName} ${user.lastName}`,
                email: user.email,
                address: 'teste',
                addressNumber: 573,
                phoneNumber: '(31) 99939-8359'
            }));
        });

        return users;
    };

    execute({usersData}: ConvertUsersParams): ConvertUsersResponse | null {
        try{
            const jsonUsers = xmlParser.toJson(usersData);

            const usersObject = JSON.parse(jsonUsers);

            const usersList = usersObject.data.usersList.item;

            return this.convertArray(usersList);
        } catch (error){
            throw error;
        }
    };
}