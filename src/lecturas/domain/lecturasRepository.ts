import { Lecturas } from "./lecturas";

export interface lecturtasRepository{
    newData(tipo:string, valor: number, correo_cliente:string):Promise<Lecturas| null>;
    getData(fecha: Date,correo_cliente:string): Promise<number| null>
    getFecha(fechaInicio: Date, fechaFin: Date, correo_cliente: string): Promise<number| null>
}