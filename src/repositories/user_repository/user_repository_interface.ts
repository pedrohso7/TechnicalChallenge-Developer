import { User } from "../../app/entities/user";

export interface UserRepository{
    create(user: User): Promise<User | null>;
}