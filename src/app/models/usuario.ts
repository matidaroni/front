export class Usuario {

    public id: number;
    public email: string;
    public rol: string;
    public cliente: string;
    public password: string;
    public gettoken: string;

    constructor(id: number, email: string, rol: string, cliente: string, password: string) {
        this.id = id;
        this.email = email;
        this.rol = rol;
        this.cliente = cliente;
        this.password = password;
        this.gettoken = 'false';
    }
}
