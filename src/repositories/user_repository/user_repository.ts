import { User } from "../../app/entities/user";
import { UserDatabaseModel } from "../../database/schemas/user_database_model";
import { UserRepository } from "./user_repository_interface";

export class InMemoryUserRepository implements UserRepository{
    async create(user: User): Promise<User | null> {
        const userDB = new UserDatabaseModel();
        return userDB.databaseModel().create(user);
    }
}