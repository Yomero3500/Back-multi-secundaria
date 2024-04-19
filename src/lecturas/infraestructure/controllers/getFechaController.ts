import { GetTotalUseCase } from "../../app/getFechaUseCase";
import {Request, Response} from "express";

export class GetTotalController{
    constructor(readonly getData: GetTotalUseCase){}
    async run ( req: Request, res: Response){
        try {
            const {fechaInicio, fechaFin,correo_cliente}:any = req.query;
            const searchedData = await this.getData.run(fechaInicio, fechaFin, correo_cliente);
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