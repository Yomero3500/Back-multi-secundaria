import {Request, Response} from "express";
import { NewDataUseCase } from "../../app/newDataUseCase";

export class NewDataController{
    constructor(readonly newData: NewDataUseCase){}
    async run(req: Request, res: Response){
        try {
            const {tipo, valor, correo_cliente} = req.body;
            const createdData = await this.newData.run(tipo, valor, correo_cliente);
            if (createdData) {
                res.status(200).send({
                    status: "success",
                    data:{
                        createdData
                    },
                    message:"Registro exitoso"
                })
            }else{
                return res.status(401).send({
                    status: "Error",
                    data: [],
                    message: "Error al crear el registro"
                }) 
            }
        } catch (error) {
            console.log("Error en newDataController",error);
            res.status(500).send({
                status: "error",
                message: "Error en Server"
            })
        }
    }
}