import { NodeMailerService } from "../../infraestructure/helpers/nodeMailer";

export class NodeMailerUserService {
  constructor(readonly nodeMailer: NodeMailerService) {}
  async run(email: string, name: string, password: string): Promise<boolean> {
    try {
      const notification = await this.nodeMailer.sendMail(email, name);
      if (notification) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
