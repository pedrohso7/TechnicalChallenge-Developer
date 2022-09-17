import { User } from "../../app/entities/user";
import { UserDatabaseModel } from "../../database/schemas/user_database_model";
import { UserRepositoryInterface } from "./user_repository_interface";
import { ApiLinkAxios } from "../api_link_axios";

export class UserRepository implements UserRepositoryInterface {
    async create(user: User): Promise<User | null> {
        try{
            const userDB = new UserDatabaseModel();
            return userDB.databaseModel().create(user);
        } catch (error){
            console.log(error);
            throw error;
        }    
    }

    async getUsersFromExternalApi(): Promise<User[]>{
        try{
            const api = new ApiLinkAxios();

            let response = await api.axios.get('users');
            console.log(response);
            return [];
        } catch (error){
            console.log(error);
            throw error;
        }    
        
    }
}