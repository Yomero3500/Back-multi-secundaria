export interface INodeMailer {
    sendMail(email: string, name: string, password: string): Promise<boolean>;
}