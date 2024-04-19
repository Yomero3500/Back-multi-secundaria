import {Request, Response} from "express";
import { GetDataUseCase } from "../../app/getDataUseCase";

export class GetDataController{
    constructor(readonly getData: GetDataUseCase){}
    async run ( req: Request, res: Response){
        try {
            const {fecha,correo_cliente}:any = req.query;
            const searchedData = await this.getData.run(fecha, correo_cliente);
            if (searchedData) {
                res.status(200).send({
                status: "success",
                data: searchedData
            })
            } else {
                res.status(401).send({
                    status: "Error",
                    data: [],
                    message: "Error al conseguir un dato"
                })
            }

        } catch (error) {
            console.error(error);
            res.status(500).send({
                status: "error",
                message: "Error en el servidor"
            })
        }
    }
}