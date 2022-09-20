import express from 'express';
import cron from 'node-cron';
import { UserRepository } from './repositories/user_repository/user_repository';
import { User } from './app/entities/user';
import { CreateUser } from './app/usecases/create_user/create_user';
import { AddressRepository } from './repositories/address_repository/address_repository.ts';
import dotenv from 'dotenv'
import { XmlParserHelper } from './utils/xml_parser_helper';
dotenv.config();

const app = express();

app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}!`));

async function main (){ 
    try{
        const userRepository = new UserRepository();

        const addressRepository = new AddressRepository();

        const xmlParserHelper = new XmlParserHelper();

        const usersDataResponse = await userRepository.getUsersLinkApi();

        let xmlString = usersDataResponse.data.toString();

        const users = xmlParserHelper.convertToUsers(xmlString);

        const createUser = new CreateUser(userRepository);

        await Promise.all(
            users!.map(async (user: User, index: number) => {
                try{
                    const userContactResponse = await userRepository.getUserContactByIdLinkApi(user.externalId);
    
                    const addressResponse = await addressRepository.getAdressByUserIdLinkApi(user.externalId);

                    let xmlString = addressResponse.data.toString();

                    const address = xmlParserHelper.convertToAddress(xmlString);

                    xmlString = userContactResponse.data.toString();

                    const contact = xmlParserHelper.convertToObject(xmlString);
                    
                    user.phoneNumber = contact.phoneNumber;

                    user.address = address.street;

                    user.addressNumber = address.number;

                    await createUser.execute(user);
                } catch (error){
                    throw error;
                }
            }),
        );
    }catch(error){
        console.log(error);
    }  
};

cron.schedule('*/1 * * * *', async () => {await main(); console.log('rodou')});

export default app;