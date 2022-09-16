import { User } from "../../app/entities/user";
import { UserDatabaseModel } from "../../database/schemas/user_database_model";
import { UserRepositoryInterface } from "./user_repository_interface";

export class UserRepository implements UserRepositoryInterface {
    async create(user: User): Promise<User | null> {
        const userDB = new UserDatabaseModel();
        return userDB.databaseModel().create(user);
    }

    async getUsersFromExternalApi(): Promise<User[]>{
        return [];
    }
}