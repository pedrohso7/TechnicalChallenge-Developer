import { User } from "../../app/entities/user";

export interface UserRepositoryInterface{
    create(user: User): Promise<User | null>;
    // getUsersFromDatabase(): Promise<User[]>;
    getUsersFromExternalApi(limit?: Number, page?: Number): Promise<any>;
}