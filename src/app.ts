import express from 'express';
import { Signale } from 'signale';
import helmet from 'helmet';
import cors from 'cors';
import { lecturasRouter } from './lecturas/infraestructure/lecturasRouter';
import { iniciarBD } from './database/sequelize';


const options = {
    secrets: ["([0-9]{4}-?)+"]
};

const app = express();
const signale = new Signale(options);

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/lectura', lecturasRouter);

async function startServer() {
    try {
        await iniciarBD();
        app.listen(3001, () => {
            signale.success("Server online in port 3000")
        })

    } catch (error) {
        signale.error("Error al iniciar el servidor", error)
    }
}
startServer();