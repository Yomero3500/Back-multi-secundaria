import { Lecturas } from "../domain/lecturas";
import { lecturtasRepository } from "../domain/lecturasRepository";
import { SocketService } from "../infraestructure/helpers/socketIO";

export class GetDataUseCase{
    constructor(readonly lectuRepo: lecturtasRepository, readonly socket: SocketService){}
    async run(correo_cliente: string):Promise<Lecturas|null>{
        try {
            const searchedData: any = await this.lectuRepo.getData(correo_cliente);
            if (searchedData) {
                return searchedData;
            }else{
                return null;
            }
        } catch (error) {
            console.error(error);
            return null
        }
    }
}