export interface ISocket{
    sendMessage(message: any):Promise<boolean|null>;
}