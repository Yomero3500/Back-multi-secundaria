import { Lecturas } from "../domain/lecturas";
import { lecturtasRepository } from "../domain/lecturasRepository";
import LecturaModel from "./model/lecturaModel";
import { Op, Sequelize } from 'sequelize';

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

    async getData( fecha: Date, correo_cliente: string): Promise<number| null> {
        try {
            const searchedData:any = await LecturaModel.findOne({
                attributes: [
                    [Sequelize.fn('SUM', Sequelize.col('valor')), 'total_kWh']
                  ],
                where: {
                  createdAt: {
                    [Op.gte]: fecha,
                  },
                  correo_cliente:correo_cliente,
                  tipo: "kWh"
                }, 
                
              })
            return searchedData
            
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getFecha( fechaInicio: Date, fechaFin:Date,correo_cliente: string): Promise<number| null> {
        try {
            const searchedData:any = await LecturaModel.findOne({
                attributes: [
                    [Sequelize.fn('SUM', Sequelize.col('valor')), 'total_kWh']
                  ],
                where: {
                  createdAt: {
                    [Op.gte]: fechaInicio,
                    [Op.lte]: fechaFin
                  },
                  correo_cliente:correo_cliente,
                  tipo: "kWh"
                }, 
                
              })
            return searchedData
            
        } catch (error) {
            console.error(error);
            return null;
        }
    }



}