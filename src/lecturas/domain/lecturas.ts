export class Lecturas{
    constructor(
        readonly id: number,
        readonly tipo: string,
        readonly valor: number,
        readonly correo_cliente: string
    ){}
}