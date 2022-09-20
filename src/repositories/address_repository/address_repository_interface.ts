export interface AddressRepositoryInterface{
    getAdressByUserIdLinkApi(userId: string): Promise<any>;
}