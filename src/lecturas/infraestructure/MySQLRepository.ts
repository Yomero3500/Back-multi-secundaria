import { Lecturas } from "../domain/lecturas";
import { lecturtasRepository } from "../domain/lecturasRepository";
import LecturaModel from "./model/lecturaModel";

export class MySQLRepository implements lecturtasRepository{
    async newData(tipo: string, valor: number, correo_cliente:string): Promise<Lecturas | null> {
        try {
            const createdData = await LecturaModel.create({tipo, valor, correo_cliente})
            const data: any = new Lecturas(createdData.id, createdData.tipo,createdData.valor, createdData.correo_cliente)
            if (data) {
                return data;
            } else {
             return null;   
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async getData( correo_cliente: string): Promise<Lecturas []| null> {
        try {
            const searchedData = await LecturaModel.findAll({where:{correo_cliente:correo_cliente}});
            return searchedData.map(
                (data)=> 
                    new Lecturas(
                        data.id,
                        data.tipo,
                        data.valor,
                        data.correo_cliente
                    )
            )
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}