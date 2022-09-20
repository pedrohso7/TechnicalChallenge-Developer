import { AddressRepositoryInterface } from "./address_repository_interface";
import { ApiLinkAxios } from "../api_link_axios";

export class AddressRepository implements AddressRepositoryInterface {
    async getAdressByUserIdLinkApi(userId: String): Promise<any>{
        try{
            const api = new ApiLinkAxios();

            let response = await api.axios.get(`users/${userId}/address`);
            
            return response;
        } catch (error){
            throw error;
        }    
    }
}