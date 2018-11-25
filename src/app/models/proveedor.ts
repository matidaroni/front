export class Proveedor {

    public codProveedor: number;
    public cuit; number;
    public descripcion: string;
    public domicilio: string;
    public provincia: string;
    public mail: string;
    public tel1: string;
    public tel2: string;
    public responsable: string;

    constructor(codProveedor: number, cuit: number, descripcion: string, domicilio: string,
        provincia: string, mail: string, tel1: string, tel2: string, responsable: string) {

        this.codProveedor = codProveedor;
        this.descripcion = descripcion;
        this.domicilio = domicilio;
        this.provincia = provincia;
        this.mail = mail;
        this.tel1 = tel1;
        this.tel2 = tel2;
        this.cuit = cuit;
        this.responsable = responsable;
    }
}
