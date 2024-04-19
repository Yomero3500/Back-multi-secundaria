import nodemailer from "nodemailer";
import { INodeMailer } from "../../domain/services/NodeMailer";

export class NodeMailerService implements INodeMailer {

  async sendMail(email: string, name: string): Promise<boolean> {
    try {
      const info = await transporter.sendMail({
        from: `PowerWatch`,
        to: email,
        subject: `Correo de verificacion para ${name}`,
        html: `
        <b>Bienvenido a PowerWatch</b><br/>
        <b>Si desea adquirir uno de nuestros productos por favor pongase en contacto con nuestro 
        agente mas cercano al siguiente número: 9671941293</b><br/>
        <b>O a la siguiente direccion de correo</b>`,
      });
      if (info) {
        console.log("email enviado");
      } else {
        console.log("hubo un problema al enviar el email");
      }
    } catch (error) {
      console.log(error);
    }
    return true;
  }

  async sendPaas(email: string,): Promise<boolean> {
    try {
      const info = await transporter.sendMail({
        from: `PowerWatch`,
        to: email,
        subject: `Correo de advertencia`,
        html: `
        <b>!!!IMPORTANTE!!!</b></br><b>Se ha detectado una anomalia en la red electrica</b>`,
      });
      if (info) {
        console.log("email enviado");
      } else {
        console.log("hubo un problema al enviar el email");
      }
    } catch (error) {
      console.log(error);
    }
    return true;   
  }
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "powerwatch468@gmail.com",
    pass: "yidq jgmu hxyk qybs",
  },
});
