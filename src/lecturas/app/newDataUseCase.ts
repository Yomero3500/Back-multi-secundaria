import { Lecturas } from "../domain/lecturas";
import { lecturtasRepository } from "../domain/lecturasRepository";
import { SocketService } from "../infraestructure/helpers/socketIO";
import { NodeMailerService } from "../infraestructure/helpers/nodeMailer";

export class NewDataUseCase{
    constructor(readonly lectuRepo: lecturtasRepository, readonly socket: SocketService, readonly nodeMail:NodeMailerService){}
    async run(tipo: string, valor: number, correo_cliente:string):Promise<Lecturas| null>{
        try {
            const createdData: any = await this.lectuRepo.newData(tipo, valor, correo_cliente);
            if (tipo=="Vrms" && valor<30) {
                await this.nodeMail.sendPaas(correo_cliente)
            } else {
                await this.socket.sendMessage(createdData)
            }
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