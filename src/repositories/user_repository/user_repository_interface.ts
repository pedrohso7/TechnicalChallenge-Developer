import { User } from "../../app/entities/user";

export interface UserRepositoryInterface{
    create(user: User): Promise<User | null>;
    // getUsersFromDatabase(): Promise<User[]>;
    getUsersLinkApi(limit?: Number, page?: Number): Promise<any>;
    getUserContactByIdLinkApi(userId: String): Promise<any>;
}