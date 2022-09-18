import express from 'express';
import { ConvertUsers } from './app/usecases/convert_users/convert_users';
import { UserRepository } from './repositories/user_repository/user_repository';
import { User } from './app/entities/user';
import dotenv from 'dotenv'
import { CreateUser } from './app/usecases/create_user/create_user';
dotenv.config();

const app = express();

app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}!`));

async function main (){ 
    try{
        const userRepository = new UserRepository();

        const usersData = await userRepository.getUsersFromExternalApi();

        const xmlString = usersData.data.toString();

        const convertUsers = new ConvertUsers();

        const users = convertUsers.execute({ usersData: xmlString });

        const createUser = new CreateUser(userRepository);

        users!.forEach(async (user: User) => {
            await createUser.execute(user);
        });
    }catch(error){
        throw error;
    }
    
};

main();

export default app;

