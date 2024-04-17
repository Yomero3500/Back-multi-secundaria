import { Lecturas } from "./lecturas";

export interface lecturtasRepository{
    newData(tipo:string, valor: number, correo_cliente:string):Promise<Lecturas| null>;
    getData(correo_cliente:string): Promise<Lecturas[]| null>
    getFecha(fecha:string, correo_cliente:string):Promise<Lecturas[]|null>
}