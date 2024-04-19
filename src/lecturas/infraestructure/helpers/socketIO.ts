import { io } from "socket.io-client";
import { ISocket } from "../../domain/services/SocketIO";

export class SocketService implements ISocket   {
    async sendMessage(message: any): Promise<boolean | null> {
        try {
            const url:any = process.env.URL;
            const socket = io("https://back-multi-socketserver.onrender.com");
            const tipo= message.tipo;
            const valor= message.valor;
            const user = message.correo_cliente;
            const data = {tipo: tipo, valor: valor, user: user};
            socket.on("connect", () => {
                console.log("Conectado al servidor", data);
                socket.emit("message", data);
            })
            return true;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
} 