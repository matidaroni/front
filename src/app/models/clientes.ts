export class Cliente {

    public codCliente: number;
    public nombre: string;
    public domicilio: string;
    public cuit: number;
    public tel1: string;
    public tel2: string;
    public mail: string;
    public categoria: number;
    public cod_vendedor: number;
    public factura: string;
    public cuentaCte: number;
    public boniRecar: number;

    constructor(codCliente: number, nombre: string, domicilio: string, cuit: number,
        tel1: string, tel2: string, mail: string, categoria: number, cod_vendedor: number,
        factura: string, cuentaCte: number, boniRecar: number) {

        this.codCliente = codCliente;
        this.nombre = nombre;
        this.domicilio = domicilio;
        this.cuit = cuit;
        this.tel1 = tel1;
        this.tel2 = tel2;
        this.mail = mail;
        this.categoria = categoria;
        this.cod_vendedor = cod_vendedor;
        this.factura = factura;
        this.cuentaCte = cuentaCte;
        this.boniRecar = boniRecar;
    }
}
