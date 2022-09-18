import { User } from "../../app/entities/user";
import { UserDatabaseModel } from "../../database/schemas/user_database_model";
import { UserRepositoryInterface } from "./user_repository_interface";
import { ApiLinkAxios } from "../api_link_axios";
import { Response } from "express";

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

    async getUsersFromExternalApi(limit?: Number, page?: Number): Promise<any>{
        try{
            const api = new ApiLinkAxios();

            let response = await api.axios.get('users', {
                limit: limit != undefined ? limit : undefined,
                page: page != undefined ? page : undefined,
            });
            return response;
        } catch (error){
            console.log(error);
            throw error;
        }    
    }
}