import { ISocket } from "../../domain/services/SocketIO";

export class SocketUserService{
    constructor(readonly socket: ISocket){}

    async run(message: any):Promise<Boolean|null>{
        try {
            const notification= await this.socket.sendMessage(message)
            if (notification) {
                return true;
            } else {
                return false
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}