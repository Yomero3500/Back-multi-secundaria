import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();
import LecturaModel from "../lecturas/infraestructure/model/lecturaModel";

export const sequelize = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 3306,
    models: [LecturaModel],
});

export async function iniciarBD() {
    try {
        console.log(process.env.DB_HOST);
        await sequelize.authenticate();
        console.log('Conection established successfully');
        await sequelize.sync({force: false});
    } catch (error) {
        console.log(' No se pudo conectar a la base de datos', error);
        process.exit(1);
    }
}