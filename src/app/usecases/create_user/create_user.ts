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
    private userRepository: UserRepositoryInterface

    constructor(repository: UserRepositoryInterface){
        this.userRepository = repository;
    }

    async execute(request: CreateUserParams): Promise<CreateUserResponse>{
        const user = new User(request);
        
        const response =  await this.userRepository.create(user);

        return response;
    }
}