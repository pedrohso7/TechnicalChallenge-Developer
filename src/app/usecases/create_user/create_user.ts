import { UserRepository } from '../../../repositories/user_repository/user_repository_interface'
import { User } from '../../entities/user'

interface  CreateUserRequest {
    fullName: String
    email: String
    address: String
    addressNumber: Number
    phoneNumber: String
}

type CreateUserResponse = User | null

export class CreateUser{
    private userRepository: UserRepository

    constructor(repository: UserRepository){
        this.userRepository = repository;
    }

    async execute(request: CreateUserRequest): Promise<CreateUserResponse>{
        const user = new User(request);
        
        const response =  await this.userRepository.create(user);

        return response;
    }
}