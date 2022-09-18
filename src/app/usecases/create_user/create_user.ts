import { UserRepositoryInterface } from '../../../repositories/user_repository/user_repository_interface'
import { User } from '../../entities/user'

interface  CreateUserParams {
    fullName: String
    email: String
    address: String
    addressNumber: Number
    phoneNumber: String
}

type CreateUserResponse = User | null

export class CreateUser{
    private userRepository

    constructor(repository: UserRepositoryInterface){
        this.userRepository = repository;
    }

    async execute(request: CreateUserParams): Promise<CreateUserResponse>{
        const user = request as User;

        const response =  await this.userRepository.create(user);

        return response;
    }
}