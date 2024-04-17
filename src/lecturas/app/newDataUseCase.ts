import { Lecturas } from "../domain/lecturas";
import { lecturtasRepository } from "../domain/lecturasRepository";
import { SocketService } from "../infraestructure/helpers/socketIO";

export class NewDataUseCase{
    constructor(readonly lectuRepo: lecturtasRepository, readonly socket: SocketService){}
    async run(tipo: string, valor: number, correo_cliente:string):Promise<Lecturas| null>{
        try {
            const createdData: any = await this.lectuRepo.newData(tipo, valor, correo_cliente);
            await this.socket.sendMessage(createdData)
            if (createdData) {
                return createdData;
            } else {
                return null;
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}